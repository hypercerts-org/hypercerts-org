"use client";

import { useState } from "react";
import Image from "next/image";

interface TabContent {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
}

const tabs: { label: string; content: TabContent }[] = [
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

export default function ImpactMarkets() {
  const [selectedTab, setSelectedTab] = useState(0);

  const { content } = tabs[selectedTab];

  return (
    <section className="max-w-4xl mx-auto px-4 pt-[70px]">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="font-body text-body-lg text-ui-grey-dark">
          Built to power
        </p>
        <h2 className="font-display text-display-1 max-sm:text-[80px] leading-none">
          Impact Markets
        </h2>
      </div>

      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setSelectedTab(index)}
            className={`w-[150px] h-[50px] rounded-lg font-body text-body-lg transition-transform hover:scale-110 ${
              selectedTab === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          {/* Left: text (33%) */}
          <div className="w-full md:w-1/3">
            <h3 className="font-display text-display-3 mb-4">
              {content.title}
            </h3>
            <p className="font-body text-body-lg text-ui-grey-dark mb-6">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={content.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-black text-white rounded-lg font-body text-body-lg"
              >
                {content.primaryLabel}
              </a>
              {content.secondaryLabel && content.secondaryHref && (
                <a
                  href={content.secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-3 rounded-lg font-body text-body-lg text-black"
                  style={{ backgroundColor: "#ECECEC" }}
                >
                  {content.secondaryLabel}
                </a>
              )}
            </div>
          </div>

          {/* Right: image (67%) */}
          <div className="w-full md:w-2/3">
            <Image
              src={content.image}
              alt={content.imageAlt}
              width={800}
              height={600}
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
