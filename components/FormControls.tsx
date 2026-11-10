import { forwardRef, useId } from "react";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

/* The contact form's controls. Adapted from the Field, Input, Textarea and
   Button components of the Hypercerts design system's React package
   (hypercerts-design), and styled with this site's Tailwind tokens, so the site
   does not depend on the package. */

const join = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent";

const CONTROL = join(
  "w-full rounded-brand border border-ui-separator bg-brand-white font-body text-brand-black",
  "transition-colors duration-150 ease-out placeholder:text-ui-grey-muted hover:border-brand-black",
  "disabled:cursor-not-allowed disabled:bg-ui-grey-tag disabled:text-ui-grey-muted",
  FOCUS_RING,
);

/* A visible label wired to its control: the render prop receives the id the
   label points at. */
export function Field({
  label,
  className,
  children,
}: {
  label: ReactNode;
  className?: string;
  children: (props: { id: string }) => ReactNode;
}) {
  const id = useId();
  return (
    <div className={join("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark"
      >
        {label}
      </label>
      {children({ id })}
    </div>
  );
}

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => (
  <input
    ref={ref}
    className={join(CONTROL, "px-4 py-4 text-body-lg", className)}
    {...rest}
  />
));
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 4, ...rest }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={join(CONTROL, "resize-y px-4 py-3 text-base", className)}
    {...rest}
  />
));
Textarea.displayName = "Textarea";

const BUTTON_VARIANT = {
  primary:
    "bg-brand-black text-brand-white hover:bg-brand-black/90 disabled:bg-ui-grey-tag disabled:text-ui-grey-muted",
  secondary:
    "border border-ui-separator bg-transparent text-brand-black hover:border-brand-black disabled:text-ui-grey-muted",
} as const;

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof BUTTON_VARIANT;
    /* Shows a spinner, marks the button busy and disables it. */
    loading?: boolean;
  }
>(
  (
    {
      variant = "primary",
      loading = false,
      type = "button",
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={join(
        "inline-flex items-center gap-2 rounded-brand px-8 py-3 font-body text-body-lg font-medium",
        "transition-colors duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-60",
        FOCUS_RING,
        BUTTON_VARIANT[variant],
        className,
      )}
      {...rest}
    >
      {loading ? (
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="motion-safe:animate-spin"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
          <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : null}
      {children}
    </button>
  ),
);
Button.displayName = "Button";
