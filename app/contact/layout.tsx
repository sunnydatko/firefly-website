import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Firefly Creative Co",
  description:
    "Ready to grow your business online? Get in touch with Firefly Creative Co for a free intro call about your website or branding project.",
  openGraph: {
    title: "Contact | Firefly Creative Co",
    description:
      "Ready to grow your business online? Get in touch with Firefly Creative Co for a free intro call about your website or branding project.",
    url: "https://fireflycreativeco.com/contact",
    images: [{ url: "/firefly-og.jpg", width: 1200, height: 630, alt: "Contact Firefly Creative Co" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Firefly Creative Co",
    description:
      "Ready to grow your business online? Get in touch with Firefly Creative Co for a free intro call about your website or branding project.",
    images: ["/firefly-og.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
