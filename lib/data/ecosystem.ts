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
    description: "Protocol development, research, and open infrastructure.",
    tag: "Protocol steward",
    href: "https://hypercerts.org",
    logo: "/img/hypercerts_foundation_logo.svg",
  },
  {
    name: "Ma Earth",
    description: "Regenerative land projects and real funding rounds.",
    tag: "Core contributor",
    href: "https://www.maearth.com/",
    logo: "/img/maearth_logo.png",
    logoInvert: true,
  },
  {
    name: "GainForest",
    description:
      "Conservation evidence, field tools, and project applications.",
    tag: "Core contributor",
    href: "https://gainforest.earth/",
    logo: "/img/gainforest_earth_logo.png",
  },
  {
    name: "Protocol Labs",
    description: "Research into new approaches to public goods funding.",
    tag: "Research partner",
    href: "https://www.protocol.ai",
    logo: "/img/protocollabs_logo.png",
  },
  {
    name: "Octant",
    description: "Community-driven funding for public goods.",
    tag: "Research partner",
    href: "https://octant.build/",
    logo: "/img/octant_logo.png",
  },
  {
    name: "Silvi",
    description: "Tree-planting records, reporting, and geospatial evidence.",
    tag: "Domain partner",
    href: "https://silvi.earth",
    logo: "/img/silvi_logo.png",
  },
  {
    name: "Regen Foundation",
    description: "Ecological regeneration and community governance.",
    tag: "Domain partner",
    href: "https://regen.foundation",
    logo: "/img/regen_foundation_logo.svg",
  },
  {
    name: "Funding the Commons",
    description: "Connecting people building and funding public goods.",
    tag: "Community",
    href: "https://fundingthecommons.io/",
    logo: "/img/fundingthecommons_logo.png",
  },
];
