export default function WhatIsHypercert() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="what-is-hypercert-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4 text-center">
          What is a hypercert
        </p>

        {/* Headline — extracted from first sentence */}
        <h2
          id="what-is-hypercert-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black text-center max-w-3xl mx-auto"
        >
          A Living Digital Record
          <br />
          <span className="italic">of Impactful Work</span>
        </h2>

        {/* Lead paragraph */}
        <p className="font-body text-body-lg text-ui-grey-dark text-center max-w-2xl mx-auto mt-8 leading-relaxed">
          At its core, a hypercert captures a simple claim: who did what, when, and where. As evidence and feedback accumulate over time, it becomes a shared, evolving picture of the work and its value.
        </p>

        {/* Two feature blocks */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Block 1: Context for coordination */}
          <div className="border-t-2 border-brand-black pt-6">
            <h3 className="font-display text-heading-4 text-brand-black mb-3">
              Context for Resource Allocation
            </h3>
            <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
              Hypercerts create shared context that humans and AI can use in novel funding and decision-making mechanisms—enabling effective coordination around collective value.
            </p>
          </div>

          {/* Block 2: Portable by design */}
          <div className="border-t-2 border-brand-black pt-6">
            <h3 className="font-display text-heading-4 text-brand-black mb-3">
              Impact as a Shared Record
            </h3>
            <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
              Hypercerts attribute impact to contributors and funders through a shared, referenceable record—enabling credible proof and recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
