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
  { label: "Docs", href: "https://hypercerts.org/docs/what-are-hypercerts", external: true },
  { label: "Contact", href: "https://hypercerts.org/contact", external: true },
  { label: "Blog ↗", href: "https://hypercerts.leaflet.pub/", external: true },
];

export const footerNavColumns: NavColumn[] = [
  {
    header: "Product",
    links: [
      { label: "Go to app", href: "https://app.hypercerts.org" },
      { label: "Explore", href: "https://app.hypercerts.org/explore" },
    ],
  },
  {
    header: "Resources",
    links: [
      { label: "Docs", href: "https://hypercerts.org/docs/what-are-hypercerts" },
      { label: "Blog", href: "https://hypercerts.leaflet.pub/" },
      { label: "News", href: "https://hypercerts.org/docs/announcements" },
    ],
  },
  {
    header: "Community",
    links: [
      { label: "Twitter", href: "https://twitter.com/hypercerts" },
      { label: "Telegram", href: "https://t.me/+YF9AYb6zCv1mNDJi" },
      { label: "GitHub", href: "https://github.com/hypercerts-org" },
    ],
  },
];
