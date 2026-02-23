import HeroSection from "@/components/HeroSection";
import ImpactMarkets from "@/components/ImpactMarkets";
import PartnerLogos from "@/components/PartnerLogos";
import WhatIsHypercert from "@/components/WhatIsHypercert";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <WhatIsHypercert />
      <ImpactMarkets />
    </main>
  );
}
