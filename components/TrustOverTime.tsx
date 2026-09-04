import { bodyCopy, SectionHeading } from "./LandingSection";

const contributions = [
  {
    title: "Peer endorsement",
    text: "A neighboring project vouches for the team.",
    source: "Neighboring project",
    position: "trust-peer",
  },
  {
    title: "Network certification",
    text: "A certifier publishes the standard the organization meets.",
    source: "Network certifier",
    position: "trust-certification",
  },
  {
    title: "Independent assessment",
    text: "An evaluator reviews the restoration evidence.",
    source: "Independent evaluator",
    position: "trust-assessment",
  },
  {
    title: "Funding record",
    text: "A funder records support for the work.",
    source: "Supporting funder",
    position: "trust-funding",
  },
];

export default function TrustOverTime() {
  return (
    <section
      className="bg-ui-bg py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading id="trust-heading" eyebrow="Trust builds over time">
          See who knows the work,
          <br />
          who supports it,
          <br />
          <em className="text-brand-accent">and what happens next.</em>
        </SectionHeading>
        <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
          Peers, communities, networks, and experts contribute different
          perspectives. Each endorsement, certification, or assessment
          identifies its source, so funders can decide whose judgment matters
          for the work.
        </p>
        <figure className="mt-12" aria-labelledby="trust-caption">
          <figcaption
            id="trust-caption"
            className="mb-8 font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-ui-grey-dark"
          >
            Illustrative example · Independent contributions around one project
          </figcaption>
          <div className="trust-diagram">
            <div className="trust-project relative z-10 flex flex-col justify-center rounded-brand border border-brand-black bg-surface-cream p-6 md:text-center">
              <p className="mb-4 font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent">
                Shared work record
              </p>
              <h3 className="font-display text-[32px] leading-tight text-brand-black">
                Community
                <br className="hidden md:block" /> land project
              </h3>
              <p className="mt-4 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                Work, people, and location
              </p>
              <p className="mt-5 border-t border-ui-separator pt-3 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                Published by the project team
              </p>
            </div>
            {contributions.map(({ title, text, source, position }) => (
              <div
                key={title}
                className={`trust-contribution ${position} relative rounded-brand border border-ui-separator bg-white p-5 lg:p-6`}
              >
                <h3 className="font-display text-heading-4 text-brand-black">
                  {title}
                </h3>
                <p className="mt-3 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  {text}
                </p>
                <p className="mt-4 border-t border-ui-separator pt-3 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  <span className="text-brand-accent">Source</span> · {source}
                </p>
              </div>
            ))}
            <div className="trust-update relative rounded-brand border border-ui-separator bg-white p-6 md:text-center">
              <h3 className="font-display text-heading-4">
                Later project update
              </h3>
              <p className="mt-3 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                The team publishes field observations and progress.
              </p>
              <p className="mt-3 font-body text-body-sm text-ui-grey-dark">
                <span className="text-brand-accent">Source</span> · Project team
              </p>
            </div>
          </div>
        </figure>
        <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <p className={bodyCopy}>
            After funding, projects can add updates and evidence of what
            happened. Funders and communities can follow the work and use that
            information when considering future support.
          </p>
          <p className="border-l-2 border-brand-accent pl-5 font-body text-body-lg leading-relaxed text-ui-grey-dark">
            Every contribution has a source. There is no universal score:
            readers decide which evidence and judgments matter.
          </p>
        </div>
      </div>
    </section>
  );
}
