import { bodyCopy } from "./LandingSection";

function Sheet({
  x,
  y,
  rotation = 0,
  muted = false,
}: {
  x: number;
  y: number;
  rotation?: number;
  muted?: boolean;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotation} 38 52)`}
      opacity={muted ? 0.35 : 1}
    >
      <rect
        width="76"
        height="104"
        rx="12"
        fill={muted ? "#f1f1f1" : "#fff"}
        stroke="#666"
      />
      <path
        d="M16 26h30M16 46h44M16 58h36M16 70h40"
        stroke="#d2d2d2"
        strokeLinecap="round"
      />
      <path
        d="M16 26h18"
        stroke={muted ? "#666" : "#535353"}
        strokeLinecap="round"
      />
    </g>
  );
}

function ScatteredInformation() {
  return (
    <svg
      className="knowledge-illustration"
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
    >
      <Sheet x={136} y={26} rotation={12} muted />
      <Sheet x={64} y={77} rotation={-11} />
      <Sheet x={175} y={91} rotation={5} />
      <circle
        className="knowledge-glimmer"
        cx="176"
        cy="51"
        r="2"
        fill="#666"
      />
    </svg>
  );
}

function ReusableInformation() {
  return (
    <svg
      className="knowledge-illustration"
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
    >
      <Sheet x={54} y={58} />
      <Sheet x={190} y={58} />
      <path
        d="M142 110h36m-5-5 5 5-5 5"
        stroke="#d2d2d2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M70 84h18M206 84h18" stroke="#af2901" strokeLinecap="round" />
      <circle
        className="knowledge-reuse-dot"
        cx="153"
        cy="110"
        r="2"
        fill="#af2901"
      />
    </svg>
  );
}

export default function KnowledgeBridge() {
  return (
    <section
      className="bg-white py-24 md:py-32"
      id="reusable-information"
      aria-label="Making existing knowledge useful"
    >
      <div className="landing-container space-y-12 md:space-y-16">
        <div className="knowledge-row">
          <p className={bodyCopy}>
            Useful information about projects already exists across communities,
            experts, evaluators, certifiers, and funders, but much of it is
            scattered or hidden.
          </p>
          <ScatteredInformation />
        </div>
        <div className="knowledge-row">
          <p className={`md:order-2 ${bodyCopy}`}>
            Hypercerts make the information visible, show who contributed it,
            and let others reuse it rather than recreate it for each funding
            process.
          </p>
          <div className="md:order-1">
            <ReusableInformation />
          </div>
        </div>
      </div>
    </section>
  );
}
