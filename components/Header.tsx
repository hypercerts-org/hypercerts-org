"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { headerNavLinks as navLinks } from "@/lib/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex h-[50px] items-center border-b border-ui-separator bg-white px-6"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setMenuOpen(false);
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/img/hypercerts_logo_horizontal.svg"
            alt="Hypercerts"
            width={140}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 text-body-sm text-brand-black transition-colors hover:text-brand-accent"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          ref={menuButton}
          type="button"
          className="relative h-11 w-11 shrink-0 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            aria-hidden="true"
            className={`absolute left-3 top-[15px] h-px w-5 bg-brand-black transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`absolute left-3 top-[21px] h-px w-5 bg-brand-black ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`absolute left-3 top-[27px] h-px w-5 bg-brand-black transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        hidden={!menuOpen}
        className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-[50px] max-h-[calc(100dvh-50px)] flex-col overflow-y-auto border-b border-ui-separator bg-white px-6 py-4 lg:hidden`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="py-3 text-body-lg text-brand-black transition-colors hover:text-brand-accent"
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
