// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

export default async function createConfigAsync() {
    // Use a dynamic import instead of require('esm-lib')
    const mdx_mermaid = await import("mdx-mermaid");

    return {
        title: 'Hypercerts',
        tagline: 'Fund and Reward Impact',
        favicon: 'img/favicon.ico',

        // Set the production url of your site here
        url: 'https://hypercerts.org',
        // Set the /<baseUrl>/ pathname under which your site is served
        // For GitHub pages deployment, it is often '/<projectName>/'
        baseUrl: '/',

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: 'hypercerts-org', // Usually your GitHub org/user name.
        projectName: 'hypercerts', // Usually your repo name.

        // TODO fix broken links in SDK
        onBrokenLinks: 'log',
        onBrokenMarkdownLinks: 'warn',

        // Even if you don't use internationalization, you can use this field to set
        // useful metadata like html lang. For example, if your site is Chinese, you
        // may want to replace "en" with "zh-Hans".
        i18n: {
            defaultLocale: 'en',
            locales: ['en'],
        },

        presets: [
            [
                'classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: './sidebars.js',
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        remarkPlugins: [mdx_mermaid],
                        include: ['**/*.md', '**/*.mdx'],
                        editUrl:
                            'https://github.com/hypercerts-org/hypercerts',
                    },
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl:
                            'https://github.com/hypercerts-org/hypercerts',
                    },
                    theme: {
                        customCss: './src/css/custom.css',
                    },
                }),
            ],
        ],
        markdown: {
            mermaid: true,
            format: "detect",
        },

        themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                // Replace with your project's social card
                image: 'img/docusaurus-social-card.jpg',
                colorMode: {
                    defaultMode: 'light',
                    disableSwitch: true,
                    respectPrefersColorScheme: false,
                },
                navbar: {
                    title: '',
                    logo: {
                        alt: 'hypercerts logo',
                        src: 'img/hypercerts_logo_horizontal.svg',
                    },
                    items: [
                        {
                            to: '/docs/what-are-hypercerts',
                            label: 'Docs',
                            position: 'left',
                        },
                        {
                            to: '/contact',
                            label: 'Contact',
                            position: 'left',
                        },
                        {
                            href: 'https://hypercerts.org/app/create#name=The%20name%20of%20your%20hypercert&logoUrl=https%3A%2F%2Fi.imgur.com%2FsDQhp3Y.png&bannerUrl=https%3A%2F%2Fi.imgur.com%2FwsM3fWd.jpeg&impactScopes%5B0%5D=all&impactTimeEnd=indefinite&workScopes=your%20project&workTimeStart=2023-01-01&rights%5B0%5D=Public%20Display&backgroundColor=blue&backgroundVectorArt=contours',
                            position: 'right',
                            label: 'Go to app',
                            className: 'menuButton',
                        },
                    ],
                },
                footer: {
                    style: 'light',
                    logo: {
                        alt: 'Hypercerts logo',
                        src: 'img/hypercerts_logo_b_transparent.png',
                        href: 'https://hypercerts.org',
                        width: '50px',
                        height: '50px',
                    },
                    links: [],
                    copyright: `
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
                'docusaurus-plugin-typedoc',

                // Options
                {
                    id: 'hypercerts-sdk',
                    entryPoints: ['./repos/hypercerts-sdk'],
                    entryPointStrategy: "packages",
                    out: './docs/developer/api/hypercerts-sdk',
                },
            ],
        ],
    }
}
