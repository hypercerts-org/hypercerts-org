const capabilities = [
  {
    title: "Portable records",
    description:
      "Contributions, evaluations, and funding data belong to their creators\u2014not to any single application. Records move with you.",
  },
  {
    title: "Persistent identity",
    description:
      "Reputation and attribution accumulate over time across applications, building trust that persists beyond any single interface.",
  },
  {
    title: "Interoperable by default",
    description:
      "Different tools, funders, and communities can read and build on the same shared data\u2014without permission gates.",
  },
];

export default function OpenByDesign() {
  return (
    <section
      className="relative bg-surface-cream py-24 md:py-32 overflow-hidden"
      aria-labelledby="open-by-design-heading"
    >
      {/* Guilloche — bottom left corner */}
      <img
        src="/img/guilloche/guilloche_01.svg"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-[350px] -left-[350px] w-[600px] h-[600px] md:w-[700px] md:h-[700px] pointer-events-none opacity-[0.25]"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Open by design
        </p>

        {/* Heading */}
        <h2
          id="open-by-design-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          Protocols,{" "}
          <span className="italic">not platforms</span>
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          Hypercerts are built on the AT Protocol as open, shared
          infrastructure&mdash;so that value, context, and trust are never
          locked into a single platform.
        </p>

        {/* Capability columns */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="border-t-2 border-brand-black pt-6"
            >
              <h3 className="font-display text-heading-4 text-brand-black mb-3">
                {cap.title}
              </h3>
              <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
