import type { Metadata } from "next";
import Link from "next/link";
import MaEarthImage from "@/components/MaEarthImage";
import {
  bodyCopy,
  developerGuideUrl,
  primaryButton,
  secondaryButton,
  SectionHeading,
} from "@/components/LandingSection";

const title = "How Ma Earth coordinated a regenerative funding network";
const description =
  "Project-owned data, partner review, crowdfunding, and matching supported 201 regenerative projects with almost $2.2M in Ma Earth’s third funding round.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://hypercerts.org/case-studies/ma-earth" },
  openGraph: {
    title,
    description,
    url: "https://hypercerts.org/case-studies/ma-earth",
    type: "article",
    images: [
      {
        url: "/img/case-studies/ma-earth-community.webp",
        alt: "Community members tending rows of crops together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/case-studies/ma-earth-community.webp"],
  },
};

export default function MaEarthCaseStudy() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <article>
        <header className="bg-surface-cream py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              href="/#use-cases"
              className="mb-10 inline-block py-2 font-body text-body-sm text-ui-grey-dark underline underline-offset-4"
            >
              ← All use cases
            </Link>
            <p className="mb-4 font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-ui-grey-dark">
              Case study / Regenerative land
            </p>
            <h1 className="max-w-4xl font-display text-[48px] leading-[1.05] tracking-[-0.02em] text-brand-black md:text-display-2">
              How Ma Earth coordinated
              <br />
              <em className="text-brand-accent">
                a regenerative funding network
              </em>
            </h1>
            <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
              Project-owned data, partner review, crowdfunding, and matching
              supported 201 regenerative projects and created information that
              can remain useful after the round.
            </p>
            <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
              <MaEarthImage priority />
              <dl className="space-y-6">
                {[
                  ["201", "Projects funded"],
                  ["Almost $1M", "Crowd donations"],
                  ["$1M", "Matching pool"],
                  [
                    "Almost $2.2M",
                    "Combined funding, including a $200,000 collective bonus",
                  ],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-t border-ui-separator pt-4"
                  >
                    <dt className="font-body text-body-sm leading-relaxed text-ui-grey-dark">
                      {label}
                    </dt>
                    <dd className="mt-2 font-display text-[40px] leading-tight text-brand-black">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-8 font-body text-body-sm leading-relaxed text-ui-grey-dark">
              Round 3 · Ma Earth reports $2.19M distributed to 201 projects.{" "}
              <a
                href="https://www.maearth.com/"
                className="underline underline-offset-4"
              >
                Explore Ma Earth’s results ↗
              </a>
            </p>
          </div>
        </header>
        <section
          className="bg-white py-24 md:py-32"
          aria-labelledby="round-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading id="round-heading" eyebrow="The challenge">
              Coordinate many actors,
              <br />
              <em className="text-brand-accent">without losing context</em>
            </SectionHeading>
            <p className={`mt-8 max-w-3xl ${bodyCopy}`}>
              Ma Earth needed one funding process that could make hundreds of
              projects legible, combine crowd participation with independent
              review, and preserve useful project information beyond a single
              round.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                [
                  "Projects",
                  "Submitted shared information about planned or completed regenerative work.",
                ],
                [
                  "Evaluators",
                  "Partner organizations reviewed applications using their own expertise and methods.",
                ],
                [
                  "Funders and crowd",
                  "Direct contributions and the number of supporters informed the matching allocation.",
                ],
              ].map(([role, text]) => (
                <div key={role} className="border-t-2 border-brand-black pt-5">
                  <h3 className="font-display text-[28px] leading-tight">
                    {role}
                  </h3>
                  <p className={`mt-4 ${bodyCopy}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="bg-ui-bg py-24 md:py-32"
          aria-labelledby="next-round-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading
              id="next-round-heading"
              eyebrow="What Hypercerts contributes"
            >
              Project information that stays useful
              <br />
              <em className="text-brand-accent">beyond one round</em>
            </SectionHeading>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
              <div className={`space-y-5 ${bodyCopy}`}>
                <p>
                  The Ma Earth round demonstrated that shared project
                  information and partner-led review can support a real funding
                  process. Project records were stored on the open network,
                  where compatible applications can read them.
                </p>
                <p>
                  A project can maintain its information over time rather than
                  recreate it for every opportunity. Assessments identify their
                  source, so another funder can decide how much weight to give
                  them.
                </p>
              </div>
              <div className="rounded-brand border border-ui-separator bg-white p-6 md:p-8">
                <h3 className="font-display text-[28px]">
                  Closing the loop
                </h3>
                <p className={`mt-4 ${bodyCopy}`}>
                  The projects funded in this round report what they did with
                  the money, so their record is ready when the next round opens
                  in 2027. Later funding processes can then add their own
                  evaluations, endorsements, or funding decisions to the same
                  records.
                </p>
                <p className="mt-5 border-t border-ui-separator pt-5 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  Endorsements were not used to allocate the Ma Earth matching
                  pool.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-white py-24 md:py-32"
          aria-labelledby="case-contact-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading
              id="case-contact-heading"
              eyebrow="Explore the pattern"
            >
              Your program,
              <br />
              <em className="text-brand-accent">connected to the network</em>
            </SectionHeading>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className={primaryButton}>
                Discuss your program or network →
              </a>
              <a href={developerGuideUrl} className={secondaryButton}>
                Developer guide ↗
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
