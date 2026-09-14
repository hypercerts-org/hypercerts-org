/** Illustrative examples, not records or measured trust scores. */

export type TrustSignal = {
  /* The kind of signal, as named on its card; any kind can recur. */
  title: string;
  /* The chart's label, naming what it draws for one example project. */
  label: string;
  description: string;
};

export const projectUpdates: TrustSignal = {
  title: "Project updates",
  label: "Project update",
  description:
    "The team reports what it has done and attaches evidence of the work, as often as there is progress.",
};

export const thirdPartyAttestations: TrustSignal = {
  title: "Third-party attestations",
  label: "Third-party attestations",
  description: "Others vouch for the work, depending on the impact area:",
};

/* What third-party attestations can be depends on the impact area. A peer
   endorsement fits any area; the rest are particular to the work. */
export const fieldSignals = [
  "Peer endorsement",
  "Community evaluation",
  "Impact data / certifications",
  "Expert assessment",
];

export const fundingRecords: TrustSignal = {
  title: "Funding records",
  label: "Funding record",
  description:
    "Funders record their support and, if they choose, the reasons behind it.",
};
