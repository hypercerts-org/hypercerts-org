/** The Foundation team, collaborators, and public links shown on /about.
 * Links and photos appear only once they are confirmed, so the page never
 * shows a guess. */

export interface Person {
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
  bluesky?: string;
  photo?: string;
}

/* Alphabetical by first name. */
export const team: Person[] = [
  {
    name: "Evelyn Osman",
    role: "Engineering",
    linkedin: "https://www.linkedin.com/in/evelyn-osman/",
    github: "https://github.com/Ashex",
    bluesky: "https://bsky.app/profile/kandake.africa",
    photo: "/img/team/evelyn-osman.png",
  },
  {
    name: "Holke Brammer",
    role: "Founder & director",
    linkedin: "https://www.linkedin.com/in/holke",
    github: "https://github.com/holkexyz",
    bluesky: "https://bsky.app/profile/holke.xyz",
    photo: "/img/team/holke-brammer.png",
  },
  {
    name: "Karma Yoezer",
    role: "Engineering",
    linkedin: "https://www.linkedin.com/in/kzoeps/",
    github: "https://github.com/Kzoeps",
    bluesky: "https://bsky.app/profile/kzoeps.com",
    photo: "/img/team/karma-yoezer.png",
  },
  {
    name: "Kristofer Lund",
    role: "Product",
    linkedin: "https://www.linkedin.com/in/kristoferlund/",
    github: "https://github.com/kristoferlund",
    bluesky: "https://bsky.app/profile/kristofer.certified.one",
    photo: "/img/team/kristofer-lund.jpg",
  },
];

export interface Collaborator {
  name: string;
  href: string;
  /* What they do, kept close to the wording on their own website. */
  description: string;
  logo: string;
  logoInvert?: boolean;
  /* Rendered logo height in px (default 28). Logos drawn without padding
     need less to look the same size as the others. */
  logoHeight?: number;
  people: Person[];
}

/* Organizations building on the stack in production, with some of the people
   who represent them. */
export const collaborators: Collaborator[] = [
  {
    name: "Ma Earth",
    href: "https://www.maearth.com/",
    description:
      "Ma Earth runs funding rounds for grassroots nature projects around the world.",
    logo: "/img/maearth_logo.png",
    logoInvert: true,
    people: [
      {
        name: "Matthew Monahan",
        linkedin: "https://www.linkedin.com/in/matthewmonahan/",
        bluesky: "https://bsky.app/profile/matthewmonahan.com",
        photo: "/img/collaborators/matthew-monahan.png",
      },
      {
        name: "Ken Beckers",
        linkedin: "https://www.linkedin.com/in/kenbeckers/",
        github: "https://github.com/bitbeckers",
        bluesky: "https://bsky.app/profile/bitbeckers.bsky.social",
        photo: "/img/collaborators/ken-beckers.jpg",
      },
    ],
  },
  {
    name: "GainForest",
    href: "https://gainforest.earth/",
    description:
      "GainForest builds open tools for community-led restoration around the world.",
    logo: "/img/gainforest_earth_logo.png",
    people: [
      {
        name: "Sharfina Adamantine",
        linkedin: "https://www.linkedin.com/in/sharfina-adamantine/",
        github: "https://github.com/s-adamantine",
        bluesky: "https://bsky.app/profile/sharfyae.bsky.social",
        photo: "/img/collaborators/sharfina-adamantine.png",
      },
      {
        name: "David Dao",
        linkedin: "https://www.linkedin.com/in/dwddao/",
        github: "https://github.com/daviddao",
        bluesky: "https://bsky.app/profile/daviddao.org",
        photo: "/img/collaborators/david-dao.png",
      },
    ],
  },
  {
    name: "Silvi",
    href: "https://silvi.earth/",
    description:
      "Silvi helps communities plant the right trees in the right place at the right time.",
    logo: "/img/silvi_logo.png",
    logoHeight: 20,
    people: [
      {
        name: "Djimo Serodio",
        linkedin: "https://www.linkedin.com/in/djimoserodio/",
        github: "https://github.com/DjimoSerodio",
        bluesky: "https://bsky.app/profile/djimoserodio.bsky.social",
        photo: "/img/collaborators/djimo-serodio.png",
      },
      {
        name: "Sev Nightingale",
        linkedin: "https://www.linkedin.com/in/sev-nightingale/",
        github: "https://github.com/sevnightingale",
        photo: "/img/collaborators/sev-nightingale.png",
      },
    ],
  },
];

export const foundationLinks: {
  github: string;
  bluesky: string;
  email: string;
  linkedin?: string;
  roadmap?: string;
  communityCall?: string;
} = {
  github: "https://github.com/hypercerts-org",
  bluesky: "https://bsky.app/profile/hypercerts.org",
  email: "team@hypercerts.org",
  linkedin: "https://www.linkedin.com/company/hypercerts",
  roadmap: "https://docs.hypercerts.org/roadmap",
};
