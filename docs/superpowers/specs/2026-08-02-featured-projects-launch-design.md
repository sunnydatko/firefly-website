# Featured Projects: launch with Balanced Bodyworks

## Context

`FeaturedProjects.tsx` and the `/work` section already exist end-to-end (homepage
section, `/work` index, `/work/[slug]` case study pages) but are hidden — the
homepage render is commented out with `{/* hidden until projects approved */}`,
and `app/data/featuredProjects.ts` holds two unapproved placeholder entries
(Balanced Bodyworks, Genivere) with empty case-study copy.

Balanced Bodyworks (Sarah Feinstein, therapeutic bodywork, Oceanside CA) is now
live and is Firefly's first shipped client site. The goal is to feature just
this one project and enable the section; more projects get added to the data
file as they go live.

- Original site: https://www.sarahfeinsteincmt.com/ (Squarespace template,
  generic branding under her own name, unclear/external booking flow, no
  testimonials or social proof)
- New site: https://balanced-bodyworks.netlify.app/ (custom build, dedicated
  "Balanced Bodyworks" brand identity, warm copy, clear service/pricing
  breakdown, visible 5.0 Yelp testimonial, direct booking CTA)

## Changes

### 1. `app/data/featuredProjects.ts`
- Remove the `genivere` entry entirely (not approved; re-add with real
  details when that site goes live).
- Fill in the Balanced Bodyworks case-study fields (`overview`, `challenge`,
  `solution`, `result`) with grounded, non-fabricated copy — no invented
  metrics, since there's no usage data yet:

  - **overview**: Sarah Feinstein, a certified massage therapist in
    Oceanside, CA, came to us with a site that ran on a generic template and
    didn't reflect the calm, intentional care she brings to prenatal,
    postpartum, and therapeutic bodywork. We rebuilt her online presence from
    the ground up — a new brand identity as Balanced Bodyworks, a custom
    website, and a clearer path to booking.
  - **challenge**: The original site lived under Sarah's own name on a stock
    template, with no distinct visual identity, an unclear booking flow, and
    nothing to reassure a new client browsing for the first time. For a
    practice built on trust — especially with prenatal and postpartum
    clients — the site needed to feel as considered as the care itself.
  - **solution**: We gave the practice its own identity, Balanced Bodyworks,
    and built a custom site around it: a warmer homepage, clear service and
    pricing breakdowns, a visible 5-star client testimonial, and a direct
    booking path, in a clean, modern layout that puts the client's comfort
    first.
  - **result**: Balanced Bodyworks launched in 2026 as Firefly's first live
    client site — a clean, trustworthy home base for Sarah's practice to grow
    from.
- Update `year` to `"2026"` (was `"2025"`).

### 2. Single-project layout
- `app/components/FeaturedProjects.tsx` and `app/work/page.tsx`: both
  currently render `featuredProjects.map(...)` into a
  `gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }` grid, built for pairs.
  With one entry, switch to a single centered card (e.g. constrain to
  `maxWidth: 480` and center the grid/container) rather than a half-empty
  2-column grid. Keep the existing card markup/styling (screenshot, hover
  overlay, name/tagline/location/whatWeDid) unchanged — only the outer
  layout changes, and it should still work correctly if more projects are
  added later (i.e. don't hardcode assumptions that break at 2+ items).

### 3. `app/work/[slug]/page.tsx` — Next Project block
- `nextProject` is computed as
  `featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length]`.
  With a single project this wraps to itself, rendering "Next Project:
  Balanced Bodyworks" linking to its own page. Hide the entire "Next Project"
  section (and its preceding `SectionDivider`) when
  `featuredProjects.length <= 1`.

### 4. Enable the section
- `app/page.tsx`: uncomment `<FeaturedProjects />` (remove the
  `{/* <FeaturedProjects /> */}` line and its trailing comment).

## Out of scope
- Retaking/updating the `balanced-bodyworks.png` screenshot — using the
  existing one.
- Changing the card link target — stays as the internal case-study page
  (`/work/balanced-bodyworks`), now that it has real copy.
- Any changes to Genivere beyond removing it from the data file (no case
  study page, no image cleanup).

## Testing
- Visual check in dev server: homepage section renders one centered card,
  `/work` renders one centered card, `/work/balanced-bodyworks` renders case
  study copy and no "Next Project" block.
- `next build` / typecheck passes (removing the Genivere entry must not break
  `generateStaticParams` or any other reference to it).
