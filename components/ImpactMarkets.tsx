"use client";

import { useState } from "react";
import Image from "next/image";
import { tabs } from "@/lib/data/impact-markets";

export default function ImpactMarkets() {
  const [selectedTab, setSelectedTab] = useState(0);

  const { content } = tabs[selectedTab];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSelectedTab((prev) => (prev + 1) % tabs.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSelectedTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <section className="w-full bg-white py-24 md:py-32" aria-labelledby="impact-markets-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Built to power
        </p>
        <h2 id="impact-markets-heading" className="font-display text-[36px] sm:text-[52px] md:text-[72px] lg:text-[100px] leading-none text-brand-black mb-12">
          Impact Markets
        </h2>

        {/* Tab buttons */}
        <div
          role="tablist"
          aria-label="Impact market audience"
          className="flex flex-wrap gap-2 mb-12"
          onKeyDown={handleKeyDown}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              id={`impact-tab-${index}`}
              role="tab"
              aria-selected={selectedTab === index}
              aria-controls="impact-tabpanel"
              onClick={() => setSelectedTab(index)}
              className={`px-6 py-3 rounded-full font-body text-body-sm font-medium transition ${
                selectedTab === index
                  ? "bg-brand-black text-brand-white"
                  : "bg-brand-white text-brand-black border border-ui-separator hover:border-brand-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div
          id="impact-tabpanel"
          role="tabpanel"
          aria-labelledby={`impact-tab-${selectedTab}`}
          className="bg-brand-white rounded-[20px] p-8 md:p-12 shadow-sm"
        >
          <div key={selectedTab} className="animate-fade-in">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Left: text */}
            <div>
              <h3 className="font-display text-display-3 text-brand-black mb-4">
                {content.title}
              </h3>
              <p className="font-body text-body-lg text-ui-grey-dark mb-8">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={content.primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-brand-black text-brand-white rounded-brand font-body text-body-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {content.primaryLabel}
                </a>
                {content.secondaryLabel && content.secondaryHref && (
                  <a
                    href={content.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-ui-grey-tag text-brand-black rounded-brand font-body text-body-sm font-medium hover:bg-ui-grey-light transition-colors"
                  >
                    {content.secondaryLabel}
                  </a>
                )}
              </div>
            </div>

            {/* Right: image */}
            <div className="rounded-brand overflow-hidden order-first md:order-last">
              <Image
                src={content.image}
                alt={content.imageAlt}
                sizes="(max-width: 768px) 100vw, 600px"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
