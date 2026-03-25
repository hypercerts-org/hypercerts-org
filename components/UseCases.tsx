const roles = [
  {
    role: "Projects",
    action: "Publish records of planned or completed work",
    ownership: "Project-owned records",
  },
  {
    role: "Evaluators",
    action: "Add evidence, observations, and trust signals",
    ownership: "Evaluator-owned assessments",
  },
  {
    role: "Funders",
    action: "Allocate capital using shared records",
    ownership: "Shared, reusable funding context",
  },
];

export default function UseCases() {
  return (
    <section
      className="w-full bg-white py-24 md:py-32"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-body text-body-sm uppercase tracking-[0.2em] text-brand-accent mb-4">
          Use cases
        </p>

        {/* Heading */}
        <h2
          id="use-cases-heading"
          className="font-display text-[36px] sm:text-[48px] md:text-display-2 leading-[1] tracking-[-0.02em] text-brand-black max-w-3xl"
        >
          Applicable across{" "}
          <span className="italic text-brand-accent">domains</span>
        </h2>

        {/* Intro */}
        <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed max-w-2xl mt-8">
          The challenge of funding collective work exists everywhere&mdash;from
          regenerative land to open-source software, scientific research, and
          community programs.
        </p>

        {/* Featured use case: Ma Earth */}
        <div className="mt-16 border-t-2 border-brand-black pt-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
            {/* Left: narrative */}
            <div>
              <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-3">
                Featured
              </p>
              <h3 className="font-display text-[24px] md:text-[32px] leading-[1.15] tracking-[-0.02em] text-brand-black mb-5">
                Funding the Regeneration with Ma Earth
              </h3>
              <div className="font-body text-body-lg text-ui-grey-dark leading-relaxed space-y-4">
                <p>
                  Ma Earth is building a crowdfunding platform for thousands of
                  regenerative land projects&mdash;from reforestation and
                  soil restoration to indigenous stewardship and community-led
                  conservation.
                </p>
                <p>
                  Each project publishes its own shared record describing
                  proposed or completed work. These records are owned by the
                  projects themselves. Evaluators&mdash;scientists, local
                  experts, communities&mdash;add observations, data, and trust
                  signals over time.
                </p>
                <p>
                  Funders use this shared information to decide which
                  projects to support. Over
                  time, more evidence accumulates, attribution becomes clearer,
                  and future funding decisions improve.
                </p>
              </div>
            </div>

            {/* Right: structured info */}
            <div className="space-y-8">
              {/* Roles */}
              <div>
                <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-4">
                  Roles &amp; ownership
                </p>
                <div className="space-y-4">
                  {roles.map((r) => (
                    <div key={r.role} className="border-t border-ui-separator pt-3">
                      <p className="font-body text-body-lg font-medium text-brand-black leading-tight">
                        {r.role}
                      </p>
                      <p className="font-body text-body-sm text-ui-grey-dark mt-0.5">
                        {r.action}
                      </p>
                      <p className="font-body text-body-sm text-ui-grey italic mt-0.5">
                        {r.ownership}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-3">
                  Benefits
                </p>
                <ul className="space-y-1.5">
                  <li className="font-body text-body-lg text-ui-grey-dark flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black mt-2 flex-shrink-0" aria-hidden="true" />
                    Less duplicated reporting
                  </li>
                  <li className="font-body text-body-lg text-ui-grey-dark flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black mt-2 flex-shrink-0" aria-hidden="true" />
                    More reusable evaluations
                  </li>
                  <li className="font-body text-body-lg text-ui-grey-dark flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black mt-2 flex-shrink-0" aria-hidden="true" />
                    Better funding decisions over time
                  </li>
                  <li className="font-body text-body-lg text-ui-grey-dark flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black mt-2 flex-shrink-0" aria-hidden="true" />
                    Proof of funded impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Simocracy — compact showcase */}
        <div className="mt-16 border-t border-ui-separator pt-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <div className="group/sim w-full md:w-[280px] rounded-brand overflow-hidden border border-ui-separator flex-shrink-0 relative">
              <img
                src="/img/screenshots/simocracy_screenshot.png"
                alt="Simocracy — decentralized governance simulation"
                className="w-full h-auto transition-opacity duration-300 group-hover/sim:opacity-0"
              />
              <img
                src="/img/screenshots/simocracy_screenshot_2.png"
                alt="Simocracy — governance in action"
                className="w-full h-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/sim:opacity-100"
              />
            </div>
            <div>
              <p className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark mb-2">
                Also built on hypercerts
              </p>
              <h3 className="font-display text-heading-4 text-brand-black mb-2">
                Simocracy
              </h3>
              <p className="font-body text-body-lg text-ui-grey-dark leading-relaxed mb-3">
                A decentralized governance simulation, where users create AI agents, propose policies,
                and participate in collective decision-making.
              </p>
              <a
                href="https://simocracy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-body-sm text-brand-accent font-medium hover:text-brand-black transition"
              >
                simocracy.org &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
