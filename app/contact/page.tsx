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
        href: "https://t.me/+YF9AYb6zCv1mNDJi",
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
        href: "https://t.me/+FODiLtCV2TgwNzRi",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is a hypercert?",
    answer:
      "A hypercert is a living digital record of impactful work. It captures what was done or is planned, by whom, when, and where. As evidence and evaluations accumulate over time, it becomes a shared picture of the work and its value.",
  },
  {
    question: "How do hypercerts work?",
    answer:
      "Hypercerts follow three steps: (1) Record — projects publish structured records of their work. (2) Evaluate — domain experts and communities assess contributions over time. (3) Fund — funders use shared records and evaluations to allocate resources, with impact attributed to both contributors and funders.",
  },
  {
    question: "What domains can hypercerts be used in?",
    answer:
      "Hypercerts work across any domain where collective work needs funding — including climate and regeneration, open-source software, research and development, and community programs. The same pattern applies across all of them.",
  },
  {
    question: "What technology are hypercerts built on?",
    answer:
      "Hypercerts are built on the AT Protocol as open infrastructure. Records, evaluations, and attribution are portable and referenceable across applications — not locked into any single platform.",
  },
  {
    question: "How can I get started?",
    answer:
      "Explore the network on Hyperscan (hyperscan.dev), read the documentation (docs.hypercerts.org), or reach out to the team via the contact form above. If you're a developer, check out the Scaffold App on GitHub to start building.",
  },
  {
    question: "Is hypercerts free to use?",
    answer:
      "Yes. Hypercerts is open infrastructure. The protocol, tools, and documentation are freely available. There are no subscription fees or platform charges.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white py-24 md:py-32">
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

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-heading-4 text-brand-black mb-2">
                  {faq.question}
                </h3>
                <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
