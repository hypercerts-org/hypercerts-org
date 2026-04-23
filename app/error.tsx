"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center bg-white outline-none">
      <div className="text-center px-6">
        <h1 className="font-display text-display-2 text-brand-black">
          Something went wrong
        </h1>
        <p className="font-body text-body-lg text-ui-grey-dark mt-4 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        {process.env.NODE_ENV === "development" && error.message && (
          <p className="font-mono text-body-sm text-red-600 mb-6">
            {error.message}
          </p>
        )}
        <button
          onClick={reset}
          className="inline-block bg-brand-black text-brand-white px-8 py-3 rounded-brand text-body-lg font-medium hover:bg-brand-navy transition"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
