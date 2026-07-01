import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import PageLoader from "./components/PageLoader";
import { SITE_NAME, SITE_URL } from "./lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const OG_TITLE = "Firefly Creative Co | Web Design & Branding for Small Businesses";
const OG_DESC =
  "Custom web design, branding, and SEO for small businesses. We build fast, beautiful websites and brand identities that help you compete online and grow.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/firefly-icon-gold.png`,
  description: OG_DESC,
  email: "hello@fireflycreativeco.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: OG_DESC,
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: OG_TITLE,
    description: OG_DESC,
    images: [{ url: "/firefly-og.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
    images: ["/firefly-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <PageLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
