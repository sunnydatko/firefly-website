import balancedBodyworks from "../images/projects/balanced-bodyworks.webp";
import blckMssv from "../images/projects/blck-mssv.webp";
import genivere from "../images/projects/genivere.webp";
import sunnyDatko from "../images/projects/sunny-datko.webp";
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
    slug: "blck-mssv",
    name: "BLCK.MSSV",
    tagline: "Electronic DJ Duo",
    location: "Southern California",
    whatWeDid: "Website redesign, custom development",
    year: "2026",
    services: ["Web Design", "Web Development"],
    image: blckMssv,
    href: "/work/blck-mssv",
    overview:
      "BLCK.MSSV is a Southern California electronic duo, J. Cush and Brian M, blending indie dance, melodic techno, and progressive house into their own sound. Their old site crammed everything onto one long, centered page under massive display type — bold to look at, but it buried the mixes, shows, and contact info visitors actually came for. We rebuilt it as a clean, easy-to-scan site that still hits just as hard.",
    challenge:
      "Giant centered headlines like 'NEW MUSIC COMING SOON' and 'UPCOMING SHOWS' gave the old site a dramatic look, but the actual content — live Mixcloud sets, show dates, booking contact — sat as an afterthought beneath them, easy to miss on the scroll. For an act that plays alongside names like Paul Oakenfold, the site needed to work as hard as their sets do.",
    solution:
      "We rebuilt the site around real navigation — Live Mixes, About, Contact — so their sets and show info surface immediately instead of hiding under oversized type, while keeping the moody, dark visual identity that fits their sound.",
    result:
      "The new BLCK.MSSV site is built and ready — it'll go live at blckmssv.com in the coming days, replacing their old site with a home base that's as easy to navigate as it is to look at.",
  },
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
  {
    slug: "genivere",
    name: "Genivere",
    tagline: "Software Engineer Portfolio",
    location: "San Diego, CA",
    whatWeDid: "Visual design, development, responsive implementation",
    year: "2025",
    services: ["Visual Design", "Web Development", "Responsive Design"],
    image: genivere,
    href: "/work/genivere",
    overview:
      "Genivere, a junior software engineer based in San Diego, came to us mid-transition — a decade in benefits configuration and solutions architecture, now finishing a Computer Science degree and stepping into software engineering. They needed a personal portfolio that could carry both halves of that story.",
    challenge:
      "Most engineering portfolios reach for the same template: dark background, monospace type, a grid of repo links. That reads as competent but forgettable, and it undersold a candidate with a decade of real-world problem-solving behind the resume.",
    solution:
      "We built a custom site around a warm, lantern-lit fantasy-forest hero and the line \"Building software with equal parts logic and magic\" — then backed it with clear sections for experience, education, and a client recommendation, so the personality up top holds up under a recruiter's scrutiny.",
    result:
      "Genivere's portfolio is live, distinct from the sea of identical dark-mode engineer sites, and built to open conversations rather than get skimmed past.",
  },
  {
    slug: "sunny-datko",
    name: "Sunny Datko",
    tagline: "Frontend Engineer Portfolio",
    location: "San Diego, CA",
    whatWeDid: "Personal brand identity, portfolio site, custom development",
    year: "2026",
    services: ["Brand Identity", "Web Design", "Web Development"],
    image: sunnyDatko,
    href: "/work/sunny-datko",
    overview:
      "Sunny Datko, Firefly's founder and a Staff Frontend Engineer, wanted a personal site distinct from Firefly's own brand — somewhere to showcase individual frontend architecture and design-systems work without it reading as a rehash of the agency site.",
    challenge:
      "A personal engineering portfolio that shares a founder with a design studio risks feeling like a duplicate of the agency's own site, or like an afterthought bolted onto a resume.",
    solution:
      "We gave it its own identity — an editorial, dusk-and-sunset palette in place of Firefly's own colors, anchored by the line \"Building beautiful systems for humans.\" Full About, Experience, and Work sections give it the structure of a real portfolio rather than a one-page landing page.",
    result:
      "sunnydatko.com is live as its own thing: a portfolio that stands apart from Firefly's client work while still being unmistakably from the same hand.",
  },
];
