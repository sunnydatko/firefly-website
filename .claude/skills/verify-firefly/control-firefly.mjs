#!/usr/bin/env node
// Verification driver for firefly-website. See SKILL.md for conventions.
// Each content command (open/screenshot/snapshot/...) connects to an
// already-running headless Chromium over CDP, does one fresh-context
// navigate -> act -> report cycle, and exits. `start`/`stop` own the
// long-lived dev server + browser processes.

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import {
  writeFileSync,
  readFileSync,
  existsSync,
  unlinkSync,
  mkdirSync,
  rmSync,
  openSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..", "..", "..");
const SKILL_DIR = __dirname;
const STATE_PATH = join(SKILL_DIR, ".state.json");
const USER_DATA_DIR = join(SKILL_DIR, ".chromium-profile");
const LOG_PATH = join(SKILL_DIR, ".dev-server.log");

const DEFAULT_DEV_PORT = 3100;
const DEFAULT_CDP_PORT = 9333;

function readState() {
  if (!existsSync(STATE_PATH)) return null;
  try {
    return JSON.parse(readFileSync(STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

function writeState(state) {
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function clearState() {
  if (existsSync(STATE_PATH)) unlinkSync(STATE_PATH);
}

function isAlive(pid) {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

async function httpOk(url, { timeoutMs = 2000 } = {}) {
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(t);
    return res.status < 500;
  } catch {
    return false;
  }
}

async function waitFor(check, { timeoutMs = 30000, intervalMs = 300 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await check()) return true;
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return false;
}

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

function parseFlags(args) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = args[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(a);
    }
  }
  return { positional, flags };
}

// ---------------------------------------------------------------------------
// lifecycle
// ---------------------------------------------------------------------------

async function cmdStart(flags) {
  const devPort = Number(flags.port) || DEFAULT_DEV_PORT;
  const cdpPort = Number(flags["cdp-port"]) || DEFAULT_CDP_PORT;

  let state = readState();
  if (state && isAlive(state.devPid) && isAlive(state.browserPid)) {
    console.log(`already running: dev on :${state.devPort}, cdp on :${state.cdpPort}`);
    return;
  }

  mkdirSync(USER_DATA_DIR, { recursive: true });
  const logFd = openSync(LOG_PATH, "a");

  const devProc = spawn("npx", ["next", "dev", "-p", String(devPort)], {
    cwd: REPO_ROOT,
    detached: true,
    stdio: ["ignore", logFd, logFd],
  });
  devProc.unref();

  const devReady = await waitFor(() => httpOk(`http://localhost:${devPort}`), {
    timeoutMs: 45000,
  });
  if (!devReady) {
    fail(`dev server on :${devPort} did not become ready; see ${LOG_PATH}`);
  }

  const execPath = chromium.executablePath();
  const browserProc = spawn(
    execPath,
    [
      `--remote-debugging-port=${cdpPort}`,
      `--user-data-dir=${USER_DATA_DIR}`,
      "--headless=new",
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
    { detached: true, stdio: "ignore" }
  );
  browserProc.unref();

  const cdpReady = await waitFor(
    () => httpOk(`http://localhost:${cdpPort}/json/version`),
    { timeoutMs: 20000 }
  );
  if (!cdpReady) {
    fail(`chromium CDP on :${cdpPort} did not become ready`);
  }

  writeState({
    devPid: devProc.pid,
    devPort,
    browserPid: browserProc.pid,
    cdpPort,
    startedAt: new Date().toISOString(),
  });

  console.log(`started: dev http://localhost:${devPort}, cdp http://localhost:${cdpPort}`);
}

function killIfAlive(pid) {
  if (!isAlive(pid)) return false;
  try {
    process.kill(pid, "SIGTERM");
    return true;
  } catch {
    return false;
  }
}

async function cmdStop() {
  const state = readState();
  if (!state) {
    console.log("nothing to stop (no state file)");
    return;
  }
  const killedDev = killIfAlive(state.devPid);
  const killedBrowser = killIfAlive(state.browserPid);
  clearState();
  if (existsSync(USER_DATA_DIR)) rmSync(USER_DATA_DIR, { recursive: true, force: true });
  console.log(
    `stopped (dev pid ${state.devPid}${killedDev ? "" : " already gone"}, browser pid ${state.browserPid}${
      killedBrowser ? "" : " already gone"
    })`
  );
}

async function cmdDoctor() {
  const state = readState();
  console.log(`node: ${process.version}`);
  console.log(`chromium: ${chromium.executablePath()}`);

  if (!state) {
    console.log("state: none — run `start`");
    return;
  }

  const devAlive = isAlive(state.devPid);
  const browserAlive = isAlive(state.browserPid);
  const devHttp = await httpOk(`http://localhost:${state.devPort}`);
  const cdpHttp = await httpOk(`http://localhost:${state.cdpPort}/json/version`);

  console.log(`dev server: pid ${state.devPid} ${devAlive ? "alive" : "DEAD"}, http :${state.devPort} ${devHttp ? "ok" : "UNREACHABLE"}`);
  console.log(`chromium:   pid ${state.browserPid} ${browserAlive ? "alive" : "DEAD"}, cdp :${state.cdpPort} ${cdpHttp ? "ok" : "UNREACHABLE"}`);
  console.log(`started at: ${state.startedAt}`);

  if (!devAlive || !browserAlive || !devHttp || !cdpHttp) {
    console.log("\nsomething is stale — run `stop` then `start`");
  } else {
    console.log("\nall healthy");
  }
}

async function cmdInfo() {
  const state = readState();
  if (!state) {
    console.log("not running");
    return;
  }
  console.log(JSON.stringify(state, null, 2));
}

// ---------------------------------------------------------------------------
// content commands — each connects over CDP, opens a fresh context, acts,
// closes the context, and leaves the shared browser process running.
// ---------------------------------------------------------------------------

function requireState() {
  const state = readState();
  if (!state || !isAlive(state.devPid) || !isAlive(state.browserPid)) {
    fail("not running — run `start` first (or `doctor` to see what's wrong)");
  }
  return state;
}

async function withPage(state, fn) {
  const browser = await chromium.connectOverCDP(`http://localhost:${state.cdpPort}`);
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    return await fn(page, state);
  } finally {
    await context.close();
    // Deliberately not calling browser.close(): this is a CDP connection to
    // a shared, externally-owned browser process (see `start`/`stop`), and
    // closing it here would tear down the browser for every other command.
  }
}

function fullUrl(state, path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `http://localhost:${state.devPort}${p}`;
}

async function cmdOpen(positional) {
  const [path = "/"] = positional;
  const state = requireState();
  await withPage(state, async (page) => {
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrors.push(String(err)));

    const response = await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    const title = await page.title();

    console.log(`url: ${fullUrl(state, path)}`);
    console.log(`status: ${response ? response.status() : "unknown"}`);
    console.log(`title: ${title}`);
    if (consoleErrors.length) {
      console.log(`console errors (${consoleErrors.length}):`);
      for (const e of consoleErrors) console.log(`  - ${e}`);
    } else {
      console.log("console errors: none");
    }
  });
}

async function cmdScreenshot(positional, flags) {
  const [path = "/", out] = positional;
  const state = requireState();
  const outPath = out || join(SKILL_DIR, `screenshot-${Date.now()}.png`);
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    if (flags.selector) {
      await page.locator(String(flags.selector)).screenshot({ path: outPath });
    } else {
      await page.screenshot({ path: outPath, fullPage: Boolean(flags["full-page"]) });
    }
    console.log(`saved: ${outPath}`);
  });
}

async function cmdSnapshot(positional, flags) {
  const [path = "/"] = positional;
  const state = requireState();
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    const locator = flags.selector ? page.locator(String(flags.selector)) : page.locator("body");
    const snapshot = await locator.ariaSnapshot();
    console.log(snapshot);
  });
}

