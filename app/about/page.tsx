import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import HorizontalScroller from "@/components/HorizontalScroller";
import { bodyCopy, SectionHeading } from "@/components/LandingSection";
import {
  collaborators,
  foundationLinks,
  team,
  type Person,
} from "@/lib/data/team";

const description =
  "The Hypercerts Foundation is an independent, grant-funded nonprofit building open infrastructure for funding valuable work.";

export const metadata: Metadata = {
  title: "About the Hypercerts Foundation",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Hypercerts Foundation",
    description,
    url: "/about",
  },
};

const siteUrl = "https://hypercerts.org";

/* A person for structured data: name, role, photo, and profile links. */
function personData(person: Person) {
  return {
    "@type": "Person",
    name: person.name,
    ...(person.role && { jobTitle: person.role }),
    ...(person.photo && { image: `${siteUrl}${person.photo}` }),
    sameAs: [person.github, person.bluesky, person.linkedin].filter(Boolean),
  };
}

/* The page, the Foundation, its team, and its collaborators for search
   engines and AI agents, with each person's profiles as checkable links. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: "About the Hypercerts Foundation",
  description,
  isPartOf: { "@id": `${siteUrl}/#website` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Hypercerts Foundation",
    url: siteUrl,
    email: foundationLinks.email,
    sameAs: [
      foundationLinks.github,
      foundationLinks.bluesky,
      foundationLinks.linkedin,
    ].filter(Boolean),
    member: team.map(personData),
  },
  mentions: collaborators.map((collaborator) => ({
    "@type": "Organization",
    name: collaborator.name,
    url: collaborator.href,
    description: collaborator.description,
    member: collaborator.people.map(personData),
  })),
};

const work = [
  {
    title: "Steward the protocol",
    copy: "We maintain the vocabulary and usage guidelines for the shared records.",
  },
  {
    title: "Run the infrastructure",
    copy: "Indexing, identity, and the read APIs that make the records usable.",
  },
  {
    title: "Make it practical",
    copy: "SDKs, reference implementations, and direct help for teams putting real records on the network.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

/* Profile icons from Bootstrap Icons 1.13.1 (MIT), drawn on a 16 × 16 grid. */
const profileIcons = {
  LinkedIn:
    "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
  GitHub:
    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
  Bluesky:
    "M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948",
};

/* Icon links to a person's GitHub, Bluesky, and LinkedIn; smaller for
   collaborators. Padding keeps each target easy to hit. */
