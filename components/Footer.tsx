import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    header: "Product",
    links: [
      { label: "Go to app", href: "https://app.hypercerts.org" },
      { label: "Explore", href: "https://app.hypercerts.org/explore" },
    ],
  },
  {
    header: "Resources",
    links: [
      { label: "Docs", href: "/docs/what-are-hypercerts" },
      { label: "Blog", href: "https://hypercerts.leaflet.pub/" },
      { label: "News", href: "/docs/announcements" },
    ],
  },
  {
    header: "Community",
    links: [
      { label: "Twitter", href: "https://twitter.com/hypercerts" },
      { label: "Telegram", href: "https://t.me/+YF9AYb6zCv1mNDJi" },
      { label: "GitHub", href: "https://github.com/hypercerts-org" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-ui-bg py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Image
              src="/img/hypercerts_logo_b_transparent.png"
              alt="Hypercerts"
              width={140}
              height={40}
              className="object-contain"
            />
            <p className="font-body text-body-sm text-ui-grey">
              Fund and Reward Impact
            </p>
          </div>

          {/* Right: Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {navColumns.map((col) => (
              <div key={col.header}>
                <p className="text-brand-black font-body font-medium text-body-sm uppercase tracking-wider mb-4">
                  {col.header}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ui-grey-dark hover:text-brand-black transition text-body-sm font-body"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-ui-grey-dark hover:text-brand-black transition text-body-sm font-body"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ui-separator my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ui-grey text-body-sm font-body">
            &copy; 2026 Hypercerts Foundation
          </p>
          <div className="flex items-center gap-3 text-body-sm font-body">
            <Link
              href="/privacy"
              className="text-ui-grey-dark hover:text-brand-black transition"
            >
              Privacy
            </Link>
            <span className="text-ui-separator">|</span>
            <Link
              href="/terms"
              className="text-ui-grey-dark hover:text-brand-black transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
