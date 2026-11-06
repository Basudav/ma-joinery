import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "James Waters Gardening Services | Gardener in Headingley, Leeds",
    template: `%s | ${site.name}`,
  },
  description:
    "Friendly, fully insured gardening in Headingley, Leeds. Lawn care, hedge trimming, pruning, planting and garden tidy-ups. Free no-obligation quotes.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "James Waters Gardening Services | Gardener in Headingley, Leeds",
    description:
      "Friendly, fully insured gardening in Headingley, Leeds. Free no-obligation quotes.",
    locale: "en_GB",
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phoneTel,
  // No street address published — area served only.
  areaServed: ["Headingley", "Leeds"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${inter.className} h-full antialiased`}>
      <head>
        {/* Establish early connection to Cloudinary CDN so images start loading immediately */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-full bg-white font-sans text-ink pb-20 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-base focus:font-semibold focus:text-ink focus:ring-2 focus:ring-brand-500"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