function ProfileLinks({
  person,
  compact = false,
  className = "",
}: {
  person: Person;
  compact?: boolean;
  className?: string;
}) {
  const links = (
    [
      ["GitHub", person.github],
      ["Bluesky", person.bluesky],
      ["LinkedIn", person.linkedin],
    ] as const
  ).filter((link): link is [keyof typeof profileIcons, string] => !!link[1]);
  if (links.length === 0) return null;
  return (
    <p className={`-ml-1 flex items-center ${compact ? "gap-1" : "gap-2"} ${className}`}>
      {links.map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on ${label}`}
          title={label}
          className="p-1 text-ui-grey-muted transition hover:text-brand-black"
        >
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className={compact ? "h-3.5 w-3.5" : "h-[18px] w-[18px]"}
          >
            <path d={profileIcons[label]} />
          </svg>
        </a>
      ))}
    </p>
  );
}

/* A small round portrait, or initials until a photo is confirmed. */
function Avatar({ person }: { person: Person }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt=""
        width={80}
        height={80}
        className="h-10 w-10 shrink-0 rounded-full object-cover grayscale"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-cream font-display text-[16px] text-ui-grey-muted"
    >
      {initials(person.name)}
    </span>
  );
}

function OptionalLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-black underline decoration-ui-separator underline-offset-4 transition hover:decoration-brand-black"
    >
      {children}
    </a>
  );
}

export default function About() {
  const findUs = [
    { label: "GitHub", href: foundationLinks.github },
    { label: "Bluesky", href: foundationLinks.bluesky },
    { label: "LinkedIn", href: foundationLinks.linkedin },
  ].filter((link): link is { label: string; href: string } => !!link.href);

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        className="bg-white py-24 md:py-32"
        aria-labelledby="about-heading"
      >
        <div className="landing-container">
          <p className="mb-6 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark">
            What we do
          </p>
          <h1
            id="about-heading"
            className="max-w-4xl font-display text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] md:text-display-2"
          >
            About{" "}
            <em className="text-brand-accent">the Hypercerts Foundation</em>
          </h1>
          <div className={`mt-8 max-w-2xl space-y-6 ${bodyCopy}`}>
            <p>
              We are an independent, grant-funded nonprofit. We build and
              maintain the open infrastructure for funding valuable work.
            </p>
            <p>
              We do not fund projects, we do not define what counts as impact,
              and we do not decide who is credible. Those judgments belong to
              the communities, evaluators, and funders making them.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {work.map((item) => (
              <div key={item.title} className="border-t border-brand-black pt-6">
                <h3 className="mb-4 font-display text-[28px] leading-tight">
                  {item.title}
                </h3>
                <p className={bodyCopy}>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface-cream py-24 md:py-32"
        aria-labelledby="origins-heading"
      >
        <div className="landing-container grid items-center gap-12 md:grid-cols-[1.5fr_1fr] md:gap-24">
          <div>
            <SectionHeading
              id="origins-heading"
              eyebrow="Where we are coming from"
              headingClassName="text-[36px] sm:text-[44px] md:text-[36px] lg:text-display-3"
            >
              Started at Protocol Labs,
              <br />
              <em className="text-brand-accent">built on AT Protocol</em>
            </SectionHeading>
            <div className={`mt-8 space-y-6 ${bodyCopy}`}>
              <p>
                Hypercerts began at Protocol Labs in 2022 as a way to represent
                claims about impactful work and enable retroactive funding.
              </p>
              <p>
                In September 2025 we started using the AT Protocol, the open
                protocol behind Bluesky, moving towards a decentralized data
                layer for any funding mechanism.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <a
              href="https://www.protocol.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-28 items-center justify-center rounded-brand border border-ui-separator bg-white p-8 transition-colors hover:border-brand-black"
              aria-label="Protocol Labs"
            >
              <Image
                src="/img/protocollabs_logo.png"
                alt="Protocol Labs"
                width={220}
                height={80}
                className="h-auto max-h-16 w-auto max-w-full object-contain grayscale"
              />
            </a>
            <a
              href="https://atproto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-28 items-center justify-center rounded-brand border border-ui-separator bg-white p-8 transition-colors hover:border-brand-black"
              aria-label="AT Protocol"
            >
              {/* atproto.com marks itself with this monospace wordmark. */}
              <span
                aria-hidden="true"
                className="font-mono text-[36px] font-extrabold leading-none text-brand-black"
              >
                at://
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-ui-bg py-24 md:py-32"
        aria-labelledby="people-heading"
      >
        <div className="landing-container">
          <SectionHeading id="people-heading" eyebrow="Who we are">
            The people
            <br />
            <em className="text-brand-accent">behind the Foundation</em>
          </SectionHeading>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col overflow-hidden rounded-brand border border-ui-separator bg-white"
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={480}
                    height={480}
                    className="aspect-square w-full object-cover grayscale"
                  />
                ) : (
                  <div
                    className="flex aspect-square items-center justify-center bg-surface-cream font-display text-display-3 text-ui-grey-muted"
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-heading-4 text-brand-black">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-body text-body-sm text-ui-grey-muted">
                    {member.role}
                  </p>
                  <ProfileLinks person={member} className="mt-auto pt-5" />
                </div>
              </li>
            ))}
          </ul>
          <p className={`mt-10 max-w-2xl ${bodyCopy}`}>
            We publish our{" "}
            <OptionalLink href={foundationLinks.roadmap}>roadmap</OptionalLink>,
            hold an open monthly{" "}
            <OptionalLink href={foundationLinks.communityCall}>
              community call
            </OptionalLink>
            , and work in the open on{" "}
            <OptionalLink href={foundationLinks.github}>GitHub</OptionalLink>.
          </p>
        </div>
      </section>

      <section
        className="bg-white py-24 md:py-32"
        aria-labelledby="partners-heading"
      >
        <div className="landing-container">
          <SectionHeading id="partners-heading" eyebrow="Who we work with">
            Our <em className="text-brand-accent">collaborators</em>
          </SectionHeading>
        </div>
        <HorizontalScroller label="Collaborators">
            {collaborators.map((collaborator) => (
              <li
                key={collaborator.name}
                className="flex flex-col rounded-brand border border-ui-separator bg-white p-6"
              >
                <a
                  href={collaborator.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 items-center justify-between gap-6 transition-opacity hover:opacity-70"
                >
                  <Image
                    src={collaborator.logo}
                    alt=""
                    width={140}
                    height={32}
                    style={{ height: collaborator.logoHeight ?? 28 }}
                    className={`w-auto max-w-[130px] object-contain object-left grayscale${collaborator.logoInvert ? " invert" : ""}`}
                  />
                  <span className="flex items-center gap-2 font-body text-body-sm text-brand-black">
                    {collaborator.name}
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
                {/* The description takes up the slack, so the people rows line
                    up across the blocks. */}
                <p className="mt-4 flex-1 font-body text-body-sm leading-relaxed text-ui-grey-dark">
                  {collaborator.description}
                </p>
                <ul className="mt-5 space-y-4 border-t border-ui-separator pt-5">
                  {collaborator.people.map((person) => (
                    <li key={person.name} className="flex items-center gap-3">
                      <Avatar person={person} />
                      <div className="min-w-0">
                        <p className="font-body text-body-sm text-brand-black">
                          {person.name}
                        </p>
                        <ProfileLinks person={person} compact className="mt-0.5" />
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </HorizontalScroller>
      </section>

      <section
        className="bg-surface-cream py-24 md:py-32"
        aria-labelledby="find-us-heading"
      >
        {/* On wide screens the links sit under the intro, beside the form; on
            phones the form comes straight after the intro. */}
        <div className="landing-container grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:grid-rows-[auto_1fr] md:gap-x-16 md:gap-y-10">
          <div className="md:col-start-1 md:row-start-1">
            <SectionHeading id="find-us-heading" eyebrow="Find us">
              We want to
              <br />
              <em className="text-brand-accent">hear from you</em>
            </SectionHeading>
            <p className={`mt-8 ${bodyCopy}`}>
              If you fund, evaluate, or build tools for valuable work, we want
              to hear from you.
            </p>
          </div>
          <div className="md:col-start-2 md:row-span-2 md:row-start-1">
            <ContactForm tone="white" />
          </div>
          <ul className="self-start border-t-2 border-brand-black md:col-start-1 md:row-start-2">
            {findUs.map((link) => (
              <li key={link.label} className="border-b border-ui-separator">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 font-body text-body-lg text-brand-black transition hover:text-brand-accent"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            <li className="border-b border-ui-separator">
              <a
                href={`mailto:${foundationLinks.email}`}
                className="flex items-center justify-between py-4 font-body text-body-lg text-brand-black transition hover:text-brand-accent"
              >
                {foundationLinks.email}
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