async function cmdClick(positional) {
  const [path = "/", selector] = positional;
  if (!selector) fail("usage: click <path> <selector>");
  const state = requireState();
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    await page.locator(selector).click();
    await page.waitForLoadState("networkidle").catch(() => {});
    console.log(`clicked "${selector}" on ${path}`);
    console.log(`resulting url: ${page.url()}`);
  });
}

async function cmdType(positional) {
  const [path = "/", selector, ...textParts] = positional;
  const text = textParts.join(" ");
  if (!selector || !text) fail("usage: type <path> <selector> <text>");
  const state = requireState();
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    await page.locator(selector).fill(text);
    console.log(`typed into "${selector}" on ${path}`);
  });
}

async function cmdPress(positional) {
  const [path = "/", selector, key] = positional;
  if (!selector || !key) fail("usage: press <path> <selector> <key>");
  const state = requireState();
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    await page.locator(selector).press(key);
    console.log(`pressed "${key}" on "${selector}" (${path})`);
  });
}

async function cmdEval(positional) {
  const [path = "/", expression] = positional;
  if (!expression) fail("usage: eval <path> <jsExpression>");
  const state = requireState();
  await withPage(state, async (page) => {
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    const result = await page.evaluate(expression);
    console.log(JSON.stringify(result, null, 2));
  });
}

