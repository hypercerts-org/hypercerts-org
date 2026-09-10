/** Illustrative examples, not records or measured trust scores. */
export const trustExamples = [
  {
    id: "energy",
    name: "Local energy",
    project: "A community-owned energy project",
    signals: [
      {
        title: "Project update",
        description:
          "The team reports on installation progress and energy production.",
        source: "Project team",
      },
      {
        title: "Peer endorsement",
        description:
          "A neighboring initiative shares its experience of working with the team.",
        source: "Peer project",
      },
      {
        title: "Certification",
        description:
          "An independent certifier documents the standards the installation meets.",
        source: "Certifier",
      },
    ],
  },
  {
    id: "land",
    name: "Community land regeneration",
    project: "A community-led land regeneration project",
    signals: [
      {
        title: "Project update",
        description:
          "The team shares restoration progress and field observations.",
        source: "Project team",
      },
      {
        title: "Peer endorsement",
        description:
          "A neighboring project shares its experience of the team’s work.",
        source: "Peer project",
      },
      {
        title: "Community evaluation & impact data",
        description:
          "Local participants assess the work, alongside measurements from the land.",
        source: "Community & field contributors",
      },
    ],
  },
  {
    id: "research",
    name: "AI safety research",
    project: "An independent AI safety research project",
    signals: [
      {
        title: "Project update",
        description:
          "The team publishes research progress, methods, and findings.",
        source: "Project team",
      },
      {
        title: "Peer endorsement",
        description: "Another research team explains how it has used the work.",
        source: "Peer researchers",
      },
      {
        title: "Expert assessment",
        description: "Independent researchers assess the methods and findings.",
        source: "Domain experts",
      },
    ],
  },
] as const;
