import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactMarkets from "@/components/ImpactMarkets";
import MediaSection from "@/components/MediaSection";
import MissionStatement from "@/components/MissionStatement";
import PartnerLogos from "@/components/PartnerLogos";
import WhatIsHypercert from "@/components/WhatIsHypercert";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <PartnerLogos />
      <MissionStatement />
      <WhatIsHypercert />
      <HowItWorks />
      <ImpactMarkets />
      <MediaSection />
      <PartnerLogos />
    </main>
  );
}
