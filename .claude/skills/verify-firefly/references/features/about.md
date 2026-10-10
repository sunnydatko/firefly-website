# About

`app/about/page.tsx`

## Sub-features

- Standalone about page (distinct from the homepage `About` section
  component — check both don't drift when editing brand copy).

## How to get to it (user POV)

Nav → "About" → `/about`.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs open /about
node .claude/skills/verify-firefly/control-firefly.mjs snapshot /about
```

## Gotchas

- `app/components/About.tsx` (homepage section) and `app/about/page.tsx`
  (standalone route) are two separate places brand copy can live — a copy
  change requested as "the about section" is ambiguous between them;
  confirm which one before editing, and verify both if the change should
  apply to each.
