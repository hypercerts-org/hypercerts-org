import { bodyCopy, SectionHeading } from "./LandingSection";

export default function KnowledgeBridge() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      id="reusable-information"
      aria-labelledby="knowledge-heading"
    >
      <div className="landing-container flex flex-col items-center text-center">
        <SectionHeading id="knowledge-heading" eyebrow="The opportunity">
          The knowledge is there.
          <br />
          <em className="text-brand-accent">Let’s make it reusable.</em>
        </SectionHeading>
        <p className={`mt-8 max-w-[38rem] text-pretty ${bodyCopy}`}>
          Communities, experts, evaluators, certifiers, and funders already hold
          useful information about projects, but much of it is scattered or
          hidden. Hypercerts makes that knowledge visible and shows who contributed
          it, so others can reuse it in later funding decisions instead of
          recreating it for every process.
        </p>
      </div>
    </section>
  );
}
