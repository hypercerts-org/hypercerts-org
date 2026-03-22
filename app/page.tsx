import Architecture from "@/components/Architecture";
import GetInvolved from "@/components/GetInvolved";
import HeroSection from "@/components/HeroSection";
import MediaSection from "@/components/MediaSection";
import MissionStatement from "@/components/MissionStatement";
import PartnerLogos from "@/components/PartnerLogos";
import ResourceAllocation from "@/components/ResourceAllocation";
import ToolsAndApps from "@/components/ToolsAndApps";
import UseCases from "@/components/UseCases";
import WhatIsHypercert from "@/components/WhatIsHypercert";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <MissionStatement />
      <PartnerLogos />
      <ResourceAllocation />
      <WhatIsHypercert />
      <Architecture />
      <UseCases />
      <ToolsAndApps />
      <MediaSection />
      <GetInvolved />
      <PartnerLogos />
    </main>
  );
}
