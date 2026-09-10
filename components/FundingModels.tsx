"use client";

import { bodyCopy, SectionHeading } from "./LandingSection";
import { useDiagramReveal } from "./diagrams/useDiagramReveal";

const horizons = [
  {
    label: "Today",
    status: "In use",
    models: ["Crowdfunding with matching pools"],
    description:
      "Project information and partner review support real funding rounds.",
    current: true,
  },
  {
    label: "Possible next",
    status: "Potential extensions",
    models: ["Outcome payments", "Hackathons", "Milestone bounties"],
    description:
      "Shared evidence could inform payments for results. Bounties are another nearer possibility.",
    current: false,
  },
  {
    label: "Future",
    status: "Possibilities to explore",
    models: ["Impact investing", "Commerce", "Procurement"],
    description:
      "Investment, purchasing, and contracting decisions could draw on the same impact and trust signals.",
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
          about valuable work could support more ways to allocate resources,
          from bounties to investing, commerce, and procurement.
        </p>
        <div
          ref={ref}
          data-visible={visible}
          className="economy-timeline diagram-reveal mt-14 md:mt-20"
        >
          <ol className="timeline-grid grid md:grid-cols-3">
            {horizons.map((horizon, index) => (
              <li
                key={horizon.label}
                className="timeline-era"
                data-current={horizon.current}
              >
                <svg
                  className="timeline-connector timeline-connector-horizontal"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6H100"
                    className={
                      horizon.current ? "timeline-present" : "timeline-future"
                    }
                  />
                </svg>
                <svg
                  className="timeline-connector timeline-connector-vertical"
                  viewBox="0 0 12 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 0V100"
                    className={
                      horizon.current ? "timeline-present" : "timeline-future"
                    }
                  />
                </svg>
                {index === horizons.length - 1 && (
                  <svg
                    className="timeline-arrow"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 2 6 4-6 4"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                )}
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
        </div>
      </div>
    </section>
  );
}
