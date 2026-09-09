export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavColumn {
  header: string;
  links: NavLink[];
}

export const headerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Docs ↗", href: "https://docs.hypercerts.org", external: true },
];

export const footerNavColumns: NavColumn[] = [
  {
    header: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Docs", href: "https://docs.hypercerts.org", external: true },
      {
        label: "GitHub",
        href: "https://github.com/hypercerts-org",
        external: true,
      },
    ],
  },
  {
    header: "Social",
    links: [
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/hypercerts.org",
        external: true,
      },
      {
        label: "Twitter",
        href: "https://twitter.com/hypercerts",
        external: true,
      },
      {
        label: "Telegram",
        href: "https://t.me/+o4wPsJ7yEZYzNGFk",
        external: true,
      },
    ],
  },
  {
    header: "Connect",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      {
        label: "Support",
        href: "https://t.me/+o4wPsJ7yEZYzNGFk",
        external: true,
      },
    ],
  },
];
