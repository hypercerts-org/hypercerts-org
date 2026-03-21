"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (process.env.NODE_ENV === "development") {
    console.error("GlobalError:", error.message);
  }

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#111111" }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#555555", margin: "16px 0 32px" }}>
            An unexpected error occurred. Please try again.
          </p>
          {process.env.NODE_ENV === "development" && error.message && (
            <p
              style={{
                fontSize: "0.875rem",
                color: "#cc0000",
                marginBottom: "24px",
                fontFamily: "monospace",
              }}
            >
              {error.message}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              backgroundColor: "#111111",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              padding: "12px 32px",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
