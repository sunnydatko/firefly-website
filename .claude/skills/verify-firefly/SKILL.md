---
name: verify-firefly
description: Drive a running firefly-website dev build in headless Chromium via CDP. Use for screenshots, clicks, form submission, accessibility-tree inspection, JS evaluation, console/network checks, or visual-state checks.
disable-model-invocation: true
---

# Verify Firefly

Drive a running firefly-website dev build over CDP: navigate pages, take
screenshots, click, type, submit the contact form, read the accessibility
tree, evaluate JS, and read console/network output.

`node .claude/skills/verify-firefly/control-firefly.mjs --help` lists
commands, flags, and examples.

Unlike a long-lived desktop app, each page load here is stateless, so most
commands take a `<path>` and do a full navigate → act → report cycle against
a fresh browser context. The dev server and the headless Chromium instance
are the two things that stay alive between commands — everything else is
reconstructed per invocation.

Run `doctor` first when anything looks off. It reports dev-server liveness,
CDP reachability, and whether `start` needs to be (re-)run.

## Quick start

```
node .claude/skills/verify-firefly/control-firefly.mjs start
node .claude/skills/verify-firefly/control-firefly.mjs doctor
node .claude/skills/verify-firefly/control-firefly.mjs open /
node .claude/skills/verify-firefly/control-firefly.mjs stop
```

`start` launches `next dev` on an isolated port (3100 by default, so it
won't collide with a port the user already has `npm run dev` on) and a
headless Chromium with CDP enabled on port 9333. Both run as detached OS
processes and survive after the `start` command exits. `stop` tears both
down and is the last thing to run in a verification pass.

## Command surface

`--help` is canonical. Categories:

- **Lifecycle:** `start`, `stop`, `doctor`, `info`
- **Inspection:** `snapshot`, `screenshot`, `console`, `network-summary`
- **Navigation & interaction:** `open`, `click`, `type`, `press`
- **Scripting:** `eval`
- **Site-specific:** `submit-contact-form`

Examples:

```
# health
node .claude/skills/verify-firefly/control-firefly.mjs doctor

# load a page and report status/console errors
node .claude/skills/verify-firefly/control-firefly.mjs open /work

# accessibility snapshot of a route
node .claude/skills/verify-firefly/control-firefly.mjs snapshot /services

# screenshot for evidence
node .claude/skills/verify-firefly/control-firefly.mjs screenshot / /tmp/firefly-home.png --full-page

# exercise the real contact form end to end
node .claude/skills/verify-firefly/control-firefly.mjs submit-contact-form \
  --name "Test User" --email test@example.com --message "Verification run"

# inspect console errors on a route
node .claude/skills/verify-firefly/control-firefly.mjs console /about

# check for failed requests / bad status codes
node .claude/skills/verify-firefly/control-firefly.mjs network-summary /work/some-slug
```

## Proof bar

Do not submit "look, it loads" screenshots as proof of a working change.

- Drive the page through real UI (clicks, typed input, the registered
  submit button) and real navigation — not `eval` calls into component
  internals as the primary proof. `eval` is for reading back resulting
  state, not for invoking handlers directly.
- Run `doctor` first. A screenshot against a stale `.next` build or a dev
  server that silently crashed is not evidence.
- Read the relevant file under `references/features/` for the area under
  test. Exercise the entry points, responsive breakpoints, and the
  success/error paths the change can affect.
- For a broad sweep, walk `references/features/README.md` top to bottom.
- Verify side effects, not just pixels: console errors, failed network
  requests, the Snackbar/Alert text after a form submission, the resulting
  URL after a nav click — not just "a screenshot was produced."

## Driving conventions

- Prefer `name`, `aria-label`, and visible text selectors (MUI components
  here render real `<input name="...">` and `<button>` elements). Avoid MUI
  internal class names (`.MuiButton-root` etc.) — they're implementation
  detail and churn across MUI versions.
- Check both the mobile drawer nav and the desktop nav bar when touching
  `ResponsiveMenu` — they're two different DOM subtrees, not a CSS-only
  reflow.
- The contact form hits a real API route (`/api/contact`) that calls Resend.
  `submit-contact-form` does exercise the live send path — only use it
  against a dev environment where that's acceptable, and prefer asserting
  on the Snackbar success/error text plus `network-summary` for the
  `/api/contact` response rather than relying on email delivery as proof.
- Treat scroll-triggered reveal animations (`ScrollReveal`) and route
  transitions (`PageLoader`) as settle conditions: commands wait for
  network-idle by default, but a screenshot taken immediately after a route
  change can still catch an in-flight transition — rerun `screenshot` once
  if a capture looks mid-animation.
- `[role="alert"]` always matches two elements on any page here: Next.js's
  own `#__next-route-announcer__` (always present, always empty) and any
  real alert/snackbar content. Exclude the announcer or you'll silently
  read the wrong one.

## Feature map

The behavior inventory lives in `references/features/`. Each file uses the
same four sections: Sub-features, How to get to it (user POV), Driving it
with control-firefly, Gotchas.
