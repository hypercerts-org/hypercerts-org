export default function WhatIsHypercert() {
  return (
    <section className="bg-ui-bg py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section label */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4 text-center">
          What is a hypercert
        </p>

        {/* Section 1: Text block */}
        <div className="text-center">
          <h2 className="font-display text-display-2 max-sm:text-[42px] leading-none">
            Hypercerts Represent the Impact of Work
          </h2>
          <p className="font-body text-body-lg text-ui-grey-dark max-w-lg mx-auto mt-6">
            Every hypercert accounts for a discrete piece of work and represents
            the impact resulting from that work. Projects create hypercerts for
            their work. Evaluators assess the outputs, outcomes and impact of
            projects&apos; work. Funders buy hypercert fractions and receive the
            rights to claim the represented impact.
          </p>
        </div>

        {/* Section 2: Diagram */}
        <div className="bg-white rounded-[16px] overflow-hidden shadow-sm mt-10">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/img/what_is_a_hypercert_intro_mobile.png"
            />
            <img
              src="/img/what_is_a_hypercert_intro.png"
              alt="What is a Hypercert"
              className="max-w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
