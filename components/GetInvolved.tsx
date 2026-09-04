import {
  bodyCopy,
  developerGuideUrl,
  primaryButton,
  secondaryButton,
  SectionHeading,
} from "./LandingSection";

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-white py-24 md:py-32"
      aria-labelledby="get-involved-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <SectionHeading id="get-involved-heading" eyebrow="Get involved">
              Let’s build this
              <br />
              <em className="text-brand-accent">together</em>
            </SectionHeading>
            <p className={`mt-8 ${bodyCopy}`}>
              We work with funders, networks, certifiers, communities, and
              builders. Bring a funding program, a certification process, or a
              need to follow the work your organization supports.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className={primaryButton}>
                Get in touch{" "}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
              <a href={developerGuideUrl} className={secondaryButton}>
                Developer guide{" "}
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="self-center border-t-2 border-brand-black pt-5">
            <h3 className="font-display text-[28px] leading-tight">
              The Hypercerts Foundation
            </h3>
            <p className={`mt-4 ${bodyCopy}`}>
              An independent nonprofit stewarding the protocol, maintaining open
              infrastructure, and helping organizations participate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
