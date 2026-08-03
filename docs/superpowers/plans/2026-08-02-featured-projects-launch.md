# Featured Projects Launch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enable the (currently hidden) Featured Projects section site-wide, showing only the approved Balanced Bodyworks project, with a single-project-friendly layout.

**Architecture:** All the plumbing already exists — `FeaturedProjects.tsx` (homepage section), `app/work/page.tsx` (index), and `app/work/[slug]/page.tsx` (case study) all read from `app/data/featuredProjects.ts`. No new components. Changes are: trim the data to one real entry with real case-study copy, make the two-column grids degrade gracefully to a single centered card when there's only one project, guard the "Next Project" self-link, and flip the homepage back on.

**Tech Stack:** Next.js 16 (App Router), React 19, MUI 9 (`sx` prop styling). No test runner configured in this repo (`package.json` has `dev`/`build`/`start`/`lint` only) — verification is `npm run lint`, `npm run build`, and manual checks against `npm run dev`.

## Global Constraints

- Do not fabricate metrics or claims in case-study copy — per spec, the "Result" section stays outcome-light (no invented stats).
- The single-project layout must not hardcode "exactly one item" — it must derive from `featuredProjects.length` so a second approved project (added later) automatically restores the two-column grid.
- Do not touch `balanced-bodyworks.png`, the card's link target, or anything Genivere-related beyond removing its data entry (spec: out of scope).

---

### Task 1: Update `featuredProjects.ts` data

**Files:**
- Modify: `app/data/featuredProjects.ts`

**Interfaces:**
- Produces: `featuredProjects: FeaturedProject[]` now contains exactly one entry (`slug: "balanced-bodyworks"`) with non-empty `overview`/`challenge`/`solution`/`result` and `year: "2026"`. Tasks 2–4 depend on `featuredProjects.length` being `1` after this task.

- [ ] **Step 1: Remove the Genivere entry and its now-unused import, fill in Balanced Bodyworks case-study copy, fix the year**

Replace the full file contents:

```typescript
import balancedBodyworks from "../images/projects/balanced-bodyworks.png";
import type { StaticImageData } from "next/image";

export interface FeaturedProject {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  whatWeDid: string;
  year: string;
  services: string[];
  image: StaticImageData;
  href: string;
  // case study content — fill in when ready
  overview: string;
  challenge: string;
  solution: string;
  result: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "balanced-bodyworks",
    name: "Balanced Bodyworks",
    tagline: "Therapeutic Bodywork",
    location: "Oceanside, CA",
    whatWeDid: "Brand identity, custom website, booking integration",
    year: "2026",
    services: ["Brand Identity", "Web Design", "Booking Integration"],
    image: balancedBodyworks,
    href: "/work/balanced-bodyworks",
    overview:
      "Sarah Feinstein, a certified massage therapist in Oceanside, CA, came to us with a site that ran on a generic template and didn't reflect the calm, intentional care she brings to prenatal, postpartum, and therapeutic bodywork. We rebuilt her online presence from the ground up — a new brand identity as Balanced Bodyworks, a custom website, and a clearer path to booking.",
    challenge:
      "The original site lived under Sarah's own name on a stock template, with no distinct visual identity, an unclear booking flow, and nothing to reassure a new client browsing for the first time. For a practice built on trust — especially with prenatal and postpartum clients — the site needed to feel as considered as the care itself.",
    solution:
      "We gave the practice its own identity, Balanced Bodyworks, and built a custom site around it: a warmer homepage, clear service and pricing breakdowns, a visible 5-star client testimonial, and a direct booking path, in a clean, modern layout that puts the client's comfort first.",
    result:
      "Balanced Bodyworks launched in 2026 as Firefly's first live client site — a clean, trustworthy home base for Sarah's practice to grow from.",
  },
];
```

Note: this deliberately drops the `genivere.png` import — leave the image file itself on disk (out of scope per spec), just stop referencing it.

- [ ] **Step 2: Verify the codebase still typechecks/lints with the Genivere reference gone**

Run: `npm run lint`
Expected: no errors (confirms nothing else imports the removed `genivere` export or `genivere.png`).

- [ ] **Step 3: Commit**

```bash
git add app/data/featuredProjects.ts
git commit -m "Feature only Balanced Bodyworks in featuredProjects data"
```

---

### Task 2: Single-project-friendly grid layout

**Files:**
- Modify: `app/components/FeaturedProjects.tsx`
- Modify: `app/work/page.tsx`

**Interfaces:**
- Consumes: `featuredProjects` from `app/data/featuredProjects.ts` (Task 1) — specifically `featuredProjects.length`.
- Produces: no new exports; purely visual layout change to the existing grid `Box` in both files.

Both files currently contain this identical grid wrapper around the `.map()`:

```tsx
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: { xs: 5, md: 4 },
  }}
>
  {featuredProjects.map((project, index) => (
```

- [ ] **Step 1: Update the grid `sx` in `app/components/FeaturedProjects.tsx`**

In `app/components/FeaturedProjects.tsx`, find:

```tsx
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 4 },
          }}
        >
          {featuredProjects.map((project, index) => (
```

Replace with:

```tsx
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: featuredProjects.length > 1 ? "1fr 1fr" : "1fr",
            },
            gap: { xs: 5, md: 4 },
            maxWidth: featuredProjects.length > 1 ? "none" : 480,
            mx: featuredProjects.length > 1 ? 0 : "auto",
          }}
        >
          {featuredProjects.map((project, index) => (
```

- [ ] **Step 2: Apply the identical change in `app/work/page.tsx`**

