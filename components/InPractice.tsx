const steps = [
  {
    label: "Record",
    text: "A regenerative land project publishes a hypercert describing its work\u2014what was done or is planned, by whom, and what outcomes are expected.",
  },
  {
    label: "Evaluate",
    text: "Field measurements, community input, and expert reviews are attached over time, building a shared evidence base around the project.",
  },
  {
    label: "Fund",
    text: "Funders use this shared context to support the work\u2014whether backing a proposal upfront or rewarding demonstrated outcomes retroactively. The resulting impact is attributed to both contributors and funders.",
  },
];

export default function InPractice() {
  return (
    <section
      id="in-practice"
      className="w-full bg-surface-cream py-24 md:py-32"
      aria-labelledby="in-practice-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Hypercerts in practice
        </p>

        <h2
          id="in-practice-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          How It Works{" "}
          <span className="italic">in Practice</span>
        </h2>

        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          A hypercert can document work that has been completed, is underway, or
          is being proposed&mdash;making it useful for both evaluation and
          forward-looking funding.
        </p>

        {/* Two-column: intro context left, steps right */}
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 mt-16">
          {/* Left: example context */}
          <div className="border-t-2 border-brand-black pt-6">
            <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
              Example
            </p>
            <h3 className="font-display text-heading-4 text-brand-black mb-3">
              Regenerative land project
            </h3>
            <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
              A restoration initiative uses a hypercert to make its work
              visible, attract funding, and build a shared record of impact
              over time.
            </p>
          </div>

          {/* Right: step-by-step */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border-2 border-brand-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-body text-[12px] font-medium text-brand-black">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="font-body text-body-lg text-brand-black font-medium leading-tight mb-1">
                    {step.label}
                  </p>
                  <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
