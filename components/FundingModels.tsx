import { bodyCopy, SectionHeading } from "./LandingSection";

const models = [
  "Grants",
  "Milestone payments",
  "Bounties",
  "Prizes",
  "Outcome payments",
  "Crowdfunding + matching",
];

export default function FundingModels() {
  return (
    <section
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="funding-models-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="funding-models-heading"
          eyebrow="More than one funding model"
        >
          Many ways to fund
          <br />
          <em className="text-brand-accent">valuable work</em>
        </SectionHeading>
        <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
          The same shared records can inform grants, milestone payments,
          bounties, prizes, outcome payments, crowdfunding, and matching. A
          funder may decide independently, convene experts, invite community
          input, or combine several approaches.
        </p>
        <figure className="mt-12" aria-labelledby="funding-diagram-caption">
          <div className="mx-auto max-w-xl rounded-brand border border-brand-black bg-white p-6 text-center md:p-8">
            <p className="font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-brand-accent">
              Shared project information
            </p>
            <p className="mt-4 font-display text-[28px] leading-tight text-brand-black md:text-[32px]">
              Work · evidence · evaluations
              <br />
              &amp; endorsements
            </p>
          </div>
          <figcaption
            id="funding-diagram-caption"
            className="flex flex-col items-center font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark"
          >
            <span
              className="h-6 border-l border-ui-grey-dark"
              aria-hidden="true"
            />
            <span className="py-2">Can inform</span>
            <span
              className="h-6 border-l border-ui-grey-dark"
              aria-hidden="true"
            />
          </figcaption>
          <ul className="funding-branches grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-6">
            {models.map((model) => (
              <li
                key={model}
                className="relative flex min-h-16 lg:min-h-24 items-center justify-center rounded-brand border border-ui-separator bg-white px-3 py-5 text-center font-body text-body-sm leading-relaxed text-brand-black"
              >
                {model}
              </li>
            ))}
          </ul>
        </figure>
        <p className={`mt-10 max-w-3xl ${bodyCopy}`}>
          From regenerative land and open-source software to journalism,
          research, and other public-interest work, each field can bring its own
          evidence and expertise.
        </p>
      </div>
    </section>
  );
}
