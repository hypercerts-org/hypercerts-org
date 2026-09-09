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
            explain it—and funders being able to judge it.
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
      <section
        className="bg-white py-24 md:py-32"
        aria-label="Making existing knowledge useful"
      >
        <div className="landing-container grid gap-8 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <p className={bodyCopy}>
            Useful information about projects already exists across communities,
            experts, evaluators, certifiers, and funders, but much of it is
            scattered or hidden.
          </p>
          <p className="font-display text-[32px] leading-[1.2] tracking-[-0.02em] md:text-[40px]">
            Hypercerts make the information visible, show who contributed it,
            and let others{" "}
            <em className="text-brand-accent">
              reuse it rather than recreate it
            </em>{" "}
            for each funding process.
          </p>
        </div>
      </section>
    </>
  );
}
