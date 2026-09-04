import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypercerts.org"),
  title: {
    default: "Hypercerts — Open infrastructure for funding valuable work",
    template: "%s | Hypercerts",
  },
  description:
    "An open protocol connecting valuable work with evidence, evaluations, and funding history, so funders can build on what others already know.",
  openGraph: {
    title: "Hypercerts — Open infrastructure for funding valuable work",
    description:
      "An open protocol connecting valuable work with evidence, evaluations, and funding history, so funders can build on what others already know.",
    url: "https://hypercerts.org",
    siteName: "Hypercerts",
    images: [
      {
        url: "/img/hypercerts-opengraph-sep-2026.png",
        width: 1200,
        height: 630,
        alt: "Hypercerts — Open infrastructure for funding valuable work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypercerts — Open infrastructure for funding valuable work",
    description:
      "An open protocol connecting valuable work with evidence, evaluations, and funding history, so funders can build on what others already know.",
    images: ["/img/hypercerts-opengraph-sep-2026.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
  alternates: {
    canonical: "https://hypercerts.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
