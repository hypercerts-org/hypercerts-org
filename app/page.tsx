import HeroSection from "@/components/HeroSection";
import ImpactMarkets from "@/components/ImpactMarkets";
import MediaSection from "@/components/MediaSection";
import PartnerLogos from "@/components/PartnerLogos";
import WhatIsHypercert from "@/components/WhatIsHypercert";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <WhatIsHypercert />
      <ImpactMarkets />
      <MediaSection />
      <div style={{ marginTop: "50px" }}>
        <PartnerLogos />
      </div>
    </main>
  );
}
