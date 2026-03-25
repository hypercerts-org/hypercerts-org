export interface EcosystemPartner {
  name: string;
  description: string;
  tag: string;
  href: string;
  logo?: string;
  logoInvert?: boolean;
}

export const ecosystemPartners: EcosystemPartner[] = [
  {
    name: "Hypercerts Foundation",
    description:
      "Steward of the hypercerts protocol\u2014coordinating development, research, and ecosystem growth.",
    tag: "Protocol steward",
    href: "https://hypercerts.org",
    logo: "/img/hypercerts_foundation_logo.svg",
  },
  {
    name: "Ma Earth",
    description:
      "Regenerative land stewardship platform connecting landowners, funders, and evaluators through hypercerts.",
    tag: "Core contributor",
    href: "https://www.maearth.com/",
    logo: "/img/maearth_logo.png",
    logoInvert: true,
  },
  {
    name: "GainForest",
    description:
      "AI-powered conservation platform using hypercerts to track and verify biodiversity outcomes with satellite and sensor data.",
    tag: "Core contributor",
    href: "https://gainforest.earth/",
    logo: "/img/gainforest_earth_logo.png",
  },
  {
    name: "Protocol Labs",
    description:
      "Foundational research and early development of hypercerts as a new primitive for public goods funding.",
    tag: "Research partner",
    href: "https://www.protocol.ai",
    logo: "/img/protocollabs_logo.png",
  },
  {
    name: "Octant",
    description:
      "Community-driven public goods funding platform exploring impact-weighted allocation using hypercert data.",
    tag: "Research partner",
    href: "https://octant.build/",
    logo: "/img/octant_logo.png",
  },
  {
    name: "Silvi",
    description:
      "Reforestation tracking platform connecting tree planters with funders through verified planting data.",
    tag: "Domain partner",
    href: "https://silvi.earth",
    logo: "/img/silvi_logo.png",
  },
  {
    name: "Regen Foundation",
    description:
      "Advancing ecological regeneration through open infrastructure, community governance, and on-the-ground partnerships.",
    tag: "Domain partner",
    href: "https://regen.foundation",
    logo: "/img/regen_foundation_logo.svg",
  },
  {
    name: "Funding the Commons",
    description:
      "Global conference series and community at the intersection of public goods funding, open-source, and impact.",
    tag: "Community",
    href: "https://fundingthecommons.io/",
    logo: "/img/fundingthecommons_logo.png",
  },
];
