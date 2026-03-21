export interface TabContent {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
}

export interface TabConfig {
  label: string;
  content: TabContent;
}

export const tabs: TabConfig[] = [
  {
    label: "Projects",
    content: {
      title: "Sell the impact you created",
      description:
        "Create hypercerts that represents the impact your project had. Let credible evaluators confirm the impact. Sell the right to claim this impact to funders and become financially sustainable by continuously selling your impact.",
      primaryLabel: "Sell your impact now",
      primaryHref: "https://form.feathery.io/to/kV8E0l",
      secondaryLabel: "Learn more",
      secondaryHref: "https://hypercerts.org/docs/what-are-hypercerts",
      image: "/img/hypercerts_for_projects.png",
      imageAlt: "Hypercerts for Projects",
    },
  },
  {
    label: "Funders",
    content: {
      title: "Buy the impact you care about risk-free",
      description:
        "Find projects' hypercerts and access their impact evaluations. Reward them for their past impact. Receive the right to claim the impact and build up your impact portfolio to prove your support of collective goods.",
      primaryLabel: "Explore hypercerts",
      primaryHref: "https://app.hypercerts.org/explore?filter=evaluated",
      secondaryLabel: "Contact us",
      secondaryHref: "https://form.feathery.io/to/kV8E0l",
      image: "/img/hypercerts_for_funders.png",
      imageAlt: "Hypercerts for Funders",
    },
  },
  {
    label: "Evaluators",
    content: {
      title: "Get paid for high-quality impact evaluations",
      description:
        "Evaluate the work of projects with data and your expertise. Improve your evaluation methodology over time. Help funders allocate their funds and get rewarded for evaluations that significantly impacted funders' decisions.",
      primaryLabel: "Become an official evaluator",
      primaryHref: "https://form.feathery.io/to/kV8E0l",
      image: "/img/hypercerts_for_evaluators.png",
      imageAlt: "Hypercerts for Evaluators",
    },
  },
  {
    label: "Funding Platforms",
    content: {
      title: "Become part of the funding network",
      description:
        "Integrate hypercerts into your funding platform, no matter if you distribute grants, organize crowdfunding or run prize competitions. Access projects' previous hypercerts and their evaluations.",
      primaryLabel: "Integrate hypercerts now",
      primaryHref: "https://form.feathery.io/to/kV8E0l",
      secondaryLabel: "Learn more",
      secondaryHref: "https://hypercerts.org/docs/what-are-hypercerts",
      image: "/img/hypercerts_for_funding_platforms.png",
      imageAlt: "Hypercerts for Funding Platforms",
    },
  },
];
