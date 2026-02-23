import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
