import { footerNavColumns as navColumns } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-ui-bg py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation columns */}
        <div className="mb-12">
          <nav aria-label="Footer navigation">
            <div className="grid grid-cols-3 gap-12 max-w-lg">
              {navColumns.map((col) => (
                <div key={col.header}>
                  <p className="text-brand-black font-body font-medium text-body-sm uppercase tracking-wider mb-4">
                    {col.header}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ui-grey-dark hover:text-brand-black transition text-body-sm font-body"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-ui-separator my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ui-grey text-body-sm font-body">
            &copy; {new Date().getFullYear()} Hypercerts Foundation
          </p>
          <div className="flex items-center gap-3 text-body-sm font-body">
            <a
              href="/privacy"
              className="text-ui-grey-dark hover:text-brand-black transition"
            >
              Privacy
            </a>
            <span className="text-ui-separator">|</span>
            <a
              href="/terms"
              className="text-ui-grey-dark hover:text-brand-black transition"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
