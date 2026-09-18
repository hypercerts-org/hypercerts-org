"use client";

import Image from "next/image";
import { partners } from "@/lib/data/partners";

export default function PartnerLogos() {
  return (
    <div className="border-y border-ui-separator bg-white">
      <nav
        aria-label="Hypercerts partners"
        className="partner-marquee"
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget) &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            event.currentTarget.scrollLeft = 0;
        }}
      >
        <div className="partner-track">
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className="partner-group"
              aria-hidden={duplicate || undefined}
              inert={duplicate || undefined}
            >
              {partners.map((partner) => (
                <a
                  key={partner.href}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  className="flex h-[50px] w-[150px] shrink-0 items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 focus-visible:-outline-offset-4"
                >
                  <Image
                    src={partner.img}
                    alt={partner.alt}
                    sizes="120px"
                    width={120}
                    height={40}
                    className={`max-h-10 max-w-[120px] object-contain grayscale${partner.invert ? " invert" : ""}`}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
