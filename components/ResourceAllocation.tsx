import KnowledgeBridge from "./KnowledgeBridge";
import { bodyCopy, SectionHeading } from "./LandingSection";

export default function ResourceAllocation() {
  return (
    <>
      <section
        id="why-hypercerts"
        className="bg-ui-bg py-24 md:py-32"
        aria-labelledby="challenge-heading"
      >
        <div className="landing-container">
          <SectionHeading id="challenge-heading" eyebrow="The challenge">
            There is too much friction
            <br />
            <em className="text-brand-accent">in funding</em>
          </SectionHeading>
          <p className={`mt-8 max-w-2xl ${bodyCopy}`}>
            From community land regeneration and local energy to journalism and
            AI safety research, valuable work depends on people being able to
            explain it and funders being able to judge it.
          </p>
          <p className="mb-6 mt-14 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-muted">
            The same problem, two sides
          </p>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t border-brand-black pt-6">
              <h3 className="mb-4 font-display text-[32px] leading-tight">
                For projects
              </h3>
              <p className={bodyCopy}>
                Time goes into rewriting applications and reporting the same
                information in disconnected systems.
              </p>
            </div>
            <div className="border-t border-brand-black pt-6">
              <h3 className="mb-4 font-display text-[32px] leading-tight">
                For funders
              </h3>
              <p className={bodyCopy}>
                Previous reviews, local knowledge, and funding history are hard
                to find, so useful assessment work is repeated.
              </p>
            </div>
          </div>
          <p className="mt-12 max-w-3xl border-t border-ui-separator pt-8 font-display text-[28px] leading-tight md:text-[32px]">
            Repeating applications and repeating assessments take time away{" "}
            <em>from the work itself.</em>
          </p>
        </div>
      </section>
      <KnowledgeBridge />
    </>
  );
}
