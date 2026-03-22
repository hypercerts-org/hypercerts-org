import { toolGroups } from "@/lib/data/tools";

export default function ToolsAndApps() {
  return (
    <section
      className="w-full bg-white py-24 md:py-32"
      aria-labelledby="tools-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Tools &amp; Apps
        </p>

        {/* Heading */}
        <h2
          id="tools-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          Build with <span className="italic">hypercerts</span>
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          A complete toolkit for creating, exploring, and integrating
          hypercerts&mdash;whether you&rsquo;re building applications, funding
          systems, or new coordination mechanisms.
        </p>

        {/* Tool groups */}
        <div className="mt-16 space-y-14">
          {toolGroups.map((group) => (
            <div key={group.heading}>
              {/* Group heading */}
              <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-5">
                {group.heading}
              </p>

              {/* Cards grid */}
              <div
                className={`grid gap-4 ${
                  group.cards.length === 1
                    ? "md:grid-cols-1 max-w-xl"
                    : group.cards.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-3"
                }`}
              >
                {group.cards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-ui-separator rounded-brand p-6 hover:border-brand-black transition-colors flex flex-col"
                  >
                    <h3 className="font-display text-heading-4 text-brand-black mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <p className="font-body text-body-sm text-brand-black font-medium mt-4 group-hover:underline">
                      {card.cta} &rarr;
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 border-t border-ui-separator pt-8">
          <p className="font-body text-body-lg text-ui-grey italic leading-relaxed">
            From creating records to exploring data and building
            applications&mdash;the full stack for working with hypercerts.
          </p>
        </div>
      </div>
    </section>
  );
}
