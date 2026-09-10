export default function ProjectIcon({
  kind,
  className = "",
}: {
  kind: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "energy" ? (
        <>
          <path d="M18 3 8 18h8l-2 11 10-16h-8l2-10Z" />
          <path d="M5 7 3 5M27 7l2-2M5 25l-2 2M27 25l2 2" />
        </>
      ) : kind === "land" ? (
        <>
          <path d="M16 27V13M16 20C6 22 3 16 4 9c8 0 12 3 12 11ZM16 15C16 7 21 4 28 4c0 8-4 12-12 11ZM5 28h23" />
          <path d="m9 14 7 6m6-10-6 5" />
        </>
      ) : (
        <>
          <path d="M6 26h20M10 26V9l6-5 6 5v17M7 13h18M13 18h6M13 22h6" />
          <circle cx="16" cy="9" r="1" />
        </>
      )}
    </svg>
  );
}
