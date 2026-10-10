# Feature map — firefly-website

Index and regression sweep order. Each file below uses the same four
sections: Sub-features, How to get to it (user POV), Driving it with
control-firefly, Gotchas.

Open the one file for the area your change touches. For a broad sweep,
walk this list top to bottom.

1. [navigation.md](navigation.md) — header nav, mobile drawer, scroll state
2. [home.md](home.md) — `/` — hero, about, services teaser, featured work, testimonials
3. [services.md](services.md) — `/services` + the three service detail pages
4. [work.md](work.md) — `/work` + `/work/[slug]` case studies
5. [about.md](about.md) — `/about`
6. [contact.md](contact.md) — `/contact` + `/api/contact` (real Resend send)
7. [footer.md](footer.md) — site-wide footer

Cross-cutting (check against any page, not a standalone route):

- Ambient background / scroll-reveal animations settle before a screenshot
  is taken as proof (see "Driving conventions" in `../../SKILL.md`).
- `PageLoader` shows briefly on route transitions — don't mistake a loader
  frame for a broken page.
