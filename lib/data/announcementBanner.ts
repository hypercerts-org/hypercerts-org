/** Leaf module — no runtime deps; safe for any bundle. */

export type ISODate = `${number}-${number}-${number}`;

export type AnnouncementBannerConfig = {
  /** Bump this string to re-show the banner to users who previously dismissed. */
  id: string;
  date: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaText: string;
  enabled: boolean;
  expiresAt?: ISODate;
};

export const announcementBanner: AnnouncementBannerConfig = {
  id: "community-call-2026-05-05",
  date: "May 5, 2026",
  title: "Community Call",
  description: "Updates, demos & open Q&A.",
  ctaHref: "https://luma.com/fcyqpplm",
  ctaText: "RSVP on Luma",
  enabled: true,
  expiresAt: "2026-05-06",
};
