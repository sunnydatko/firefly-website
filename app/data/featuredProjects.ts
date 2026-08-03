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
