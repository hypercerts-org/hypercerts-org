export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-white py-24 md:py-32 outline-none">
      <article className="max-w-3xl mx-auto px-6 font-body text-brand-black">
        <h1 className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-body-lg text-ui-grey-dark leading-relaxed">
          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy governs the access and use of the
              hypercerts.org and hypercerts.xyz websites (the
              &ldquo;Websites&rdquo;), APIs, and any content, live support,
              products, software, tools, features, or functionalities provided
              on or in connection with our services; including without limitation
              using our services to view, explore, help display and create
              hypercerts, and using our tools, at your own discretion, to connect
              directly with others to mint, purchase, sell, or transfer
              hypercerts on public blockchains (collectively, the
              &ldquo;Service&rdquo;), including using code available within the
              repositories of https://github.com/hypercerts-org.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              2. What information do we collect?
            </h2>
            <p className="mb-4">
              The Hypercerts Foundation (&ldquo;we,&rdquo; &ldquo;us&rdquo;) may
              collect information that you submit when contacting us, including
              your name, email address, organization, and message. We use this
              information solely to respond to you. Our contact form uses Resend
              to deliver messages.
            </p>
            <p>
              We may use tracking or analytics technologies to automatically
              collect certain information about your equipment, browsing actions,
              and patterns. This type of data will only be used by us in an
              aggregated and anonymized manner for analytics purposes and/or to
              improve the user experience with our Service and Websites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              3. Third party services and links
            </h2>
            <p>
              Occasionally, at our discretion, we may include or offer third
              party products or services on our site. These third party sites
              have separate and independent privacy policies and may collect or
              use your data in a way we are not aware of. We therefore have no
              responsibility or liability for the content and activities of these
              linked sites. Service providers that process data on our behalf,
              including Resend, process it to provide email delivery services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-4 text-brand-black mb-4">
              4. Changes to our Privacy Policy
            </h2>
            <p>
              If we decide to change our Privacy Policy, we will post those
              changes on this page.
            </p>
          </section>

          <p className="text-body-sm text-ui-grey pt-8 border-t border-ui-separator">
            This document is CC-BY-SA. It was last updated September 14, 2026.
          </p>
        </div>
      </article>
    </main>
  );
}
