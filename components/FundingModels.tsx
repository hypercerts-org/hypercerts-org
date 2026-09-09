"use client";

import { bodyCopy, SectionHeading } from "./LandingSection";
import { useDiagramReveal } from "./diagrams/useDiagramReveal";

const horizons = [
  {
    label: "Today",
    status: "In use",
    models: ["Crowdfunding", "Matching"],
    description:
      "Project information and partner review support real funding rounds.",
    current: true,
  },
  {
    label: "Possible next",
    status: "Potential extensions",
    models: ["Outcome payments"],
    description:
      "Shared evidence could inform payments for results. Bounties are another nearer possibility.",
    current: false,
  },
  {
    label: "Future",
    status: "Possibilities to explore",
    models: ["Impact investing", "Commerce", "Procurement"],
    description:
      "Broader uses would need further development. Procurement requires protocol changes.",
    current: false,
  },
];

export default function FundingModels() {
  const { ref, visible } = useDiagramReveal();
  return (
    <section
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="funding-models-heading"
    >
      <div className="landing-container">
        <SectionHeading
          id="funding-models-heading"
          eyebrow="Today’s use · Tomorrow’s possibilities"
        >
          Information economy
          <br />
          <em className="text-brand-accent">done right</em>
        </SectionHeading>
        <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
          Start with crowdfunding and matching. Over time, shared information
          about valuable work could support more ways to allocate resources—from
          bounties to investing, commerce, and procurement.
        </p>
        <div
          ref={ref}
          data-visible={visible}
          className="economy-timeline diagram-reveal mt-14 md:mt-20"
        >
          <svg
            className="economy-line"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 20H1000" className="chart-guide" />
            <path d="M0 20H333" pathLength="1" className="timeline-present" />
            <path d="M333 20H995m-9-5 9 5-9 5" className="timeline-future" />
          </svg>
          <ol className="grid gap-8 md:grid-cols-3">
            {horizons.map((horizon, index) => (
              <li
                key={horizon.label}
                className="timeline-era"
                data-current={horizon.current}
                style={{ animationDelay: `${index * 180}ms` }}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <p className="mb-5 font-body text-body-sm uppercase tracking-[0.2em] text-brand-black">
                  {horizon.label}
                </p>
                <div className="timeline-record">
                  <p className="font-body text-body-sm text-ui-grey-muted">
                    {horizon.status}
                  </p>
                  <ul className="my-6 space-y-3 font-display text-heading-4 text-brand-black">
                    {horizon.models.map((model) => (
                      <li key={model}>{model}</li>
                    ))}
                  </ul>
                  <p className="mt-auto font-body text-body-sm leading-relaxed text-ui-grey-dark">
                    {horizon.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl font-body text-body-sm leading-relaxed text-ui-grey-muted">
            Future uses are possibilities to explore together, rather than a
            release schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
