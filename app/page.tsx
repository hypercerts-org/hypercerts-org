import Ecosystem from "@/components/Ecosystem";
import FundingModels from "@/components/FundingModels";
import GetInvolved from "@/components/GetInvolved";
import HeroSection from "@/components/HeroSection";
import KnowledgeBridge from "@/components/KnowledgeBridge";
import MediaSection from "@/components/MediaSection";
import MissionStatement from "@/components/MissionStatement";
import PartnerLogos from "@/components/PartnerLogos";
import ResourceAllocation from "@/components/ResourceAllocation";
import TrustOverTime from "@/components/TrustOverTime";
import UseCases from "@/components/UseCases";
import WhatIsHypercert from "@/components/WhatIsHypercert";
import ForBuilders from "@/components/ForBuilders";
import WhyNow from "@/components/WhyNow";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hypercerts.org/#webpage",
  url: "https://hypercerts.org",
  name: "Hypercerts | Open infrastructure for funding valuable work",
  description:
    "Hypercerts is an open protocol to connect projects with those who review them, vouch for them, and back them, creating the trust it takes to fund what matters. Funders build on what others already know.",
  isPartOf: { "@id": "https://hypercerts.org/#website" },
  about: {
    "@type": "DefinedTerm",
    name: "Hypercerts Protocol",
    description:
      "A shared language for projects, networks, evaluators, and funders to publish information that participating applications can understand and use. Built on AT Protocol.",
    url: "https://docs.hypercerts.org",
  },
  publisher: { "@id": "https://hypercerts.org/#organization" },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <PartnerLogos />
      <ResourceAllocation />
      <WhyNow />
      <KnowledgeBridge />
      <TrustOverTime />
      <WhatIsHypercert />
      <UseCases />
      <FundingModels />
      <ForBuilders />
      <MissionStatement />
      <Ecosystem />
      <MediaSection />
      <GetInvolved />
    </main>
  );
}
