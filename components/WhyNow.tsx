import { bodyCopy, SectionHeading } from "./LandingSection";

export default function WhyNow() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      aria-labelledby="why-now-heading"
    >
      <div className="landing-container">
        <SectionHeading id="why-now-heading" eyebrow="Why now">
          As AI changes the landscape,
          <br />
          <em className="text-brand-accent">
            the need for open and credible signals increases
          </em>
        </SectionHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="border-t border-brand-black pt-6">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              AI makes convincing stories cheap
            </h3>
            <p className={bodyCopy}>
              Applications and progress reports are easier to generate at scale.
              More polished text does not, by itself, mean more trustworthy
              evidence.
            </p>
            <p className={`mt-5 ${bodyCopy}`}>
              Funders, whether people or AI agents, need to see who stands behind
              a claim, what supports it, and whether independent sources
              corroborate it.
            </p>
          </div>
          <div className="border-t border-brand-black pt-6">
            <h3 className="mb-5 font-display text-[28px] leading-tight">
              Shared records for people and agents
            </h3>
            <p className={bodyCopy}>
              Hypercerts uses AT Protocol to make project information and
              related assessments available across compatible services.
            </p>
            <p className={`mt-5 ${bodyCopy}`}>
              An application or agent can read records from identified
              contributors and inspect the evidence behind them, instead of
              relying only on a project’s own account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
