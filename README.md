<div align="center">
  <img src="app/images/firefly-logo-cropped.png" alt="Firefly" width="64" height="64" />

  # Firefly Creative Studio

  **Website for Firefly Creative Studio — a design agency offering websites, branding, and business essentials for small businesses.**

  Built with Next.js 16 · React 19 · Material UI 9 · TypeScript

  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
  [![MUI](https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui)](https://mui.com)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## Pages

- **Home** — hero, value props, about, services overview, blog posts, testimonial, and contact
- **About** — studio story and approach
- **Services** — overview of all service offerings
  - `/services/websites` — custom website design and development
  - `/services/logo-branding` — logo design and brand identity
  - `/services/business-essentials` — business cards, social graphics, SEO setup
- **Work** — portfolio of client projects
- **Blog** — articles at `/blog/[slug]`
- **Contact** — inbound inquiry form

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | Material UI 9 + Emotion |
| Language | TypeScript 5 |
| Fonts | Cormorant Garamond + Inter via `next/font` |
| Runtime | React 19 |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content

All site content lives in a single file:

**`app/helpers/config.ts`**

```ts
export const social = [...]        // Social links
export const experience = [...]    // Work history
export const blogPosts = [...]     // Blog post metadata
export const testimonials = [...]  // Client testimonials
export const education = [...]     // Education
```

The theme — colors, typography, spacing — is in **`app/theme.ts`**.

---

## Project structure

```
app/
├── about/               # About page
├── blog/[slug]/         # Dynamic blog post pages
├── contact/             # Contact page
├── services/            # Services overview + sub-pages
│   ├── websites/
│   ├── logo-branding/
│   └── business-essentials/
├── work/                # Portfolio / case studies
├── components/          # Shared UI components
│   ├── Ambient.tsx      # Animated background
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ValueProps.tsx
│   ├── Writing.tsx      # Blog card grid
│   ├── Testimonial.tsx
│   ├── BrandMark.tsx
│   ├── Footer.tsx
│   └── ResponsiveMenu.tsx
├── helpers/config.ts    # Site content (single source of truth)
├── images/              # Static image assets
├── theme.ts             # MUI theme
├── globals.css          # Global styles
├── layout.tsx           # Root layout with metadata
└── page.tsx             # Home page
```

---

## Deployment

```bash
npx vercel
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
