"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="font-display text-display-2 text-brand-black">
          Something went wrong
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark mt-4 mb-8">
          An unexpected error occurred.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
