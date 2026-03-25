export interface ToolCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  image?: string;
  imagePosition?: string;
}

export const featuredTools: ToolCard[] = [
  {
    title: "Hyperscan",
    description:
      "Explore the hypercert network\u2014browse records, evaluations, data, and activity across the ecosystem.",
    cta: "hyperscan.dev",
    href: "https://hyperscan.dev",
    image: "/img/screenshots/hyperscan_screenshot.png",
  },
  {
    title: "Certified",
    description:
      "Your portable impact profile\u2014aggregating actions, evaluations, and credentials across applications.",
    cta: "certified.app",
    href: "https://certified.app",
    image: "/img/screenshots/certified_screenshot.png",
  },
];

export const tools: ToolCard[] = [
  {
    title: "Scaffold App",
    description:
      "Reference app for building on hypercerts\u2014start quickly with authentication, creation, and browsing.",
    cta: "Get started",
    href: "https://github.com/hypercerts-org/hypercerts-scaffold-atproto",
    image: "/img/screenshots/scaffold_screenshot.png",
  },
  {
    title: "Hypercerts CLI",
    description:
      "Create and manage hypercerts programmatically\u2014automate workflows and integrate with your tools.",
    cta: "View on GitHub",
    href: "https://github.com/GainForest/hypercerts-cli",
    image: "/img/screenshots/cli_screenshot.png",
    imagePosition: "object-left",
  },
  {
    title: "Agent API",
    description:
      "Let AI agents query records, submit evaluations, and coordinate funding across the hypercerts network.",
    cta: "hyperscan.dev/agents",
    href: "https://www.hyperscan.dev/agents/page",
    image: "/img/screenshots/agent_api_screenshot.png",
    imagePosition: "object-left",
  },
  {
    title: "Hyperindex",
    description:
      "Query hypercert data across the network\u2014power your application with real-time, structured, and composable data.",
    cta: "API reference",
    href: "https://docs.hypercerts.org/tools/hyperindex",
    image: "/img/screenshots/hyperindex_screenshot.png",
    imagePosition: "object-left",
  },
];
