# Footer

`app/components/Footer.tsx`

## Sub-features

- Site-wide footer rendered on every page (outside `<main>` in
  `app/page.tsx`).
- Likely contains brand mark, nav/sitemap links, and contact/social links
  — confirm against current source before asserting specifics, this file
  predates a full read of `Footer.tsx`.

## How to get to it (user POV)

Bottom of every page.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs eval / \
  "[...document.querySelector('footer')?.querySelectorAll('a') ?? []].map(a => a.getAttribute('href'))"
node .claude/skills/verify-firefly/control-firefly.mjs screenshot / /tmp/footer.png --selector footer
```

## Gotchas

- None known yet — update this file the first time a footer bug or
  surprising behavior is found, per `SKILL.md`'s "maintained as code"
  convention.
