import balancedBodyworks from "../images/projects/balanced-bodyworks.png";
import genivere from "../images/projects/genivere.png";
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
    year: "2025",
    services: ["Brand Identity", "Web Design", "Booking Integration"],
    image: balancedBodyworks,
    href: "/work/balanced-bodyworks",
    overview: "",
    challenge: "",
    solution: "",
    result: "",
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
    overview: "",
    challenge: "",
    solution: "",
    result: "",
  },
];
