"use client";

import Image from "next/image";
import { useState } from "react";
import { partners } from "@/lib/data/partners";

export default function PartnerLogos() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="border-y border-ui-separator bg-white">
      <nav
        aria-label="Hypercerts partners"
        className="partner-marquee"
        data-paused={paused}
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
                  className="flex h-20 w-[180px] shrink-0 items-center justify-center transition-opacity hover:opacity-70 focus-visible:-outline-offset-4"
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
      <div className="landing-container flex justify-end pb-3 motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          className="flex min-h-8 items-center gap-2 px-2 text-body-sm text-ui-grey-muted hover:text-brand-black"
        >
          <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          {paused ? "Resume logos" : "Pause logos"}
        </button>
      </div>
    </div>
  );
}
