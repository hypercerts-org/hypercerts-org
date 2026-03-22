export interface UseCaseExample {
  name: string;
  description: string;
}

export interface UseCaseTab {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  examples: UseCaseExample[];
}

export const useCaseTabs: UseCaseTab[] = [
  {
    label: "Climate & regeneration",
    title: "Regenerative land & climate action",
    body: "Track, evaluate, and fund environmental restoration\u2014linking satellite and sensor data to verifiable outcomes and enabling funders to reward impact directly.",
    bullets: [
      "Rainforest monitoring with satellite-verified deforestation prevention",
      "Regenerative agriculture practices tracked per plot and season",
      "Community-led reforestation with biodiversity measurements",
      "Carbon sequestration activities with third-party evaluation",
    ],
    examples: [
      { name: "Ma Earth", description: "Regeneration platform" },
      { name: "GainForest", description: "AI-powered conservation" },
      { name: "Silvi", description: "Reforestation tracking" },
      { name: "Astral", description: "Geospatial protocol" },
    ],
  },
  {
    label: "Open-source software",
    title: "Open-source software & digital public goods",
    body: "Record, evaluate, and fund open-source contributions\u2014linking code, audits, and community work to shared impact records and enabling retroactive and ongoing funding.",
    bullets: [
      "Per-release hypercerts for library maintainers",
      "Security audit contributions with evaluation attestations",
      "Infrastructure dependencies funded retroactively by users",
      "Documentation and educational content as recognized contributions",
    ],
    examples: [
      { name: "Gitcoin", description: "Grants & funding rounds" },
      { name: "Optimism", description: "RetroPGF" },
      { name: "OSO", description: "Impact measurement" },
      { name: "Octant", description: "Public goods funding" },
    ],
  },
  {
    label: "Scientific research",
    title: "Scientific research & academic milestones",
    body: "Track research milestones and outcomes, enabling evaluation across disciplines and funding based on real-world impact.",
    bullets: [
      "Research milestones tracked from hypothesis to publication",
      "Open data releases with usage and citation evidence",
      "Interdisciplinary projects with multi-evaluator assessment",
      "Decentralized science (DeSci) funding coordination",
    ],
    examples: [
      { name: "AI Safety", description: "Alignment research" },
      { name: "Biotech", description: "Open pharmaceutical R&D" },
      { name: "Climate", description: "Earth science & modeling" },
      { name: "Social", description: "Policy impact studies" },
    ],
  },
  {
    label: "Community programs",
    title: "Community programs & events",
    body: "Record and fund community-driven work\u2014making coordination, education, and local organizing visible, verifiable, and rewardable.",
    bullets: [
      "Pop-up cities and co-living experiments with documented outcomes",
      "Educational workshops and mentorship programs",
      "Community governance facilitation and coordination",
      "Investigative journalism and public accountability work",
    ],
    examples: [
      { name: "Zuzalu", description: "Pop-up city" },
      { name: "Edge City", description: "Innovation residency" },
      { name: "FtC", description: "Funding the Commons" },
      { name: "ReFi DAO", description: "Regenerative finance" },
    ],
  },
];
