import type { ReactNode } from "react";

export const developerGuideUrl =
  "https://docs.hypercerts.org/getting-started/building-on-hypercerts";
export const primaryButton =
  "inline-flex items-center justify-center rounded-brand bg-brand-black px-8 py-3 font-body text-body-lg font-medium text-brand-white transition hover:bg-brand-black/90";
export const secondaryButton =
  "inline-flex items-center justify-center rounded-brand border border-brand-black px-8 py-3 font-body text-body-lg font-medium text-brand-black transition hover:bg-ui-bg";
export const textLink =
  "inline-block py-2 font-body text-body-lg font-medium text-brand-accent underline decoration-brand-accent/40 underline-offset-4 transition hover:text-brand-black";
export const bodyCopy =
  "font-body text-body-lg leading-relaxed text-ui-grey-dark";

export function SectionHeading({
  id,
  eyebrow,
  children,
  headingClassName = "text-[36px] sm:text-[48px] md:text-display-2",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  headingClassName?: string;
}) {
  return (
    <>
      <p className="mb-4 font-body text-body-sm uppercase tracking-[0.2em] leading-relaxed text-ui-grey-dark">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`max-w-4xl font-display leading-[1.05] tracking-[-0.02em] text-brand-black ${headingClassName}`}
      >
        {children}
      </h2>
    </>
  );
}
