import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Ready to grow your business online? Get in touch with Firefly Creative Co for a free intro call about your website or branding project.",
  path: "/contact",
  imageAlt: "Contact Firefly Creative Co",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
