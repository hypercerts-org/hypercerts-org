export default function ResourceAllocation() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="resource-allocation-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          The challenge
        </p>

        {/* Headline */}
        <h2
          id="resource-allocation-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          Upgrading How We
          <br />
          <span className="italic">Allocate Resources</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-16">
          {/* Left column — the problem */}
          <div className="border-t-2 border-brand-black pt-6">
            <h3 className="font-display text-heading-4 text-brand-black mb-3">
              Today&rsquo;s systems are fragmented and inefficient
            </h3>
            <div className="font-body text-body-lg text-ui-grey-dark leading-relaxed space-y-4">
              <p>
                How we allocate resources shapes what gets built.
                But today&rsquo;s systems consistently undervalue collective
                work—like regenerative land, open-source software, and community
                infrastructure.
              </p>
              <p>
                At the core, this is a coordination problem:
                <br />
                <span className="italic font-display text-brand-black">
                  How do we decide—together—what is worth funding?
                </span>
              </p>
            </div>
          </div>

          {/* Right column — the missing piece */}
          <div className="border-t-2 border-brand-black pt-6">
            <h3 className="font-display text-heading-4 text-brand-black mb-3">
              We need new funding mechanisms built on shared context
            </h3>
            <div className="font-body text-body-lg text-ui-grey-dark leading-relaxed space-y-4">
              <p>
                A common understanding of what was done, what worked, and what
                matters—built on evidence, feedback, and trust.
              </p>
              <p>
                This shared context enables new forms of decision-making, where
                human judgment is supported by AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
