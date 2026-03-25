const steps = [
  {
    number: 1,
    text: "A regenerative land project publishes a hypercert describing its restoration work\u2014what was done, by whom, and what outcomes are expected.",
  },
  {
    number: 2,
    text: "Over time, satellite data, field measurements, and expert reviews are added as evidence, building a shared understanding of the project\u2019s impact.",
  },
  {
    number: 3,
    text: "Funders use this shared context to support the project, allocating resources based on the available evidence and evaluations.",
  },
  {
    number: 4,
    text: "The resulting impact is attributed to both contributors and funders\u2014creating a credible record of what was achieved and who made it possible.",
  },
];

export default function Example() {
  return (
    <section
      className="bg-surface-cream py-16 md:py-24"
      aria-labelledby="example-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Example
        </p>

        {/* Heading */}
        <h2
          id="example-heading"
          className="font-display text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-brand-black max-w-2xl mb-12"
        >
          A simple <span className="italic">example</span>
        </h2>

        {/* Steps */}
        <div className="max-w-2xl space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <span className="font-body text-body-sm text-ui-grey font-medium mt-1 flex-shrink-0 w-5">
                {step.number}.
              </span>
              <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
