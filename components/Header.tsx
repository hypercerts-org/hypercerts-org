"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "News", href: "/docs/announcements" },
  { label: "Docs", href: "/docs/what-are-hypercerts" },
  { label: "Contact", href: "/contact" },
  { label: "Blog ↗", href: "https://hypercerts.leaflet.pub/", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-[50px] flex items-center px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/img/hypercerts_logo_horizontal.svg"
            alt="Hypercerts"
            className="h-7"
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
            className="bg-black text-white text-sm rounded-lg px-4 py-1.5 hover:opacity-80 transition-opacity"
          >
            Go to app
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
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
            className="bg-black text-white text-sm rounded-lg px-4 py-1.5 hover:opacity-80 transition-opacity text-center"
            onClick={() => setMenuOpen(false)}
          >
            Go to app
          </a>
        </div>
      )}
    </header>
  );
}
