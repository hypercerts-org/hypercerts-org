import Image from "next/image";
import { featuredTools, tools } from "@/lib/data/tools";

export default function ToolsAndApps() {
  return (
    <section
      id="tools-and-apps"
      className="w-full bg-ui-bg py-24 md:py-32"
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

        {/* Featured tools with screenshots */}
        <div className="grid md:grid-cols-2 gap-4 mt-16">
          {featuredTools.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-ui-separator rounded-brand overflow-hidden hover:border-brand-black transition-colors flex flex-col bg-brand-white"
            >
              {card.image && (
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    sizes="(max-width: 768px) 100vw, 500px"
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-heading-4 text-brand-black mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                  {card.description}
                </p>
                <p className="font-body text-body-sm text-brand-black font-medium mt-4 group-hover:underline">
                  {card.cta} &rarr;
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Developer tools — compact grid with hover screenshots */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {tools.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-ui-separator rounded-brand p-6 hover:border-brand-black transition-colors flex flex-col bg-brand-white overflow-hidden"
            >
              {/* Screenshot on hover */}
              {card.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className={`object-cover ${card.imagePosition || "object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-heading-4 text-brand-white mb-1">
                      {card.title}
                    </h3>
                    <p className="font-body text-body-sm text-brand-white/80 font-medium">
                      {card.cta} &rarr;
                    </p>
                  </div>
                </div>
              )}

              {/* Default content */}
              <h3 className="font-display text-heading-4 text-brand-black mb-2">
                {card.title}
              </h3>
              <p className="font-body text-body-sm text-ui-grey-dark leading-relaxed flex-1">
                {card.description}
              </p>
              <p className="font-body text-body-sm text-brand-black font-medium mt-4 group-hover:underline">
                {card.cta} &rarr;
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://docs.hypercerts.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-lg text-brand-black font-medium hover:underline"
          >
            Read the documentation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
