import MediaItem from "./MediaItem";
import { featuredItems, textItems } from "@/lib/data/media";

export default function MediaSection() {
  return (
    <section className="w-full bg-surface-cream py-24 md:py-32" aria-labelledby="media-section-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Get up to date
        </p>
        <h2 id="media-section-heading" className="font-display text-display-3 md:text-display-2 text-brand-black mb-12">
          Articles, Podcasts, and Talks
        </h2>

        {/* Featured items — 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item) => (
            <MediaItem key={item.titleLink} {...item} variant="featured" />
          ))}
        </div>

        {/* Remaining text-only items — 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {textItems.map((item) => (
            <MediaItem key={item.titleLink} {...item} variant="list" />
          ))}
        </div>
      </div>
    </section>
  );
}
