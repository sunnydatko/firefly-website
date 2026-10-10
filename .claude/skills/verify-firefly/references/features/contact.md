# Contact

`app/components/Contact.tsx` (homepage section, `id="contact"`) +
`app/contact/page.tsx` (standalone route) + `app/api/contact/route.ts`
(server action — sends via Resend to a hardcoded address).

## Sub-features

- Form fields: Name (`from_name`), Email (`reply_to`, validated against
  `EMAIL_REGEX`), Message (`message`). All three required.
- Client-side validation with per-field `touched`/`error` state and
  `helperText`.
- Submit → `POST /api/contact` → Resend `emails.send` → success/error
  Snackbar.
- Server validates again (400 on missing/invalid fields) independent of
  client validation.

## How to get to it (user POV)

Homepage, scroll to bottom, or nav CTA ("Let's Glow") → `/contact`.

## Driving it with control-firefly

The driver has a dedicated command for this — it fills all three fields,
clicks "Send Message", and reports both the resulting alert text and the
`/api/contact` response status:

```
node .claude/skills/verify-firefly/control-firefly.mjs submit-contact-form \
  --name "Verification Test" --email verify@example.com --message "Checking the send path"
```

To check client-side validation (empty/invalid submission), use `open` +
`click` on the submit button without filling fields first, then `snapshot`
to read back the `helperText` error strings:

```
node .claude/skills/verify-firefly/control-firefly.mjs click /contact 'button:has-text("Send Message")'
node .claude/skills/verify-firefly/control-firefly.mjs snapshot /contact
```

## Gotchas

- `submit-contact-form` exercises the **real** send path (real Resend call
  to a real inbox) — only run it in dev, and don't spam it. Prefer reading
  the Snackbar text + `/api/contact` status as proof over checking that an
  email actually arrived.
- The API route needs `RESEND_API_KEY` set; a missing/invalid key surfaces
  as a 500 from `/api/contact` and the client's generic "Something went
  wrong" error Alert — not a clean validation 400. `doctor` won't catch
  this; `submit-contact-form` or `network-summary` on a submit attempt
  will show the 500. Confirmed via this driver during the skill's initial
  build: local dev had no `RESEND_API_KEY` set, producing exactly this.
- `[role="alert"]` also matches Next.js's always-empty route announcer —
  see "Driving conventions" in `../../SKILL.md`. `submit-contact-form`
  already excludes it.
- Two separate "contact" surfaces exist (homepage section vs. `/contact`
  page) — same component, different route context; verify the one the
  change actually touches.
