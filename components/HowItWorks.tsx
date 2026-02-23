export default function HowItWorks() {
  const steps = [
    "Create a hypercert for your project's work and impact.",
    "Distribute fractions to your funders and contributors.",
    "Create a hyperboard to showcase your supporters.",
    "Sell hypercerts on your website or the marketplace.",
  ];

  return (
    <section className="w-full bg-ui-bg py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
            How it works
          </p>
          <h2 className="font-display text-display-3 md:text-display-2 text-brand-black">
            Get started in four steps
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column — Steps */}
          <div>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 mb-8">
                {/* Number badge */}
                <div className="w-10 h-10 rounded-brand bg-brand-black text-brand-white flex items-center justify-center font-body font-medium text-body-lg flex-shrink-0">
                  {index + 1}
                </div>
                {/* Step text */}
                <p className="font-body text-body-lg text-brand-black pt-1">
                  {step}
                </p>
              </div>
            ))}

            {/* Role tags */}
            <div className="flex gap-3 mt-8 flex-wrap">
              <span className="bg-brand-black text-brand-white px-5 py-2 rounded-full text-body-sm font-medium font-body">
                projects
              </span>
              <span className="bg-brand-white text-brand-black border border-brand-black px-5 py-2 rounded-full text-body-sm font-medium font-body">
                evaluators
              </span>
              <span className="bg-brand-white text-brand-black border border-brand-black px-5 py-2 rounded-full text-body-sm font-medium font-body">
                funding platforms
              </span>
            </div>
          </div>

          {/* Right column — Visual card */}
          <div className="bg-ui-bg rounded-brand p-8">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-display-2 text-brand-black">
                459
              </span>
              <span className="font-body text-body-lg text-ui-grey-dark">
                hypercerts created with allowlists
              </span>
            </div>
            <a
              href="/explore"
              className="font-body text-body-lg text-brand-teal hover:underline"
            >
              Explore hypercerts →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
