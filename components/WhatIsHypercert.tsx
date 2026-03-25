const steps = [
  {
    number: 1,
    title: "Record",
    body: "Projects create structured records of their work—what was done or is planned—forming a shared foundation for evaluation and funding.",
  },
  {
    number: 2,
    title: "Evaluate",
    body: "Domain experts, communities, and tools assess contributions. Evaluations accumulate over time, building a shared layer of trust.",
  },
  {
    number: 3,
    title: "Fund",
    body: "Funders use shared records and evaluations to make better decisions. The resulting impact is attributed to contributors and funders.",
  },
];

export default function WhatIsHypercert() {
  return (
    <section
      id="what-is-hypercert"
      className="bg-ui-bg py-28 md:py-36"
      aria-labelledby="what-is-hypercert-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-4 text-center">
          What is a hypercert
        </p>

        {/* Headline */}
        <h2
          id="what-is-hypercert-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black text-center max-w-3xl mx-auto"
        >
          A Living Record of Work
          <br />
          <span className="italic text-brand-accent">That Can Be Funded</span>
        </h2>

        {/* Lead paragraph */}
        <p className="font-body text-body-lg text-ui-grey-dark text-center max-w-2xl mx-auto mt-8 leading-relaxed">
          At its core, a hypercert captures a simple claim: what was done or is planned, by whom, when, and where. As evidence and feedback accumulate, it becomes a shared, evolving picture of the work and its value.
        </p>

        {/* Three steps — with connecting line */}
        <div className="grid md:grid-cols-3 gap-0 mt-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative pt-8 ${index < steps.length - 1 ? "md:border-r md:border-ui-separator md:pr-10" : ""} ${index > 0 ? "md:pl-10" : ""} ${index > 0 ? "mt-10 md:mt-0" : ""}`}
            >
              {/* Step number */}
              <div className="w-10 h-10 rounded-full border-2 border-brand-black flex items-center justify-center mb-5">
                <span className="font-body text-body-sm font-medium text-brand-black">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-heading-4 text-brand-black mb-3">
                {step.title}
              </h3>
              <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
