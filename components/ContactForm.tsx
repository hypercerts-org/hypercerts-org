"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Button,
  Field,
  Input,
  Textarea,
} from "@hypercerts-org/ui-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [error, setError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submissionState === "success") successRef.current?.focus();
  }, [submissionState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === "submitting") return;

    setSubmissionState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.error || "Your message could not be sent. Please try again.",
        );
      }

      form.reset();
      setSubmissionState("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your message could not be sent. Please try again.",
      );
      setSubmissionState("error");
    }
  }

  if (submissionState === "success") {
    return (
      <div
        className="flex min-h-[430px] flex-col justify-between rounded-brand bg-surface-cream p-6 sm:p-8"
      >
        <div ref={successRef} role="status" tabIndex={-1} className="outline-none">
          <p className="mb-5 font-body text-body-sm uppercase tracking-[0.2em] text-ui-grey-dark">
            Message sent
          </p>
          <h3 className="max-w-md font-display text-[36px] leading-[1.05] tracking-[-0.02em] text-brand-black sm:text-[48px]">
            Thank you. <span className="italic text-brand-accent">We&rsquo;ll be in touch</span>
          </h3>
          <p className="mt-6 max-w-md font-body text-body-lg leading-relaxed text-ui-grey-dark">
            Your note is on its way to the Hypercerts team.
          </p>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="mt-10 self-start"
          onClick={() => setSubmissionState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      id="contact-form"
      className="rounded-brand bg-surface-cream p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name">
          {(fieldProps) => (
            <Input
              {...fieldProps}
              type="text"
              inputSize="lg"
              name="name"
              autoComplete="name"
              maxLength={100}
              disabled={isSubmitting}
            />
          )}
        </Field>

        <Field
          label={
            <>
              Email <span aria-hidden="true">*</span>
            </>
          }
        >
          {(fieldProps) => (
            <Input
              {...fieldProps}
              type="email"
              inputSize="lg"
              name="email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={isSubmitting}
            />
          )}
        </Field>
      </div>

      <Field label="Organization" className="mt-6">
        {(fieldProps) => (
          <Input
            {...fieldProps}
            type="text"
            inputSize="lg"
            name="organization"
            autoComplete="organization"
            maxLength={150}
            disabled={isSubmitting}
          />
        )}
      </Field>

      <Field
        className="mt-6"
        label={
          <>
            What would you like to explore? <span aria-hidden="true">*</span>
          </>
        }
      >
        {(fieldProps) => (
          <Textarea
            {...fieldProps}
            className="min-h-40 text-base"
            name="message"
            rows={6}
            maxLength={5000}
            required
            disabled={isSubmitting}
            placeholder="Tell us about your project, funding program, research, or integration."
          />
        )}
      </Field>

      <input
        className="hidden"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error ? (
        <p className="mt-5 font-body text-body-sm text-brand-accent" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs font-body text-body-sm leading-relaxed text-ui-grey-dark">
          We&rsquo;ll use these details only to respond to your message.
        </p>
        <Button
          type="submit"
          size="lg"
          loading={isSubmitting}
          className="whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
