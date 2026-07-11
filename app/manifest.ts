import type { MetadataRoute } from "next";
import { SITE_NAME } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Web Design & Branding for Small Businesses`,
    short_name: SITE_NAME,
    description:
      "Custom web design, branding, and SEO for small businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0B14",
    theme_color: "#0D0B14",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
