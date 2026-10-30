import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { ogImage, sharedOpenGraph, twitterHandle } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypercerts.org"),
  title: {
    default: "Hypercerts | Open infrastructure for funding ecosystems",
    template: "%s | Hypercerts",
  },
  description:
    "An open protocol connecting valuable work with evidence, evaluations, and funding history, so funders can build on what others already know.",
  openGraph: {
    title: "Hypercerts | Open infrastructure for funding ecosystems",
    description:
      "An open protocol connecting valuable work with evidence, evaluations, and funding history, so funders can build on what others already know.",
    url: "https://hypercerts.org",
    ...sharedOpenGraph,
  },
  /* No title or description here, so X and others fall back to each
     page's own og:title and og:description. */
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    images: [ogImage.url],
  },
  /* app/favicon.ico is picked up by file name; browsers that support SVG
     favicons use these instead. Setting icons here turns off other
     file-based icons, so the Apple touch icon is listed too. */
  icons: {
    icon: [
      {
        url: "/brand/favicon/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/favicon/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: { url: "/brand/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  keywords: [
    "hypercerts",
    "impact funding",
    "public goods",
    "resource allocation",
    "impact evaluation",
    "open infrastructure",
    "AT Protocol",
  ],
  authors: [{ name: "Hypercerts Foundation" }],
};

/* Mobile browser bars and Discord's preview stripe pick this up. */
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-hc-theme="hypercerts"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-body pt-[50px]" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://hypercerts.org/#organization",
                name: "Hypercerts Foundation",
                url: "https://hypercerts.org",
                logo: {
                  "@type": "ImageObject",
                  url: "https://hypercerts.org/img/hypercerts_logo_horizontal.svg",
                },
                description:
                  "An independent nonprofit stewarding the Hypercerts protocol, maintaining open infrastructure, and helping organizations participate.",
                sameAs: [
                  "https://bsky.app/profile/hypercerts.org",
                  "https://twitter.com/hypercerts",
                  "https://github.com/hypercerts-org",
                  "https://t.me/+o4wPsJ7yEZYzNGFk",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://hypercerts.org/#website",
                name: "Hypercerts",
                url: "https://hypercerts.org",
                publisher: {
                  "@id": "https://hypercerts.org/#organization",
                },
              },
            ]),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-black focus:text-brand-white focus:px-4 focus:py-2 focus:rounded-brand focus:text-body-sm"
        >
          Skip to content
        </a>
        <Header />
        <AnnouncementBanner />
        {children}
        <Footer />
        <div id="banner-status" className="sr-only" aria-live="polite" />
      </body>
    </html>
  );
}
