export interface ToolCard {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ToolGroup {
  heading: string;
  cards: ToolCard[];
}

export const toolGroups: ToolGroup[] = [
  {
    heading: "Learn & understand",
    cards: [
      {
        title: "Documentation",
        description:
          "Core concepts, architecture, and integration guides for building with hypercerts.",
        cta: "docs.hypercerts.org",
        href: "https://docs.hypercerts.org",
      },
    ],
  },
  {
    heading: "Explore the network",
    cards: [
      {
        title: "Hyperscan",
        description:
          "Explore the hypercert network\u2014browse records, data, and activity across the ecosystem.",
        cta: "hyperscan.dev",
        href: "https://hyperscan.dev",
      },
      {
        title: "Certified",
        description:
          "Your portable impact profile\u2014aggregating actions, evaluations, and credentials across applications.",
        cta: "certified.app",
        href: "https://certified.app",
      },
    ],
  },
  {
    heading: "Build & integrate",
    cards: [
      {
        title: "Hypercerts CLI",
        description:
          "Create and manage hypercerts programmatically\u2014automate workflows and integrate with your systems.",
        cta: "View on GitHub",
        href: "https://github.com/hypercerts-org/hypercerts-cli",
      },
      {
        title: "Scaffold App",
        description:
          "Reference application for building hypercert-powered apps\u2014start quickly with authentication, creation, and browsing.",
        cta: "Get started",
        href: "https://github.com/hypercerts-org/hypercerts-app",
      },
      {
        title: "Hyperindex",
        description:
          "Query hypercert data across the network\u2014power your application with real-time, structured data.",
        cta: "API reference",
        href: "https://docs.hypercerts.org/docs/api",
      },
    ],
  },
];
