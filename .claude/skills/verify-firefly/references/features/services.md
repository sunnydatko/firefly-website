# Services

`app/services/page.tsx` + `app/services/{logo-branding,business-essentials,websites}/page.tsx`

## Sub-features

- Services index listing the three offerings.
- Three detail pages: logo-branding, business-essentials, websites.

## How to get to it (user POV)

Nav → "Services" → `/services`, then into each sub-page.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs open /services
node .claude/skills/verify-firefly/control-firefly.mjs open /services/logo-branding
node .claude/skills/verify-firefly/control-firefly.mjs open /services/business-essentials
node .claude/skills/verify-firefly/control-firefly.mjs open /services/websites
```

Check that each index card actually links to its detail page:

```
node .claude/skills/verify-firefly/control-firefly.mjs eval /services \
  "[...document.querySelectorAll('a')].map(a => a.getAttribute('href'))"
```

## Gotchas

- These are static marketing pages with no client state — `open` plus a
  console-error check is usually sufficient proof; reserve
  `screenshot`/`snapshot` for layout or copy changes.
