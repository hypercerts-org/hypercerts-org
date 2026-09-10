import KnowledgeBridge from "./KnowledgeBridge";
import { bodyCopy, SectionHeading } from "./LandingSection";

const sides = [
  {
    title: "For projects",
    copy:
      "Every funder asks for the same story in a different form. Applications, updates, and reports are rewritten for systems that do not talk to each other, and the record built for one funder rarely counts with the next.",
  },
  {
    title: "For funders",
    copy:
      "Finding promising work and judging it well is expensive. Earlier reviews, local knowledge, certifications, and past funding decisions exist, but they sit with other organizations, so each assessment starts from scratch.",
  },
];

export default function ResourceAllocation() {
  return (
    <>
      <section
        id="why-hypercerts"
        className="bg-ui-bg py-24 md:py-32"
        aria-labelledby="challenge-heading"
      >
        <div className="landing-container grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <SectionHeading
              id="challenge-heading"
              eyebrow="The challenge"
              headingClassName="text-[36px] sm:text-[44px] md:text-[36px] lg:text-display-3"
            >
              The same questions,
              <br />
              <em className="text-brand-accent">asked over and over</em>
            </SectionHeading>
            <div className={`mt-8 space-y-6 ${bodyCopy}`}>
              <p>
                From community land regeneration and local energy to journalism
                and AI safety research, valuable work depends on the people
                doing it being able to explain it, and the people funding it
                being able to judge it.
              </p>
              <p>
                Today that work is repeated for every funding decision. The
                friction takes time away from the work itself, and what one
                round learns rarely reaches the next.
              </p>
            </div>
          </div>
          <div className="md:pt-9">
            <p className="mb-6 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-muted">
              The same problem, two sides
            </p>
            <div className="space-y-10">
              {sides.map((side) => (
                <div key={side.title} className="border-t border-brand-black pt-6">
                  <h3 className="mb-4 font-display text-[32px] leading-tight">
                    {side.title}
                  </h3>
                  <p className={bodyCopy}>{side.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <KnowledgeBridge />
    </>
  );
}
