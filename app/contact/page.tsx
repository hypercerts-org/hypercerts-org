import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the Hypercerts Foundation, whether you're a builder, funder, evaluator, or researcher.",
  openGraph: {
    title: "Contact | Hypercerts",
    description:
      "Get in touch with the Hypercerts Foundation, whether you're a builder, funder, evaluator, or researcher.",
  },
};

const contactSections = [
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
    question: "What is the Hypercerts Protocol?",
    answer:
      "Hypercerts is an open protocol that connects information about valuable work with evidence, evaluations, and funding history. Shared data formats, usage guidance, and supporting infrastructure make that information reusable across compatible applications and agents rather than keeping it inside one platform.",
  },
  {
    question: "What problem does it solve?",
    answer:
      "Projects repeatedly explain the same work in applications and reports, while funders and networks struggle to reuse what others already know. Hypercerts makes that information attributable and reusable, so evidence and trust can accumulate over time instead of starting from scratch with every funding process.",
  },
  {
    question: "What is a hypercert?",
    answer:
      "A hypercert brings together a claim about work with linked evidence, evaluations, and funding information. The claim describes who is doing what, when, and where; other people and organizations can add information over time. Creating a hypercert does not, by itself, verify the work or its impact.",
  },
  {
    question: "Who decides whether the information is trustworthy?",
    answer:
      "Hypercerts does not impose a single evaluator or universal impact score. Communities, experts, certifiers, and other organizations can contribute evidence and assessments, and each application or funder decides which signals to trust. Attribution helps readers understand where information came from; it does not automatically make a claim true.",
  },
  {
    question: "What does AI-native mean here?",
    answer:
      "Applications and AI agents can read structured, attributable records about projects, inspect supporting evidence, and see who contributed an assessment. As AI makes convincing stories easier to produce, those signals help people and agents look beyond polished text. AI-native does not mean that Hypercerts automatically verifies impact or makes funding decisions; it provides shared context for those decisions.",
  },
  {
    question: "Do we need to replace our existing platform?",
    answer:
      "No. An integration can begin with a limited set of public records while your existing systems continue to manage private and operational data. The goal is to make useful information reusable across applications, not require every organization to adopt the same platform or move its entire database.",
  },
  {
    question: "Do I need a blockchain or cryptocurrency to use Hypercerts?",
    answer:
      "No. Hypercerts records are built on AT Protocol, the open protocol also used by Bluesky, which provides portable identities and signed data repositories. Applications can use different payment systems where needed; blockchain transactions and cryptocurrency are not required to publish or use Hypercerts records.",
    richAnswer:
      'No. Hypercerts records are built on <a href="https://atproto.com" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">AT Protocol</a>, the open protocol also used by Bluesky, which provides portable identities and signed data repositories. Applications can use different payment systems where needed; blockchain transactions and cryptocurrency are not required to publish or use Hypercerts records.',
  },
  {
    question: "What kinds of work can use Hypercerts?",
    answer:
      "Hypercerts is designed to support valuable work such as local energy, community land regeneration, journalism, and AI safety research. The relevant evidence and evaluation methods differ by domain. Ma Earth's regenerative-land funding rounds provide a concrete example of the infrastructure in use.",
  },
  {
    question: "Is the Hypercerts Protocol free to use?",
    answer:
      "The Hypercerts Protocol is open and free to build on. Running an application may still involve costs for hosting, third-party services, payment processing, or integration support. Those costs depend on the services and providers you choose.",
  },
  {
    question: "How can I get started?",
    answer:
      "If you're building an application, start with the documentation to understand the protocol and the available integration paths. If you're a project, funder, network, or evaluator, contact us about your workflow and what you want to achieve. We can help identify whether an existing application or a focused integration is the right starting point.",
    richAnswer:
      'If you\'re building an application, start with the <a href="https://docs.hypercerts.org" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-black transition underline">documentation</a> to understand the protocol and the available integration paths. If you\'re a project, funder, network, or evaluator, contact us about your workflow and what you want to achieve. We can help identify whether an existing application or a focused integration is the right starting point.',
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
          Build with <span className="italic text-brand-accent">us</span>
        </h1>

        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mb-16">
          Whether you&rsquo;re a builder, funder, evaluator, or researcher, we&rsquo;d
          love to hear from you.
        </p>

        <section
          className="grid gap-10 border-t-2 border-brand-black pt-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-16"
          aria-labelledby="contact-form-heading"
        >
          <div>
            <p className="mb-4 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark">
              Start a conversation
            </p>
            <h2
              id="contact-form-heading"
              aria-label="Tell us what you're working on, and where Hypercerts might fit"
              className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-brand-black sm:text-[40px]"
            >
              Tell us what you&rsquo;re working on, and{" "}
              <span className="italic text-brand-accent">where Hypercerts might fit</span>
            </h2>
            <p className="mt-6 font-body text-body-lg leading-relaxed text-ui-grey-dark">
              Share the context, the people involved, and what you want to achieve. We&rsquo;ll help identify a useful next step.
            </p>
            <p className="mt-6 font-body text-body-sm leading-relaxed text-ui-grey-dark">
              Prefer email? Write directly to{" "}
              <a
                href="mailto:team@hypercerts.org"
                className="font-medium text-brand-accent underline decoration-brand-accent/40 underline-offset-4 transition hover:text-brand-black"
              >
                team@hypercerts.org
              </a>
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Contact sections */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
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
