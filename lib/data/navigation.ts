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
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Docs \u2197", href: "https://docs.hypercerts.org", external: true },
];

export const footerNavColumns: NavColumn[] = [
  {
    header: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Docs", href: "https://docs.hypercerts.org" },
      { label: "GitHub", href: "https://github.com/hypercerts-org" },
    ],
  },
  {
    header: "Social",
    links: [
      { label: "Bluesky", href: "https://bsky.app/profile/hypercerts.org" },
      { label: "Twitter", href: "https://twitter.com/hypercerts" },
      { label: "Telegram", href: "https://t.me/+o4wPsJ7yEZYzNGFk" },
    ],
  },
  {
    header: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "https://t.me/+FODiLtCV2TgwNzRi" },
    ],
  },
];
