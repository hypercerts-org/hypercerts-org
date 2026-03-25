import Image from "next/image";
import { ecosystemPartners } from "@/lib/data/ecosystem";

export default function Ecosystem() {
  return (
    <section
      className="w-full bg-white py-24 md:py-32"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          The Hypercerts Collective
        </p>

        {/* Heading */}
        <h2
          id="ecosystem-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          Built by a network,{" "}
          <span className="italic text-brand-accent">for a network</span>
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          Hypercerts is not a product shipped by one organization—it is a protocol shaped by a growing ecosystem of
          builders, funders, evaluators, and researchers across multiple domains.
        </p>
      </div>

      {/* Carousel — full-width scroll area */}
      <div className="mt-16 overflow-x-auto scrollbar-hide">
        <div
          className="flex gap-5 px-6 snap-x snap-mandatory"
          style={{ paddingLeft: "max(1.5rem, calc((100% - 64rem) / 2 + 1.5rem))" }}
        >
          {ecosystemPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[300px] snap-start border border-ui-separator rounded-brand p-6 hover:border-brand-black transition-colors flex flex-col"
            >
              {/* Logo */}
              {partner.logo && (
                <div className="h-6 mb-5 flex items-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt=""
                    width={120}
                    height={24}
                    className={`object-contain object-left h-6 w-auto grayscale group-hover:grayscale-0 transition-all${partner.logoInvert ? " invert" : ""}`}
                  />
                </div>
              )}

              {/* Tag */}
              <span className="font-body text-body-sm text-ui-grey-dark mb-2 block">
                {partner.tag}
              </span>

              {/* Name */}
              <h3 className="font-display text-heading-4 text-brand-black mb-2">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="font-body text-body-sm text-ui-grey-dark leading-relaxed flex-1">
                {partner.description}
              </p>
            </a>
          ))}

          {/* Spacer for right padding */}
          <div className="flex-shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>

    </section>
  );
}
