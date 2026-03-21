import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypercerts.org"),
  title: "Hypercerts - Fund and Reward Impact",
  description:
    "Fund and Reward Impact with Hypercerts. The web3 standard for impact certificates.",
  openGraph: {
    title: "Hypercerts - Fund and Reward Impact",
    description:
      "Fund and Reward Impact with Hypercerts. The web3 standard for impact certificates.",
    url: "https://hypercerts.org",
    siteName: "Hypercerts",
    images: [
      {
        url: "/img/hypercerts_opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Hypercerts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypercerts - Fund and Reward Impact",
    description: "Fund and Reward Impact with Hypercerts.",
    images: ["/img/hypercerts_opengraph.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["hypercerts", "impact certificates", "impact funding", "public goods", "web3"],
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hypercerts Foundation",
              url: "https://hypercerts.org",
              logo: "https://hypercerts.org/img/hypercerts_logo_horizontal.svg",
              sameAs: [
                "https://twitter.com/hypercerts",
                "https://github.com/hypercerts-org",
              ],
            }),
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
