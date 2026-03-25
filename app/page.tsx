import Ecosystem from "@/components/Ecosystem";
import GetInvolved from "@/components/GetInvolved";
import HeroSection from "@/components/HeroSection";
import MediaSection from "@/components/MediaSection";
import MissionStatement from "@/components/MissionStatement";
import OpenByDesign from "@/components/OpenByDesign";
import PartnerLogos from "@/components/PartnerLogos";
import ResourceAllocation from "@/components/ResourceAllocation";
import ToolsAndApps from "@/components/ToolsAndApps";
import UseCases from "@/components/UseCases";
import Vision from "@/components/Vision";
import WhatIsHypercert from "@/components/WhatIsHypercert";

const geoStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Hypercert",
    description:
      "A living digital record of impactful work that captures what was done or is planned, by whom, when, and where. As evidence and evaluations accumulate over time, a hypercert becomes a shared, evolving picture of work and its value—enabling better funding decisions.",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Hypercerts Protocol",
      url: "https://docs.hypercerts.org",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Hypercerts Work",
    description:
      "Hypercerts create a shared system where work is recorded, evaluated, and funded—linking contributions directly to impact and resources.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Record",
        text: "Projects create structured records of their work—what was done or is planned—forming a shared foundation for evaluation and funding.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Evaluate",
        text: "Domain experts, communities, and tools assess contributions. Evaluations accumulate over time, building a shared layer of trust.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Fund",
        text: "Funders use shared records and evaluations to make better decisions. The resulting impact is attributed to contributors and funders.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a hypercert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A hypercert is a living digital record of impactful work. It captures a simple claim: what was done or is planned, by whom, when, and where. As evidence and feedback accumulate, it becomes a shared, evolving picture of the work and its value. Hypercerts are built on open infrastructure (the AT Protocol), so records are portable, referenceable, and not locked into any single platform.",
        },
      },
      {
        "@type": "Question",
        name: "How do hypercerts work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hypercerts follow a three-step process: (1) Record — projects publish structured records of their work. (2) Evaluate — domain experts, communities, and tools assess contributions, building a shared layer of trust over time. (3) Fund — funders use shared records and evaluations to make better decisions, with impact attributed to both contributors and funders.",
        },
      },
      {
        "@type": "Question",
        name: "What domains can hypercerts be used in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hypercerts can be applied across any domain where collective work needs to be funded. Current use cases include climate and regeneration (e.g. reforestation, soil restoration), open-source software, research and development, and community programs. The same pattern—shared records, evidence, evaluation, and funding—works across all of these domains.",
        },
      },
      {
        "@type": "Question",
        name: "What technology are hypercerts built on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hypercerts are built on the AT Protocol as open, shared infrastructure. Records, evaluations, and attribution are portable, referenceable, and accessible across applications. This means data is not locked into any single platform, identity persists across tools, and different applications can build on the same shared data layer.",
        },
      },
      {
        "@type": "Question",
        name: "Who builds and uses hypercerts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hypercerts is developed by a growing ecosystem including the Hypercerts Foundation, Ma Earth, GainForest, Protocol Labs, Octant, Silvi, Regen Foundation, and Funding the Commons. The protocol is shaped by builders, funders, evaluators, and researchers across multiple domains.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hypercerts Protocol",
    applicationCategory: "Infrastructure",
    operatingSystem: "Web",
    url: "https://hypercerts.org",
    description:
      "Open infrastructure for recording, evaluating, and funding impactful work. Built on the AT Protocol.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Hypercerts Foundation",
    },
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(geoStructuredData),
        }}
      />
      {/* GEO: extractable summary for AI search engines */}
      <p className="sr-only">
        Hypercerts are living digital records of impactful work, built on the AT
        Protocol as open infrastructure. Projects record their work, evaluators
        add evidence and trust signals, and funders allocate capital using shared
        records. The same pattern applies across climate and regeneration,
        open-source software, research and development, and community programs.
        Hypercerts are developed by the Hypercerts Foundation alongside Ma
        Earth, GainForest, Protocol Labs, Octant, Silvi, Regen Foundation, and
        Funding the Commons.
      </p>
      <HeroSection />
      <MissionStatement />
      <PartnerLogos />
      <ResourceAllocation />
      <WhatIsHypercert />
      <Vision />
      <OpenByDesign />
      <UseCases />
      <ToolsAndApps />
      <Ecosystem />
      <MediaSection />
      <GetInvolved />
      <PartnerLogos />
    </main>
  );
}
