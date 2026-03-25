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

export default function Home() {
  return (
    <main id="main-content">
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
