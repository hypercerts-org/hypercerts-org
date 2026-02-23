import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hypercerts",
  description: "Hypercerts - Fund and Reward Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