async function cmdConsole(positional) {
  const [path = "/"] = positional;
  const state = requireState();
  await withPage(state, async (page) => {
    const messages = [];
    page.on("console", (msg) => messages.push(`[${msg.type()}] ${msg.text()}`));
    page.on("pageerror", (err) => messages.push(`[pageerror] ${err}`));
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });
    console.log(messages.length ? messages.join("\n") : "no console output");
  });
}

async function cmdNetworkSummary(positional) {
  const [path = "/"] = positional;
  const state = requireState();
  await withPage(state, async (page) => {
    const requests = [];
    page.on("response", (res) => {
      requests.push({ url: res.url(), status: res.status() });
    });
    page.on("requestfailed", (req) => {
      requests.push({ url: req.url(), status: "FAILED", error: req.failure()?.errorText });
    });
    await page.goto(fullUrl(state, path), { waitUntil: "networkidle" });

    const failed = requests.filter((r) => r.status === "FAILED" || r.status >= 400);
    console.log(`requests: ${requests.length}, failed/4xx/5xx: ${failed.length}`);
    for (const r of failed) {
      console.log(`  - ${r.status} ${r.url}${r.error ? ` (${r.error})` : ""}`);
    }
  });
}

async function cmdSubmitContactForm(flags) {
  const name = flags.name || "Verification Test";
  const email = flags.email || "verify@example.com";
  const message = flags.message || "Automated verification run via control-firefly.";

  const state = requireState();
  await withPage(state, async (page) => {
    const networkEvents = [];
    page.on("response", (res) => {
      if (res.url().includes("/api/contact")) {
        networkEvents.push({ url: res.url(), status: res.status() });
      }
    });

    await page.goto(fullUrl(state, "/contact"), { waitUntil: "networkidle" });
    await page.locator('[name="from_name"]').fill(String(name));
    await page.locator('[name="reply_to"]').fill(String(email));
    await page.locator('[name="message"]').fill(String(message));
    await page.getByRole("button", { name: "Send Message" }).click();

    // Next.js renders its own always-present, always-empty
    // #__next-route-announcer__ with role="alert" on every page — exclude
    // it so this doesn't match 2 elements and silently grab the wrong one.
    const resultAlert = page.locator('[role="alert"]:not(#__next-route-announcer__)');
    await resultAlert.waitFor({ state: "visible", timeout: 10000 }).catch(() => {});
    const alertText = await resultAlert.innerText().catch(() => "(no alert shown)");

    console.log(`alert: ${alertText}`);
    console.log(`/api/contact responses: ${JSON.stringify(networkEvents)}`);
  });
}

// ---------------------------------------------------------------------------

const HELP = `control-firefly.mjs — verification driver for firefly-website

Lifecycle:
  start [--port N] [--cdp-port N]   start dev server + headless chromium
  stop                               tear both down
  doctor                             health check
  info                                print current state

Inspection:
  snapshot <path> [--selector S]     ARIA accessibility snapshot
  screenshot <path> [out] [--full-page] [--selector S]
  console <path>                     console/page errors for a navigation
  network-summary <path>             failed/4xx/5xx requests for a navigation

Navigation & interaction:
  open <path>                        navigate, report status/title/console
  click <path> <selector>
  type <path> <selector> <text>
  press <path> <selector> <key>

Scripting:
  eval <path> <jsExpression>

Site-specific:
  submit-contact-form [--name N] [--email E] [--message M]
                                      exercises the real /api/contact path

See SKILL.md for the proof bar and driving conventions.
`;

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  const { positional, flags } = parseFlags(rest);

  if (!command || command === "--help" || command === "help") {
    console.log(HELP);
    return;
  }

  switch (command) {
    case "start":
      return cmdStart(flags);
    case "stop":
    case "cleanup":
      return cmdStop();
    case "doctor":
      return cmdDoctor();
    case "info":
      return cmdInfo();
    case "open":
      return cmdOpen(positional);
    case "screenshot":
      return cmdScreenshot(positional, flags);
    case "snapshot":
      return cmdSnapshot(positional, flags);
    case "click":
      return cmdClick(positional);
    case "type":
      return cmdType(positional);
    case "press":
      return cmdPress(positional);
    case "eval":
      return cmdEval(positional);
    case "console":
      return cmdConsole(positional);
    case "network-summary":
      return cmdNetworkSummary(positional);
    case "submit-contact-form":
      return cmdSubmitContactForm(flags);
    default:
      fail(`unknown command "${command}" — see --help`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
