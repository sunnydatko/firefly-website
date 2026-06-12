import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import PageLoader from "./components/PageLoader";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://fireflycreativeco.com";
const OG_TITLE = "Firefly Creative Co | Web Design & Branding for Small Businesses";
const OG_DESC =
  "Custom web design, branding, and SEO for small businesses. We build fast, beautiful websites and brand identities that help you compete online and grow.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: OG_TITLE,
  description: OG_DESC,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Firefly Creative Co",
    title: OG_TITLE,
    description: OG_DESC,
    images: [{ url: "/firefly-og.jpg", width: 1200, height: 630, alt: "Firefly Creative Co" }],
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
        <PageLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
