"use client";

import { useState } from "react";
import { useCaseTabs } from "@/lib/data/use-cases";

export default function UseCases() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tab = useCaseTabs[selectedTab];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSelectedTab((prev) => (prev + 1) % useCaseTabs.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSelectedTab(
        (prev) => (prev - 1 + useCaseTabs.length) % useCaseTabs.length,
      );
    }
  };

  return (
    <section
      className="w-full bg-ui-bg py-24 md:py-32"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Use cases
        </p>

        {/* Heading */}
        <h2
          id="use-cases-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          One protocol,{" "}
          <span className="italic">many domains</span>
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          Hypercerts provide a shared foundation for tracking, evaluating, and
          funding impact&mdash;across domains, while remaining fully
          interoperable.
        </p>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Use case domains"
          className="flex flex-wrap gap-2 mt-12"
          onKeyDown={handleKeyDown}
        >
          {useCaseTabs.map((t, index) => (
            <button
              key={t.label}
              id={`usecase-tab-${index}`}
              role="tab"
              aria-selected={selectedTab === index}
              aria-controls="usecase-tabpanel"
              onClick={() => setSelectedTab(index)}
              className={`px-6 py-3 rounded-full font-body text-body-sm font-medium transition ${
                selectedTab === index
                  ? "bg-brand-black text-brand-white"
                  : "bg-brand-white text-brand-black border border-ui-separator hover:border-brand-black"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          id="usecase-tabpanel"
          role="tabpanel"
          aria-labelledby={`usecase-tab-${selectedTab}`}
          className="mt-12"
        >
          <div key={selectedTab} className="animate-fade-in">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16">
              {/* Left: domain explanation */}
              <div>
                <h3 className="font-display text-heading-4 text-brand-black mb-4">
                  {tab.title}
                </h3>
                <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mb-6">
                  {tab.body}
                </p>
                <ul className="space-y-3">
                  {tab.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-body text-body-lg text-ui-grey-dark leading-relaxed flex items-start gap-3"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-black mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: example organizations */}
              <div className="md:w-64">
                <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
                  Already in use
                </p>
                <div className="space-y-3">
                  {tab.examples.map((example) => (
                    <div
                      key={example.name}
                      className="bg-brand-white border border-ui-separator rounded-brand px-4 py-3"
                    >
                      <p className="font-body text-body-lg font-medium text-brand-black leading-tight">
                        {example.name}
                      </p>
                      <p className="font-body text-body-sm text-ui-grey-dark mt-0.5">
                        {example.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 border-t border-ui-separator pt-8">
          <p className="font-body text-body-lg text-ui-grey italic leading-relaxed">
            The same underlying system&mdash;record, evaluate, fund&mdash;can be
            adapted across many different domains.
          </p>
        </div>
      </div>
    </section>
  );
}
