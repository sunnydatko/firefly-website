import type { Metadata } from "next";

export const SITE_URL = "https://fireflycreativeco.com";
export const SITE_NAME = "Firefly Creative Co";
const DEFAULT_OG_IMAGE = "/firefly-og-2.jpg";

// Next.js shallow-merges `openGraph`/`twitter` per segment, so a page that sets
// its own `openGraph` drops `siteName`/`type`/`locale` from the root layout
// unless it re-declares them here too.
export function pageMetadata({
  title,
  description,
  path,
  imageAlt,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
