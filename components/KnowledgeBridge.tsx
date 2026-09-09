import Image from "next/image";
import { bodyCopy } from "./LandingSection";

const contributors = [
  "Communities",
  "Experts",
  "Evaluators",
  "Certifiers",
  "Funders",
];

/** A visual restatement of the adjacent copy, not an example of real records. */
function ContributionMap() {
  return (
    <div className="knowledge-map" aria-hidden="true">
      <div className="knowledge-sources">
        {contributors.map((contributor, index) => (
          <div className="knowledge-source" key={contributor}>
            <span className="knowledge-source-dot" />
            <span>{contributor}</span>
            <span
              className="knowledge-paper-line"
              style={{ width: `${45 + index * 7}%` }}
            />
          </div>
        ))}
      </div>
      <svg
        className="knowledge-connections"
        viewBox="0 0 80 344"
        preserveAspectRatio="none"
      >
        {[28, 100, 172, 244, 316].map((y) => (
          <path key={y} d={`M0 ${y} C40 ${y} 36 172 80 172`} />
        ))}
        <circle cx="74" cy="172" r="4" />
      </svg>
      <div className="knowledge-record">
        <Image
          src="/img/hypercerts_logo_horizontal.svg"
          alt=""
          width={140}
          height={28}
          className="h-auto w-[120px] max-w-full"
        />
        <div className="knowledge-record-rule" />
        <p className="font-display text-heading-4">Project information</p>
        <div className="knowledge-record-entries">
          {contributors.map((contributor) => (
            <div key={contributor}>
              <span className="knowledge-source-dot" />
              <span>{contributor}</span>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 32 32" fill="none" className="knowledge-reuse-mark">
          <path
            d="M25 13a10 10 0 0 0-18-3M7 19a10 10 0 0 0 18 3M7 4v6h6M25 28v-6h-6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function KnowledgeBridge() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      id="reusable-information"
      aria-label="Making existing knowledge useful"
    >
      <div className="landing-container">
        <p className={`max-w-2xl ${bodyCopy}`}>
          Useful information about projects already exists across communities,
          experts, evaluators, certifiers, and funders, but much of it is
          scattered or hidden.
        </p>
        <div className="knowledge-composition mt-12 md:mt-16">
          <ContributionMap />
          <p className="knowledge-statement font-display text-[32px] leading-[1.2] tracking-[-0.02em] md:text-[40px]">
            Hypercerts make the information visible, show who contributed it,
            and let others{" "}
            <em className="text-brand-accent">
              reuse it rather than recreate it
            </em>{" "}
            for each funding process.
          </p>
        </div>
      </div>
    </section>
  );
}
