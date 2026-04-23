export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the Hypercerts Foundation — whether you're a builder, funder, evaluator, or researcher.",
  openGraph: {
    title: "Contact | Hypercerts",
    description:
      "Get in touch with the Hypercerts Foundation — whether you're a builder, funder, evaluator, or researcher.",
  },
};

const contactSections = [
  {
    title: "Use hypercerts",
    description:
      "Interested in participating as a funder, evaluator, or project?",
    links: [
      {
        label: "Fill out the form",
        href: "https://form.feathery.io/to/kV8E0l",
      },
      {
        label: "Email team@hypercerts.org",
        href: "mailto:team@hypercerts.org",
      },
    ],
  },
  {
    title: "Stay informed",
    description:
      "Join the community for updates and follow technical progress.",
    links: [
      {
        label: "Telegram group",
        href: "https://t.me/+o4wPsJ7yEZYzNGFk",
      },
      {
        label: "GitHub",
        href: "https://github.com/hypercerts-org",
      },
    ],
  },
  {
    title: "Get support",
    description: "Need help? Post a question in our community channels.",
    links: [
      {
        label: "Telegram",
        href: "https://t.me/+o4wPsJ7yEZYzNGFk",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is a hypercert?",
    answer:
      "A hypercert is a living digital record of impactful work. It captures what was done or is planned, by whom, when, and where. As evidence and evaluations accumulate over time, it becomes a shared picture of the work and its value. Learn more at docs.hypercerts.org.",
    richAnswer:
      'A hypercert is a living digital record of impactful work. It captures what was done or is planned, by whom, when, and where. As evidence and evaluations accumulate over time, it becomes a shared picture of the work and its value. <a href="https://docs.hypercerts.org/core-concepts/what-is-hypercerts" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">Learn more</a>.',
  },
  {
    question: "What impact domains can hypercerts be used in?",
    answer:
      "Hypercerts work across any impact domain where collective work needs funding — including climate and regeneration, open-source software, research and development, community programs, and many more. The same pattern applies across all of them.",
  },
  {
    question: "How can I get started?",
    answer:
      "Explore the network on Hyperscan (hyperscan.dev), read the quickstart guide (docs.hypercerts.org/quickstart), or reach out to the team via the contact form above. If you're a developer, check out the Scaffold App on GitHub to start building.",
    richAnswer:
      'Explore the network on <a href="https://hyperscan.dev" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">Hyperscan</a>, read the <a href="https://docs.hypercerts.org/quickstart" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">quickstart guide</a>, or reach out to the team via the contact form above. If you&rsquo;re a developer, check out the <a href="https://github.com/hypercerts-org/hypercerts-scaffold-atproto" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">Scaffold App</a> on GitHub to start building.',
  },
  {
    question: "What technology are hypercerts built on?",
    answer:
      "Hypercerts are built on the AT Protocol as open infrastructure. Records, evaluations, and attribution are portable and referenceable across applications — not locked into any single platform.",
  },
  {
    question: "What is the AT Protocol?",
    answer:
      "The AT Protocol is an open, decentralized protocol for building social applications. It provides portable identity, shared data schemas, and federated hosting — so data is not locked into any single platform. Hypercerts uses it as the foundation for storing and sharing records, evaluations, and attribution across applications. Learn more at atproto.com.",
    richAnswer:
      'The AT Protocol is an open, decentralized protocol for building social applications. It provides portable identity, shared data schemas, and federated hosting — so data is not locked into any single platform. Hypercerts uses it as the foundation for storing and sharing records, evaluations, and attribution across applications. Learn more at <a href="https://atproto.com" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">atproto.com</a>.',
  },
  {
    question: "What is Certified?",
    answer:
      "Certified is your portable impact profile — one identity across all hypercert-enabled applications. It aggregates your actions, evaluations, and credentials without locking you into any single platform. Create your identity at certified.app.",
    richAnswer:
      'Certified is your portable impact profile — one identity across all hypercert-enabled applications. It aggregates your actions, evaluations, and credentials without locking you into any single platform. Create your identity at <a href="https://certified.app" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">certified.app</a>.',
  },
  {
    question: "Is hypercerts free to use?",
    answer:
      "Yes. Hypercerts is open infrastructure. The protocol, tools, and documentation are freely available. There are no subscription or protocol fees.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://hypercerts.org/contact#faq",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <p className="sr-only">
        Contact the Hypercerts Foundation to participate as a builder, funder,
        evaluator, or researcher. Reach out via email at team@hypercerts.org,
        join the Telegram community, or explore the GitHub repositories.
      </p>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black mb-6">
          Build with <span className="italic text-brand-accent">us.</span>
        </h1>

        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mb-16">
          Whether you&rsquo;re a builder, funder, evaluator, or researcher—we&rsquo;d
          love to hear from you.
        </p>

        {/* Contact sections */}
        <div className="grid md:grid-cols-3 gap-10">
          {contactSections.map((section) => (
            <div
              key={section.title}
              className="border-t-2 border-brand-black pt-6"
            >
              <h2 className="font-display text-heading-4 text-brand-black mb-3">
                {section.title}
              </h2>
              <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mb-5">
                {section.description}
              </p>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-sm text-brand-accent font-medium hover:text-brand-black transition"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-24 border-t border-ui-separator pt-16">
          <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
            Frequently asked questions
          </p>
          <h2 className="font-display text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-brand-black mb-12">
            Common questions
          </h2>

          <div className="max-w-3xl divide-y divide-ui-separator">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5 first:pt-0">
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-heading-4 text-brand-black hover:text-brand-accent transition">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-ui-grey group-open:rotate-45 transition-transform duration-200 text-[24px] leading-none">
                    +
                  </span>
                </summary>
                {faq.richAnswer ? (
                  <p
                    className="font-body text-body-lg text-ui-grey-dark leading-relaxed mt-3 pr-10"
                    dangerouslySetInnerHTML={{ __html: faq.richAnswer }}
                  />
                ) : (
                  <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mt-3 pr-10">
                    {faq.answer}
                  </p>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
