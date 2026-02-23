"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "News", href: "/docs/announcements" },
  { label: "Docs", href: "/docs/what-are-hypercerts" },
  { label: "Contact", href: "/contact" },
  { label: "Blog ↗", href: "https://hypercerts.leaflet.pub/", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-[50px] flex items-center px-6 border-b border-ui-separator">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-current={pathname === "/" ? "page" : undefined}>
          <Image
            src="/img/hypercerts_logo_horizontal.svg"
            alt="Hypercerts"
            width={140}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-black hover:opacity-70 transition-opacity"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://app.hypercerts.org/explore?filter=evaluated"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-sm rounded-full px-4 py-1.5 hover:opacity-80 transition-opacity"
          >
            Go to app
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-1.5 top-[10px] block w-5 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`absolute left-1.5 top-[16px] block w-5 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-1.5 top-[22px] block w-5 h-0.5 bg-black transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[50px] left-0 right-0 bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-black hover:opacity-70 transition-opacity"
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://app.hypercerts.org/explore?filter=evaluated"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-sm rounded-full px-4 py-1.5 hover:opacity-80 transition-opacity text-center"
            onClick={() => setMenuOpen(false)}
          >
            Go to app
          </a>
        </div>
      )}
    </header>
  );
}
