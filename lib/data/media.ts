export interface MediaItemAuthor {
  name: string;
  link: string;
}

export interface MediaItem {
  image?: string;
  tags: string[];
  title: string;
  titleLink: string;
  authors: MediaItemAuthor[];
}

export const featuredItems: MediaItem[] = [
  {
    image: "/img/holke_maearth_podcast_2.jpg",
    tags: [
      "Interview 1h 12min",
      "Sep 2025 | Ma Earth: The Regeneration Will Be Funded",
    ],
    title: "The Moment is Ripe for Hypercerts",
    titleLink: "https://youtu.be/R70Jj5jBtgw?si=P9pQQzorWLE5amlN",
    authors: [
      { name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" },
      { name: "@matthewmonahan", link: "https://bsky.app/profile/matthewmonahan.bsky.social" },
    ],
  },
  {
    image: "/img/davidad_ftc_talk.png",
    tags: ["Talk 18min", "Jun 2022 | Funding the Commons NYC"],
    title: "On-chain Primitives for Impact Markets",
    titleLink: "https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD",
    authors: [{ name: "@davidad", link: "https://twitter.com/davidad" }],
  },
];

export const recentTextItems: MediaItem[] = [
  {
    tags: ["Talk 18min", "Nov 2025 | Schelling Point Buenos Aires"],
    title:
      "Hypercert on AT Protocol: Rewriting How We Recognize — and Reward — Value Creation",
    titleLink: "https://youtu.be/-Rw1kLyo2wQ?si=xza1MJN2hzY4m16S",
    authors: [
      { name: "@sharfyae", link: "https://bsky.app/profile/sharfyae.bsky.social" },
      { name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" },
    ],
  },
  {
    tags: ["Talk 14min", "Nov 2025 | Funding the Commons Buenos Aires"],
    title: "Rewiring the Commons: Hypercerts on AT Protocol",
    titleLink: "https://youtu.be/GCEuGMeZiUs?si=TXdqmZ6hU6im0izi",
    authors: [{ name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" }],
  },
  {
    tags: ["Blogpost", "Nov 2025"],
    title:
      "Why We Are Building Hypercerts: Recognizing and Rewarding Value Creators",
    titleLink: "https://hypercerts.leaflet.pub/3m6mnb2riz22o",
    authors: [
      { name: "@hypercerts.org", link: "https://bsky.app/profile/hypercerts.org" },
      { name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" },
    ],
  },
  {
    tags: ["Talk & Demo 12min", "Jul 2025 | EthCC[8] Cannes"],
    title: "Decentralized Impact Funding Networks at Scale",
    titleLink: "https://www.youtube.com/live/bQ2Z0pwZOh8?si=tHMpQuY8C2pUfXmk",
    authors: [{ name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" }],
  },
  {
    tags: ["Workshop 1h20min", "Nov 2024 | Devcon SEA Bangkok"],
    title: "Kickstarting impact funding with hypercerts",
    titleLink: "https://youtu.be/Ozf8X4UeDY0?si=YTXwtqb8GTisBM2j",
    authors: [
      { name: "@bitbeckers", link: "https://bsky.app/profile/bitbeckers.bsky.social" },
      { name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" },
    ],
  },
  {
    tags: ["Demo 10min", "May 2024 | TechSoupVideo"],
    title: "A new protocol for funding and rewarding positive impact",
    titleLink: "https://youtu.be/8osT1iL7Vcc?si=l05fDArAQdJAbpLe",
    authors: [{ name: "@bitbeckers", link: "https://bsky.app/profile/bitbeckers.bsky.social" }],
  },
];

export const olderTextItems: MediaItem[] = [
  {
    tags: [
      "Interview 55min",
      "Sep 2023 | Ma Earth: The Regeneration Will Be Funded",
    ],
    title: "Retrospective Funding Using Hypercerts",
    titleLink: "https://youtu.be/q3osrfEW4WQ?si=1BCaV1QQWoCF7Flb",
    authors: [
      { name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" },
      { name: "@matthewmonahan", link: "https://bsky.app/profile/matthewmonahan.bsky.social" },
    ],
  },
  {
    tags: ["Talk 15min", "Aug 2023 | Funding the Commons Paris"],
    title: "How to Build Modern Impact Funding Systems",
    titleLink: "https://youtu.be/IKWZFB9KRu8?si=mW8ujIj3MeQoFqUu",
    authors: [{ name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" }],
  },
  {
    tags: ["Talk 13min", "May 2023 | Metascience Conference"],
    title: "Accelerating Academic Research with Impact Certificates",
    titleLink: "https://www.youtube.com/watch?v=_mLdx48B7zE",
    authors: [
      { name: "@ryscheng", link: "https://bsky.app/profile/ryscheng.bsky.social" },
    ],
  },
  {
    tags: ["Blogpost", "Apr 2023 | Forbes"],
    title:
      "Greenpilled: Meet 5 Entrepreneurs Engineering Social Good On The Blockchain",
    titleLink:
      "https://www.forbes.com/sites/digital-assets/2023/04/25/greenpilled-meet-5-entrepreneurs-engineering-social-good-on-the-blockchain/?sh=4e26c7f2468f",
    authors: [
      { name: "@JocelynnPearl", link: "https://twitter.com/JocelynnPearl" },
    ],
  },
  {
    tags: ["Blogpost", "Apr 2023 | Mirror"],
    title:
      "Funding for Impact, Not Intention: A New Era of Creativity and Risk-Taking for Public Goods",
    titleLink:
      "https://mirror.xyz/hypercerts.eth/kpu2vewrOVCCVNFf78Y1ui0D091XS6-ZgPoEKc0rkp0",
    authors: [{ name: "@carl_cervone", link: "https://x.com/carl_cervone" }],
  },
  {
    tags: ["Blogpost", "Mar 2023 | Gitcoin"],
    title: "Hypercerts for Gitcoin Grant Rounds",
    titleLink: "https://go.gitcoin.co/blog/hypercerts-for-public-goods-funding",
    authors: [
      { name: "@gitcoin", link: "https://twitter.com/gitcoin" },
      { name: "@hypercerts.org", link: "https://bsky.app/profile/hypercerts.org" },
    ],
  },
  {
    tags: ["Announcement", "Feb 2023"],
    title: "Introducing the Hypercerts Foundation",
    titleLink:
      "https://hypercerts.notion.site/Introducing-the-Hypercerts-Foundation-d956203fe0fc4792980da138015e770a",
    authors: [{ name: "@hypercerts.org", link: "https://bsky.app/profile/hypercerts.org" }],
  },
  {
    tags: ["Talk 31min", "Oct 2022 | Devcon Bogota"],
    title: "Hypercerts for Regenerative Cryptoeconomics",
    titleLink: "https://youtu.be/YpIQoq_bfu8",
    authors: [{ name: "@miyazono", link: "https://bsky.app/profile/miyazono.bsky.social" }],
  },
  {
    tags: ["Blogpost", "Aug 2022 | Protocol Labs"],
    title: "A New Primitive for Public Goods Funding",
    titleLink: "https://protocol.ai/blog/hypercert-new-primitive/",
    authors: [{ name: "@holke.xyz", link: "https://bsky.app/profile/holke.xyz" }],
  },
  {
    tags: ["Podcast 55min", "Jun 2022 | Green Pill"],
    title: "Impact Certificates",
    titleLink: "https://youtu.be/kyo5SxtSJ9U?si=-eDvLbalnWFyoJrW",
    authors: [
      { name: "@miyazono", link: "https://bsky.app/profile/miyazono.bsky.social" },
      { name: "@owocki", link: "https://twitter.com/owocki" },
    ],
  },
];
