"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Docs", href: "/docs/what-are-hypercerts" },
  { label: "Contact", href: "/contact" },
  { label: "Blog ↗", href: "https://hypercerts.leaflet.pub/", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-[50px] flex items-center px-6 border-b border-ui-separator">
      <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
        {/* Logo — pinned left */}
        <Link href="/" className="absolute left-0 flex items-center shrink-0" aria-current={pathname === "/" ? "page" : undefined}>
          <Image
            src="/img/hypercerts_logo_horizontal.svg"
            alt="Hypercerts"
            width={140}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav — centred */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
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

        {/* Mobile Hamburger — pinned right */}
        <button
          className="md:hidden absolute right-0 w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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
        <nav className="md:hidden absolute top-[50px] left-0 right-0 bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
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
        </nav>
      )}
    </header>
  );
}
