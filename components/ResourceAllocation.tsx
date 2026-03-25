export default function ResourceAllocation() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="resource-allocation-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          The challenge
        </p>

        {/* Headline — reduced dominance: smaller than Architecture */}
        <h2
          id="resource-allocation-heading"
          className="font-display text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-brand-black max-w-2xl mb-8"
        >
          Upgrading How We{" "}
          <span className="italic">Allocate Resources</span>
        </h2>

        {/* Two-column layout — left dominant, right secondary */}
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-16">
          {/* Left column — the problem (dominant, denser) */}
          <div>
            <div className="font-body text-body-lg text-ui-grey-dark leading-relaxed space-y-4">
              {/* Lead sentence — visually distinct */}
              <p className="text-brand-black font-medium">
                Today&rsquo;s impact funding systems are fragmented, opaque, and
                inefficient.
              </p>
              <p>
                Decisions are made across disconnected platforms, committees, and
                juries—with little shared context about what was done, what
                worked, and what matters.
              </p>
              <p>
                Collective work—like regenerative land, open-source software, and
                community infrastructure—remains consistently undervalued and
                underfunded.
              </p>
            </div>
          </div>

          {/* Right column — the missing piece (secondary, airier) */}
          <div className="border-l-0 md:border-l md:border-ui-grey-light md:pl-10 md:my-1">
            <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
              What&rsquo;s missing
            </p>
            <div className="font-body text-body-lg text-ui-grey-dark leading-relaxed space-y-4 max-w-sm">
              <p>
                A way to bring together evidence, feedback, and
                trust—creating shared context without enforcing a single
                worldview or set of values.
              </p>
              <p>
                This enables new forms of decision-making—where different actors
                coordinate while applying their own judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
