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
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Built to power
        </p>
        <h2 className="font-display text-[80px] md:text-[100px] leading-none text-brand-black mb-12">
          Impact Markets
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setSelectedTab(index)}
              className={`px-6 py-3 rounded-full font-body text-body-sm font-medium transition ${
                selectedTab === index
                  ? "bg-brand-black text-brand-white"
                  : "bg-brand-white text-brand-black border border-ui-separator hover:border-brand-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="bg-brand-white rounded-[20px] p-8 md:p-12 shadow-sm">
          <div key={selectedTab} className="animate-fade-in">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Left: text */}
            <div>
              <h3 className="font-display text-display-3 text-brand-black mb-4">
                {content.title}
              </h3>
              <p className="font-body text-body-lg text-ui-grey-dark mb-8">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={content.primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="inline-block px-6 py-3 bg-brand-black text-brand-white rounded-brand font-body text-body-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {content.primaryLabel}
                </a>
                {content.secondaryLabel && content.secondaryHref && (
                  <a
                    href={content.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="inline-block px-6 py-3 bg-ui-grey-tag text-brand-black rounded-brand font-body text-body-sm font-medium hover:bg-ui-grey-light transition-colors"
                  >
                    {content.secondaryLabel}
                  </a>
                )}
              </div>
            </div>

            {/* Right: image */}
            <div className="rounded-brand overflow-hidden order-first md:order-last">
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
