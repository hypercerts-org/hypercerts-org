const steps = [
  {
    number: 1,
    title: "Record",
    body: "Projects create structured records of their work\u2014who did what, when, and where\u2014forming a shared foundation for evaluation and funding.",
  },
  {
    number: 2,
    title: "Evaluate",
    body: "Domain experts, communities, and tools assess contributions. Evaluations accumulate over time, building a shared layer of trust.",
  },
  {
    number: 3,
    title: "Fund",
    body: "Funders use shared records and evaluations to make better decisions\u2014supporting work through grants, rewards, or ongoing funding.",
  },
];

export default function Architecture() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Architecture
        </p>

        {/* Heading — largest of the three sections */}
        <h2
          id="architecture-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          How the Hypercerts Protocol Works
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          Hypercerts create a shared system where work is recorded, evaluated,
          and funded&mdash;linking contributions directly to impact and
          resources.
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

        {/* Footer callout */}
        <div className="mt-20 border-t border-ui-separator pt-8">
          <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-3xl italic">
            Built on open infrastructure&mdash;so contributions, evaluations,
            and funding work seamlessly across applications, without lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
