import MediaItem from "./MediaItem";

const featuredItems = [
  {
    image: "/img/holke_maearth_podcast_2.jpg",
    tags: [
      "Interview 1h 12min",
      "Sep 2025 | Ma Earth: The Regeneration Will Be Funded",
    ],
    title: "The Moment is Ripe for Hypercerts",
    titleLink: "https://youtu.be/R70Jj5jBtgw?si=P9pQQzorWLE5amlN",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
  {
    image: "/img/davidad_ftc_talk.png",
    tags: ["Talk 18min", "Jun 2022 | Funding the Commons NYC"],
    title: "On-chain Primitives for Impact Markets",
    titleLink: "https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD",
    authors: [{ name: "@davidad", link: "https://twitter.com/davidad" }],
  },
  {
    image: "/img/holke_ethcc8_talk2.png",
    tags: ["Talk & Demo 12min", "Jul 2025 | EthCC[8] Cannes"],
    title: "Decentralized Impact Funding Networks at Scale",
    titleLink: "https://www.youtube.com/live/bQ2Z0pwZOh8?si=tHMpQuY8C2pUfXmk",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
];

const textItems = [
  {
    tags: ["Talk 18min", "Nov 2025 | Schelling Point Buenos Aires"],
    title:
      "Hypercert on AT Protocol: Rewriting How We Recognize — and Reward — Value Creation",
    titleLink: "https://youtu.be/-Rw1kLyo2wQ?si=xza1MJN2hzY4m16S",
    authors: [
      { name: "@sharfyae", link: "https://twitter.com/sharfyae" },
      { name: "@holkexyz", link: "https://twitter.com/holkexyz" },
    ],
  },
  {
    tags: ["Talk 14min", "Nov 2025 | Funding the Commons Buenos Aires"],
    title: "Rewiring the Commons: Hypercerts on AT Protocol",
    titleLink: "https://youtu.be/GCEuGMeZiUs?si=TXdqmZ6hU6im0izi",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
  {
    tags: ["Blogpost", "Nov 2025"],
    title:
      "Why We Are Building Hypercerts: Recognizing and Rewarding Value Creators",
    titleLink: "https://hypercerts.leaflet.pub/3m6mnb2riz22o",
    authors: [
      { name: "@hypercerts", link: "https://twitter.com/hypercerts" },
      { name: "@holkexyz", link: "https://twitter.com/holkexyz" },
    ],
  },
  {
    tags: ["Workshop 1h20min", "Nov 2024 | Devcon SEA Bangkok"],
    title: "Kickstarting impact funding with hypercerts",
    titleLink: "https://youtu.be/Ozf8X4UeDY0?si=YTXwtqb8GTisBM2j",
    authors: [
      { name: "@bitbeckers", link: "https://twitter.com/bitbeckers" },
      { name: "@holkexyz", link: "https://twitter.com/holkexyz" },
    ],
  },
  {
    tags: ["Demo 10min", "May 2024 | TechSoupVideo"],
    title: "A new protocol for funding and rewarding positive impact",
    titleLink: "https://youtu.be/8osT1iL7Vcc?si=l05fDArAQdJAbpLe",
    authors: [{ name: "@bitbeckers", link: "https://twitter.com/bitbeckers" }],
  },
  {
    tags: [
      "Interview 55min",
      "Sep 2023 | Ma Earth: The Regeneration Will Be Funded",
    ],
    title: "Retrospective Funding Using Hypercerts",
    titleLink: "https://youtu.be/q3osrfEW4WQ?si=1BCaV1QQWoCF7Flb",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
  {
    tags: ["Talk 15min", "Aug 2023 | Funding the Commons Paris"],
    title: "How to Build Modern Impact Funding Systems",
    titleLink: "https://youtu.be/IKWZFB9KRu8?si=mW8ujIj3MeQoFqUu",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
  {
    tags: ["Talk 13min", "May 2023 | Metascience Conference"],
    title: "Accelerating Academic Research with Impact Certificates",
    titleLink: "https://www.youtube.com/watch?v=_mLdx48B7zE",
    authors: [
      { name: "@RaymondCheng00", link: "https://twitter.com/RaymondCheng00" },
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
      { name: "@hypercerts", link: "https://twitter.com/hypercerts" },
    ],
  },
  {
    tags: ["Announcement", "Feb 2023"],
    title: "Introducing the Hypercerts Foundation",
    titleLink:
      "https://hypercerts.notion.site/Introducing-the-Hypercerts-Foundation-d956203fe0fc4792980da138015e770a",
    authors: [{ name: "@hypercerts", link: "https://twitter.com/hypercerts" }],
  },
  {
    tags: ["Talk 31min", "Oct 2022 | Devcon Bogota"],
    title: "Hypercerts for Regenerative Cryptoeconomics",
    titleLink: "https://youtu.be/YpIQoq_bfu8",
    authors: [{ name: "@emiyazono", link: "https://twitter.com/emiyazono" }],
  },
  {
    tags: ["Blogpost", "Aug 2022 | Protocol Labs"],
    title: "A New Primitive for Public Goods Funding",
    titleLink: "https://protocol.ai/blog/hypercert-new-primitive/",
    authors: [{ name: "@holkexyz", link: "https://twitter.com/holkexyz" }],
  },
  {
    tags: ["Podcast 55min", "Jun 2022 | Green Pill"],
    title: "Impact Certificates",
    titleLink: "https://youtu.be/kyo5SxtSJ9U?si=-eDvLbalnWFyoJrW",
    authors: [
      { name: "@emiyazono", link: "https://twitter.com/emiyazono" },
      { name: "@owocki", link: "https://twitter.com/owocki" },
    ],
  },
];

export default function MediaSection() {
  return (
    <section className="w-full bg-surface-cream py-24 md:py-32" aria-labelledby="media-section-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
          Get up to date
        </p>
        <h2 id="media-section-heading" className="font-display text-display-3 md:text-display-2 text-brand-black mb-12">
          Articles, Podcasts, and Talks
        </h2>

        {/* Featured items — 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item) => (
            <MediaItem key={item.titleLink} {...item} variant="featured" />
          ))}
        </div>

        {/* Remaining text-only items — 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {textItems.map((item) => (
            <MediaItem key={item.titleLink} {...item} variant="list" />
          ))}
        </div>
      </div>
    </section>
  );
}
