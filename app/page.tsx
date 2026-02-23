import HeroSection from "@/components/HeroSection";
import ImpactMarkets from "@/components/ImpactMarkets";
import MediaSection from "@/components/MediaSection";
import MissionStatement from "@/components/MissionStatement";
import PartnerLogos from "@/components/PartnerLogos";
import WhatIsHypercert from "@/components/WhatIsHypercert";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
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