In `app/work/page.tsx`, find:

```tsx
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 5, md: 4 },
            }}
          >
            {featuredProjects.map((project, index) => (
```

Replace with:

```tsx
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: featuredProjects.length > 1 ? "1fr 1fr" : "1fr",
              },
              gap: { xs: 5, md: 4 },
              maxWidth: featuredProjects.length > 1 ? "none" : 480,
              mx: featuredProjects.length > 1 ? 0 : "auto",
            }}
          >
            {featuredProjects.map((project, index) => (
```

(Note the extra indentation level in `work/page.tsx` — it's nested one `Container` deeper than the homepage component. Match the file's existing indentation, don't force the homepage's.)

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/components/FeaturedProjects.tsx app/work/page.tsx
git commit -m "Center single-project grid instead of half-empty two-column layout"
```

---

### Task 3: Guard the "Next Project" self-link

**Files:**
- Modify: `app/work/[slug]/page.tsx`

**Interfaces:**
- Consumes: `featuredProjects` (Task 1), `nextProject` (already computed earlier in the same file as `featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length]`).
- Produces: no new exports; the "Next Project" `SectionDivider` + `Box` pair only renders when `featuredProjects.length > 1`.

The file currently has this structure after the case-study sections block:

```tsx
      <SectionDivider />

      {/* Next project */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 12 },
        }}
      >
        <Container sx={{ maxWidth: "1300px !important" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "grey.600",
              mb: 3,
            }}
          >
            Next Project
          </Typography>
          <Box
            component="a"
            href={nextProject.href}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              color: "inherit",
              gap: 4,
              "&:hover .next-arrow": { transform: "translateX(6px)" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "28px", md: "40px" }, mb: 0.5 }}>
                {nextProject.name}
              </Typography>
              <Typography sx={{ color: "grey.400", fontFamily: "var(--font-inter), sans-serif", fontSize: 14 }}>
                {nextProject.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{nextProject.location}
              </Typography>
            </Box>
            <Box
              className="next-arrow"
              sx={{
                fontSize: { xs: 28, md: 40 },
                color: "primary.main",
                transition: "transform 0.3s ease",
                flexShrink: 0,
              }}
            >
              →
            </Box>
          </Box>
        </Container>
      </Box>

      <SectionDivider />

      {/* CTA */}
```

- [ ] **Step 1: Wrap the divider + Next Project block in a length guard**

Replace the block starting at `<SectionDivider />` (the one immediately before `{/* Next project */}`) through the `</Box>` that closes the Next Project section (i.e. everything shown above up to but *not including* the second `<SectionDivider />` before `{/* CTA */}`) with:

```tsx
      {featuredProjects.length > 1 && (
        <>
          <SectionDivider />

          {/* Next project */}
          <Box
            component="section"
            sx={{
              py: { xs: 10, md: 12 },
            }}
          >
            <Container sx={{ maxWidth: "1300px !important" }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "grey.600",
                  mb: 3,
                }}
              >
                Next Project
              </Typography>
              <Box
                component="a"
                href={nextProject.href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  color: "inherit",
                  gap: 4,
                  "&:hover .next-arrow": { transform: "translateX(6px)" },
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ fontSize: { xs: "28px", md: "40px" }, mb: 0.5 }}>
                    {nextProject.name}
                  </Typography>
                  <Typography sx={{ color: "grey.400", fontFamily: "var(--font-inter), sans-serif", fontSize: 14 }}>
                    {nextProject.tagline}&nbsp;&nbsp;·&nbsp;&nbsp;{nextProject.location}
                  </Typography>
                </Box>
                <Box
                  className="next-arrow"
                  sx={{
                    fontSize: { xs: 28, md: 40 },
                    color: "primary.main",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  →
                </Box>
              </Box>
            </Container>
          </Box>
        </>
      )}

      <SectionDivider />

      {/* CTA */}
```

This keeps the second `SectionDivider` (between case study/next-project area and CTA) unconditional, so there's still visual separation before the CTA when Next Project is hidden.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add "app/work/[slug]/page.tsx"
git commit -m "Hide Next Project block on case study page when only one project exists"
```

---

### Task 4: Enable the homepage section and verify end-to-end

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `FeaturedProjects` component (already imported in `app/page.tsx`), now backed by Tasks 1–3.

- [ ] **Step 1: Uncomment the section**

In `app/page.tsx`, find:

```tsx
        <Services />
        {/* <FeaturedProjects /> */}{/* hidden until projects approved */}
        <SectionDivider />
```

Replace with:

```tsx
        <Services />
        <FeaturedProjects />
        <SectionDivider />
```

- [ ] **Step 2: Run lint and build**

Run: `npm run lint && npm run build`
Expected: both succeed with no errors (the build also statically generates `/work/balanced-bodyworks` via `generateStaticParams`, so this catches any bad reference left over from Task 1's data edit).

- [ ] **Step 3: Manual visual check with the dev server**

Run: `npm run dev`

Check in a browser:
- `/` — scroll to the "+ Recent Work" section: one centered Balanced Bodyworks card, not a half-empty 2-column grid.
- `/work` — same single centered card under "Projects we're proud of".
- `/work/balanced-bodyworks` — case study renders Overview / The Brief / What We Did / The Result with the copy from Task 1, and there is **no** "Next Project" block, but there is still a divider before the "Want to be next?" CTA.
- Card and case-study page still link/navigate correctly (`/work/balanced-bodyworks` from both homepage and `/work`).

Stop the dev server once confirmed.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "Enable Featured Projects section on homepage"
```
