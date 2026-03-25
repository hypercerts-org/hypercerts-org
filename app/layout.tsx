import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypercerts.org"),
  title: {
    default: "Hypercerts — Collective Intelligence for Funding Impact",
    template: "%s | Hypercerts",
  },
  description:
    "Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation.",
  openGraph: {
    title: "Hypercerts — Collective Intelligence for Funding Impact",
    description:
      "Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation.",
    url: "https://hypercerts.org",
    siteName: "Hypercerts",
    images: [
      {
        url: "/img/hypercerts_opengraph-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Hypercerts — Collective Intelligence for Funding Impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypercerts — Collective Intelligence for Funding Impact",
    description:
      "Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation.",
    images: ["/img/hypercerts_opengraph-v2.jpg"],
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
                name: "Hypercerts Foundation",
                url: "https://hypercerts.org",
                logo: "https://hypercerts.org/img/hypercerts_logo_horizontal.svg",
                description:
                  "Hypercerts create shared context—evidence, expert input, and community trust—for better resource allocation.",
                sameAs: [
                  "https://bsky.app/profile/hypercerts.org",
                  "https://twitter.com/hypercerts",
                  "https://github.com/hypercerts-org",
                  "https://t.me/+YF9AYb6zCv1mNDJi",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Hypercerts",
                url: "https://hypercerts.org",
                publisher: {
                  "@type": "Organization",
                  name: "Hypercerts Foundation",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
