export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavColumn {
  header: string;
  links: NavLink[];
}

const BLOG_HOST = "blog.hypercerts.org";

function isBlogHostClient(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname === BLOG_HOST;
}

export function getHeaderNavLinks(): NavLink[] {
  const blogHref = isBlogHostClient() ? "/" : "/blog";
  return [
    { label: "Blog", href: blogHref },
    { label: "Contact", href: isBlogHostClient() ? "https://hypercerts.org/contact" : "/contact" },
    { label: "Docs \u2197", href: "https://docs.hypercerts.org", external: true },
  ];
}

export const footerNavColumns: NavColumn[] = [
  {
    header: "Resources",
    links: [
      { label: "Blog", href: "https://blog.hypercerts.org" },
      { label: "Docs", href: "https://docs.hypercerts.org" },
      { label: "GitHub", href: "https://github.com/hypercerts-org" },
    ],
  },
  {
    header: "Social",
    links: [
      { label: "Bluesky", href: "https://bsky.app/profile/hypercerts.org" },
      { label: "Twitter", href: "https://twitter.com/hypercerts" },
      { label: "Telegram", href: "https://t.me/+YF9AYb6zCv1mNDJi" },
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
