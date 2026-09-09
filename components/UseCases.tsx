import MaEarthImage from "./MaEarthImage";
import { bodyCopy, SectionHeading, textLink } from "./LandingSection";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="bg-surface-cream py-24 md:py-32"
      aria-labelledby="case-study-heading"
    >
      <div className="landing-container">
        <SectionHeading id="case-study-heading" eyebrow="Case study · Ma Earth">
          Coordinating regenerative funding
          <br />
          <em className="text-brand-accent">with Ma Earth</em>
        </SectionHeading>
        <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
          Ma Earth combined project-owned data, partner review, crowdfunding,
          and matching to support 201 regenerative projects with almost $2.2M.
          Project information was stored on the open network.
        </p>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <MaEarthImage />
          <div>
            <dl className="grid grid-cols-2 gap-6 border-t-2 border-brand-black pt-5">
              <div>
                <dt className="font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  Projects supported
                </dt>
                <dd className="mt-2 pt-5 font-display text-[48px] leading-none text-brand-black md:text-[64px]">
                  201
                </dd>
              </div>
              <div>
                <dt className="font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  Combined funding
                </dt>
                <dd className="mt-2 font-display text-[48px] leading-none text-brand-accent md:text-[64px]">
                  <span className="mb-1 block font-body text-body-sm text-ui-grey-dark">
                    Almost
                  </span>
                  $2.2M
                </dd>
              </div>
            </dl>
            <p className="mt-5 font-body text-body-sm text-ui-grey-dark">
              Ma Earth · Round 3
            </p>
            <p className={`mt-8 ${bodyCopy}`}>
              Silvi and GainForest helped review applications. The next step is
              for other compatible applications to use the project records in
              later funding processes.
            </p>
            <div className="mt-6 flex flex-col items-start gap-2">
              <a href="/case-studies/ma-earth" className={textLink}>
                Read the full Ma Earth case study{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
