import type { MetadataRoute } from "next";
import { featuredProjects } from "./data/featuredProjects";

const SITE_URL = "https://fireflycreativeco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/websites",
    "/services/logo-branding",
    "/services/business-essentials",
    "/work",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = featuredProjects.map((project) => ({
    url: `${SITE_URL}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
