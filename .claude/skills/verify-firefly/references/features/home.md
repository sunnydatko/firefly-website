# Home (`/`)

`app/page.tsx` — composes `Ambient`, `ResponsiveMenu`, `ScrollReveal`,
`Hero`, `About`, `Services`, `FeaturedProjects`, `Testimonial`, `Contact`,
`Footer`.

## Sub-features

- Hero: headline, atmosphere/glow effect (bloom via screen-blended blurred
  duplicate — never a plain `blur()` on the visible image, see project
  memory `feedback_hero_atmosphere_no_blur`).
- About: brand story section.
- Services teaser: links into `/services` and its sub-pages.
- Featured work: cards sourced from `app/data/featuredProjects.ts`, each
  linking via `project.href`.
- Testimonials: quotes with name/title/avatar, sourced from component-local
  data; avatars are cropped/centered webp images.
- Scroll-reveal: sections animate in on scroll (see `ScrollReveal.tsx`).

## How to get to it (user POV)

Root URL `/`.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs open /
node .claude/skills/verify-firefly/control-firefly.mjs screenshot / /tmp/home.png --full-page
node .claude/skills/verify-firefly/control-firefly.mjs console /
node .claude/skills/verify-firefly/control-firefly.mjs network-summary /
```

For featured-project links, confirm `project.href` targets resolve:

```
node .claude/skills/verify-firefly/control-firefly.mjs eval / \
  "[...document.querySelectorAll('a')].map(a => a.getAttribute('href'))"
```

## Gotchas

- `--full-page` screenshots on `/` are long (hero through footer) — fine
  for full-sweep proof, but prefer a `--selector` screenshot scoped to the
  section under test when iterating.
- Scroll-reveal means a `networkidle` wait is not the same as "animations
  finished" — if a capture looks mid-fade, rerun the screenshot once.
