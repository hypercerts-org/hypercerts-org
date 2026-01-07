// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";

export default async function createConfigAsync() {
    // Use a dynamic import instead of require('esm-lib')
    const mdx_mermaid = await import("mdx-mermaid");

    return {
        title: "Hypercerts",
        tagline: "Fund and Reward Impact",
        favicon: "img/favicon.ico",

        // Set the production url of your site here
        url: "https://hypercerts.org",
        // Set the /<baseUrl>/ pathname under which your site is served
        // For GitHub pages deployment, it is often '/<projectName>/'
        baseUrl: "/",

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: "hypercerts-org", // Usually your GitHub org/user name.
        projectName: "hypercerts", // Usually your repo name.

        // TODO fix broken links in SDK
        onBrokenLinks: "log",
        onBrokenMarkdownLinks: "warn",

        // Even if you don't use internationalization, you can use this field to set
        // useful metadata like html lang. For example, if your site is Chinese, you
        // may want to replace "en" with "zh-Hans".
        i18n: {
            defaultLocale: "en",
            locales: ["en"],
        },

        presets: [
            [
                "classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: "./sidebars.js",
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        remarkPlugins: [mdx_mermaid],
                        include: ["**/*.md", "**/*.mdx"],
                        editUrl: "https://github.com/hypercerts-org/hypercerts",
                    },
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl: "https://github.com/hypercerts-org/hypercerts",
                    },
                    theme: {
                        customCss: "./src/css/custom.css",
                    },
                }),
            ],
        ],
        markdown: {
            mermaid: true,
            format: "detect",
        },

        themes: ["@docusaurus/theme-mermaid"],

        themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                // Replace with your project's social card
                image: "img/hypercerts_opengraph.jpg",
                colorMode: {
                    defaultMode: "light",
                    disableSwitch: true,
                    respectPrefersColorScheme: false,
                },
                navbar: {
                    title: "",
                    logo: {
                        alt: "hypercerts logo",
                        src: "img/hypercerts_logo_horizontal.svg",
                    },
                    items: [
                        {
                            to: "https://hypercerts.leaflet.pub/",
                            label: "Blog",
                            position: "left",
                            target: "_blank",
                            rel: "noopener noreferrer",
                        },
                        {
                            to: "/docs/what-are-hypercerts",
                            label: "Docs",
                            position: "left",
                        },
                        {
                            to: "/contact",
                            label: "Contact",
                            position: "left",
                        },
                        {
                            href: "https://app.hypercerts.org/explore?filter=evaluated",
                            position: "right",
                            label: "Go to app",
                            className: "menuButton",
                        },
                    ],
                },
                footer: {
                    style: "light",
                    links: [],
                    copyright: `
                    <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; margin-top: 3rem">
                        <a href="https://twitter.com/hypercerts" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
                            <img src="/img/social-icons/x.svg" alt="Twitter" width="30px" height="30px" style="margin: 0 10px; border-radius: 6px;" />
                        </a>
                        <a href="https://t.me/+FODiLtCV2TgwNzRi" target="_blank" rel="noopener noreferrer" title="Join our Support Channel on Telegram">
                            <img src="/img/social-icons/support.svg" alt="Support Channel on Telegram" width="30px" height="30px" style="margin: 0 10px; border-radius: 6px;" />
                        </a>
                        <a href="https://hypercerts.org" rel="noopener noreferrer" title="Visit the Hypercerts website">
                            <img src="/img/hypercerts_logo_b_transparent.png" alt="Hypercerts logo" width="30px" height="30px" style="margin: 0 10px; border-radius: 6px;" />
                        </a>
                        <a href="https://github.com/hypercerts-org" target="_blank" rel="noopener noreferrer" title="Check out our GitHub">
                            <img src="/img/social-icons/github.svg" alt="GitHub" width="30px" height="30px" style="margin: 0 10px; border-radius: 6px;" />
                        </a>
                        <a href="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank" rel="noopener noreferrer" title="Join our Telegram channel">
                            <img src="/img/social-icons/telegram.svg" alt="Telegram" width="30px" height="30px" style="margin: 0 10px; border-radius: 6px;" />
                        </a>
                    </div>
        <a href="/privacy">Privacy policy</a> |
        <a href="/terms">Terms of use</a> <br>
          Copyright © ${new Date().getFullYear()} Hypercerts Foundation
          `,
                },
                prism: {
                    theme: prismThemes.github,
                    darkTheme: prismThemes.dracula,
                },
            }),
        plugins: [
            [
                // Generate hypercerts-sdk docs
                "docusaurus-plugin-typedoc",
                {
                    id: "hypercerts-sdk",
                    entryPoints: ["./repos/hypercerts-sdk"],
                    entryPointStrategy: "packages",
                    out: "./docs/developer/api/hypercerts-sdk",
                    skipErrorChecking: true,
                },
            ],
            [
                // Generate marketplace-sdk docs
                "docusaurus-plugin-typedoc",
                {
                    id: "marketplace-sdk",
                    tsconfig: "./repos/marketplace-sdk/tsconfig.build.json",
                    entryPoints: [
                        "./repos/marketplace-sdk/src/HypercertExchangeClient.ts",
                        "./repos/marketplace-sdk/src/types.ts",
                    ],
                    out: "./docs/developer/api/marketplace-sdk",
                    sortEntryPoints: false,
                    readme: "none",
                    skipErrorChecking: true,
                },
            ],
            [
                '@docusaurus/plugin-client-redirects',
                {
                    redirects: [
                        {
                            to: '/docs/what-are-hypercerts',
                            from: '/docs',
                        },
                    ],
                },
            ],
        ],
    };
}
