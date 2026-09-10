/** Illustrative examples, not records or measured trust scores. */

export type TrustSignal = {
  title: string;
  description: string;
  issuer: string;
};

/* Signals that apply to any project, whatever its field. */
export const commonSignals: TrustSignal[] = [
  {
    title: "Project update",
    description:
      "The team reports what it has done and attaches evidence of the work.",
    issuer: "the project",
  },
  {
    title: "Peer endorsement",
    description:
      "An organization that knows the work vouches for it in its own name.",
    issuer: "a peer organization",
  },
  {
    title: "Funding record",
    description:
      "A funder records its support and, when useful, the reasons behind it.",
    issuer: "a funder",
  },
];

/* Provisional fields from the 9 September review. Only the field-specific
   signals differ between them. */
export const fields = [
  {
    id: "energy",
    name: "Local energy",
    project: "A community-owned energy project",
    signals: [
      {
        title: "Certification",
        description:
          "An independent certifier documents the standards the installation meets.",
        issuer: "a certifier",
      },
    ],
  },
  {
    id: "land",
    name: "Community land regeneration",
    project: "A community-led land regeneration project",
    signals: [
      {
        title: "Community evaluation",
        description:
          "Local participants assess the work and what it has changed on the ground.",
        issuer: "the local community",
      },
      {
        title: "Impact data",
        description:
          "Measurements from the land, such as satellite imagery or bioacoustics.",
        issuer: "field measurements",
      },
    ],
  },
  {
    id: "research",
    name: "AI safety research",
    project: "An independent AI safety research project",
    signals: [
      {
        title: "Expert assessment",
        description:
          "Independent researchers assess the methods and the findings.",
        issuer: "domain experts",
      },
    ],
  },
] as const;
