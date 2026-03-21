export interface Partner {
  href: string;
  img: string;
  alt: string;
  invert?: boolean;
}

export const partners: Partner[] = [
  { href: "https://www.maearth.com/", img: "/img/maearth_logo.png", alt: "Ma Earth", invert: true },
  { href: "https://gainforest.earth/", img: "/img/gainforest_earth_logo.png", alt: "Gainforest" },
  { href: "https://www.protocol.ai", img: "/img/protocollabs_logo.png", alt: "Protocol Labs" },
  { href: "https://www.optimism.io/", img: "/img/optimism_logo.png", alt: "Optimism" },
  { href: "https://octant.build/", img: "/img/octant_logo.png", alt: "Octant" },
  { href: "https://www.gitcoin.co/", img: "/img/gitcoin_logo.png", alt: "Gitcoin" },
  { href: "https://fundingthecommons.io/", img: "/img/fundingthecommons_logo.png", alt: "Funding the Commons" },
  { href: "https://www.opensource.observer/", img: "/img/opensourceobserver_logo.png", alt: "Open Source Observer" },
  { href: "https://www.raidguild.org/", img: "/img/raidguild_logo.webp", alt: "RaidGuild" },
  { href: "https://www.zuzalu.city/", img: "/img/zuzalu_logo.png", alt: "Zuzalu" },
  { href: "https://www.edgecity.live/", img: "/img/edgecity_logo.png", alt: "EdgeCity" },
  { href: "https://fabdaotw.github.io/", img: "/img/greensofa_logo.png", alt: "GreenSofa" },
];
