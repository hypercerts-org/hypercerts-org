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

export default function ContactPage() {
  return (
    <main className="bg-white py-24 md:py-32">
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
      </div>
    </main>
  );
}
