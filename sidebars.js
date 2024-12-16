/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    mySidebar: [
        {
            type: "doc",
            id: "announcements",
        },
        {
            type: "doc",
            id: "what-are-hypercerts",
        },
        /**
         {
         type: "category",
         label: "Introduction",
         collapsed: true,
         items: [
         {
         type: "doc",
         id: "intro/what-are-hypercerts",
         },
         {
         type: "doc",
         id: "intro/impact-markets",
         },
         {
         type: "doc",
         id: "intro/hypercerts-ecosystem",
         },
         ],
         },
         */
        {
            type: "category",
            label: "Using the Hypercerts App",
            collapsed: false,
            items: [
                {
                    type: "doc",
                    id: "guide/start",
                },
                {
                    type: "doc",
                    id: "guide/mint",
                },
                {
                    type: "doc",
                    id: "guide/sell",
                },
                {
                    type: "doc",
                    id: "guide/buy",
                },
                {
                    type: "doc",
                    id: "guide/send-blueprint",
                },
                {
                    type: "doc",
                    id: "guide/create-collection",
                },
                {
                    type: "doc",
                    id: "guide/settings",
                },
            ],
        },
        {
            type: "category",
            label: "For Developers",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "developer/token-standard",
                },
                {
                    type: "doc",
                    id: "developer/metadata",
                },
                {
                    type: "doc",
                    id: "developer/quickstart-javascript",
                },
                {
                    type: "doc",
                    id: "developer/quickstart-solidity",
                },
                {
                    type: "doc",
                    id: "developer/allowlists",
                },
                {
                    type: "doc",
                    id: "developer/attestations",
                },
                {
                    type: "doc",
                    id: "developer/client-setup",
                },
                {
                    type: "doc",
                    id: "developer/deployments",
                },
                {
                    type: "doc",
                    id: "developer/querying",
                },
                {
                    type: "doc",
                    id: "devops/index",
                },
                {
                    type: "category",
                    label: "Marketplace",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "developer/marketplace/index",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/create-maker-ask",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/create-fractional-sale-maker-ask",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/create-direct-fractions-sale-maker-ask",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/execute-trade",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/cancel-orders",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/nonce-system",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/order-validity",
                        },
                        {
                            type: "doc",
                            id: "developer/marketplace/faq",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Infrastructure",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "developer/architecture",
                        },
                        {
                            type: "doc",
                            id: "developer/api",
                        },
                        {
                            type: "doc",
                            id: "developer/data",
                        },
                        {
                            type: "doc",
                            id: "developer/indexer",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Contract interactions",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "developer/burning",
                        },
                        {
                            type: "doc",
                            id: "developer/minting",
                        },
                        {
                            type: "doc",
                            id: "developer/split-merge",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "API Reference",
                    collapsed: true,
                    items: [
                        {
                            type: "category",
                            label: "Contracts",
                            collapsed: true,
                            items: [
                                {
                                    type: "autogenerated",
                                    dirName: "developer/api/contracts",
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Marketplace SDK",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "developer/api/marketplace-sdk/index",
                            },
                            items: require('./docs/developer/api/marketplace-sdk/typedoc-sidebar.cjs'),
                        },
                        {
                            type: "category",
                            label: "Hypercerts SDK",
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "developer/api/hypercerts-sdk/index",
                            },
                            items: require('./docs/developer/api/hypercerts-sdk/typedoc-sidebar.cjs'),
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "About",
            collapsed: true,
            items: [
                {
                    type: "doc",
                    id: "about",
                },     
                {
                    type: "category",
                    label: "Vision & Whitepaper",
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "whitepaper/whitepaper-intro",
                        },
                        {
                            type: "doc",
                            id: "whitepaper/ifs",
                        },
                        {
                            type: "doc",
                            id: "whitepaper/hypercerts-intro",
                        },
                        {
                            type: "doc",
                            id: "whitepaper/impact-space",
                        },
                        {
                            type: "doc",
                            id: "whitepaper/retrospective-funding",
                        },
                    ],
                },
            ]
        }
    ],
};

export default sidebars;
