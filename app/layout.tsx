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

export const metadata: Metadata = {
  title: "Firefly Creative Co | Web Design & Branding for Small Businesses",
  description:
    "Custom web design, branding, and SEO for small businesses. We build fast, beautiful websites and brand identities that help you compete online and grow.",
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
