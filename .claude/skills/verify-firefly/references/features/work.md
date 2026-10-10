# Work

`app/work/page.tsx` + `app/work/[slug]/page.tsx`, backed by
`app/data/featuredProjects.ts` (and likely a fuller project list for the
index — check the data file if the index shows more than the homepage
teaser).

## Sub-features

- Work index: grid/list of case studies.
- Dynamic case-study route `/work/[slug]`.

## How to get to it (user POV)

Nav → "Work" → `/work`, then click into a project card.

## Driving it with control-firefly

```
node .claude/skills/verify-firefly/control-firefly.mjs open /work

# resolve a real slug from the data file rather than guessing
node .claude/skills/verify-firefly/control-firefly.mjs eval /work \
  "[...document.querySelectorAll('a[href^=\"/work/\"]')].map(a => a.getAttribute('href'))"

node .claude/skills/verify-firefly/control-firefly.mjs open /work/<slug-from-above>
node .claude/skills/verify-firefly/control-firefly.mjs console /work/<slug-from-above>
```

## Gotchas

- `[slug]` is dynamic — an invalid slug should 404 cleanly via
  `app/not-found.tsx`; verify that path too, not just the happy path:

```
node .claude/skills/verify-firefly/control-firefly.mjs open /work/does-not-exist
```

- `open`'s reported HTTP status on an unknown slug is **200**, not 404,
  under `next dev` — confirmed by running the above against this project.
  The page's `notFound()` call does render the real `not-found.tsx`
  content correctly; the status code just doesn't reflect it in dev mode.
  Don't trust `open`'s status field as proof of 404 handling here — check
  rendered content instead:

```
node .claude/skills/verify-firefly/control-firefly.mjs eval /work/does-not-exist "document.body.innerText.slice(0, 300)"
```
