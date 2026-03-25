"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredItems, recentTextItems, olderTextItems } from "@/lib/data/media";
import type { MediaItem } from "@/lib/data/media";

function TextItem({ item }: { item: MediaItem }) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="bg-ui-grey-tag text-brand-black text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md font-body font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-heading-4 leading-[1.2] tracking-[-0.02em] mb-1">
        <a
          href={item.titleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-black no-underline hover:text-brand-accent transition"
        >
          {item.title}
        </a>
      </h3>
      <p className="font-body text-body-sm text-ui-grey-dark">
        {item.authors.map((author, index) => (
          <span key={author.name}>
            {index > 0 && ", "}
            <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-brand-black transition"
            >
              {author.name}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}

export default function MediaSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full bg-surface-cream py-24 md:py-32" aria-labelledby="media-section-heading">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Get up to date
        </p>
        <h2 id="media-section-heading" className="font-display text-display-3 md:text-display-2 text-brand-black mb-16">
          Articles, Podcasts, and Talks
        </h2>

        {/* Two-column: featured left, list right */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
          {/* Left: featured items with images */}
          <div className="space-y-8">
            {featuredItems.map((item) => (
              <div key={item.titleLink} className="group">
                {item.image && (
                  <a
                    href={item.titleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-video rounded-brand overflow-hidden mb-4"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      sizes="(max-width: 768px) 100vw, 480px"
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </a>
                )}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-ui-grey-tag text-brand-black text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md font-body font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-heading-4 leading-[1.2] tracking-[-0.02em] mb-1">
                  <a
                    href={item.titleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-black no-underline hover:text-brand-accent transition"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="font-body text-body-sm text-ui-grey-dark">
                  {item.authors.map((author, index) => (
                    <span key={author.name}>
                      {index > 0 && ", "}
                      <a
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-brand-black transition"
                      >
                        {author.name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Right: text-only list */}
          <div>
            <div className="divide-y divide-ui-separator">
              {recentTextItems.map((item) => (
                <TextItem key={item.titleLink} item={item} />
              ))}
              {showAll &&
                olderTextItems.map((item) => (
                  <TextItem key={item.titleLink} item={item} />
                ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="font-body text-body-sm font-medium text-brand-black border border-ui-separator px-6 py-3 rounded-brand hover:border-brand-black transition"
              >
                {showAll ? "Show less" : "Load more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
