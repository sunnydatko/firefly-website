# Navigation

`app/components/ResponsiveMenu.tsx`

## Sub-features

- Desktop nav bar: transparent over the hero on `/`, solid after scrolling
  past ~5% of viewport height; always solid on non-home routes.
- Mobile drawer: hamburger icon opens a 320px MUI `Drawer` with the same
  nav items plus a "Let's Glow" CTA to `/contact`.
- Active-route highlighting on both desktop and mobile nav items.

## How to get to it (user POV)

Present on every page (rendered from `app/page.tsx` and presumably a
shared layout for inner routes). Nav items: Work (`/work`), Services
(`/services`), About (`/about`), plus brand mark linking home.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs snapshot /
node .claude/skills/verify-firefly/control-firefly.mjs screenshot / /tmp/nav-top.png
# scroll then screenshot again to check the solid-nav transition
node .claude/skills/verify-firefly/control-firefly.mjs eval / "window.scrollTo(0, window.innerHeight); document.title"
```

The mobile drawer needs a narrow viewport; `control-firefly.mjs` doesn't
expose `--viewport` yet — check mobile nav visually via the responsive
design tools in a real browser session (claude-in-chrome), or extend the
driver with a `--viewport WxH` flag on `withPage` before relying on it for
mobile-drawer proof.

## Gotchas

- Transparent-vs-solid nav state is scroll-position-derived client state;
  a plain `open` + screenshot without scrolling will only ever show the
  transparent variant on `/`.
- `isHome` check is an exact `pathname === "/"` match — nested routes
  always render the solid nav.
