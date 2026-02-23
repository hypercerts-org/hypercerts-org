"use client";

interface GuillocheProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  variant?: "radial" | "wave";
}

function buildRadialPaths(width: number, height: number): string[] {
  const cx = width / 2;
  const cy = height / 2;
  const kappa = 0.5522847498; // magic constant for bezier circle approximation
  const numPetals = 12;
  const rx = width * 0.38;
  const ry = height * 0.18;
  const paths: string[] = [];

  for (let i = 0; i < numPetals; i++) {
    const angleDeg = (i * 360) / numPetals;
    const angleRad = (angleDeg * Math.PI) / 180;

    // Build an ellipse path centered at origin, then rotate and translate
    // We approximate the ellipse with 4 cubic bezier curves
    const ox = rx * kappa;
    const oy = ry * kappa;

    // Ellipse points (unrotated, centered at origin)
    const pts = [
      [rx, 0],
      [rx, oy],
      [ox, ry],
      [0, ry],
      [-ox, ry],
      [-rx, oy],
      [-rx, 0],
      [-rx, -oy],
      [-ox, -ry],
      [0, -ry],
      [ox, -ry],
      [rx, -oy],
    ];

    // Rotate a point by angleRad
    const rot = ([x, y]: number[]): [number, number] => [
      x * Math.cos(angleRad) - y * Math.sin(angleRad) + cx,
      x * Math.sin(angleRad) + y * Math.cos(angleRad) + cy,
    ];

    const [p0x, p0y] = rot(pts[0]);
    const [c1x, c1y] = rot(pts[1]);
    const [c2x, c2y] = rot(pts[2]);
    const [p1x, p1y] = rot(pts[3]);
    const [c3x, c3y] = rot(pts[4]);
    const [c4x, c4y] = rot(pts[5]);
    const [p2x, p2y] = rot(pts[6]);
    const [c5x, c5y] = rot(pts[7]);
    const [c6x, c6y] = rot(pts[8]);
    const [p3x, p3y] = rot(pts[9]);
    const [c7x, c7y] = rot(pts[10]);
    const [c8x, c8y] = rot(pts[11]);

    const d = [
      `M ${p0x} ${p0y}`,
      `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1x} ${p1y}`,
      `C ${c3x} ${c3y}, ${c4x} ${c4y}, ${p2x} ${p2y}`,
      `C ${c5x} ${c5y}, ${c6x} ${c6y}, ${p3x} ${p3y}`,
      `C ${c7x} ${c7y}, ${c8x} ${c8y}, ${p0x} ${p0y}`,
      "Z",
    ].join(" ");

    paths.push(d);
  }

  // Add a second set of smaller petals rotated by half a step for density
  const numPetals2 = 18;
  const rx2 = width * 0.28;
  const ry2 = height * 0.12;
  const ox2 = rx2 * kappa;
  const oy2 = ry2 * kappa;

  for (let i = 0; i < numPetals2; i++) {
    const angleDeg = (i * 360) / numPetals2 + 10;
    const angleRad = (angleDeg * Math.PI) / 180;

    const pts2 = [
      [rx2, 0],
      [rx2, oy2],
      [ox2, ry2],
      [0, ry2],
      [-ox2, ry2],
      [-rx2, oy2],
      [-rx2, 0],
      [-rx2, -oy2],
      [-ox2, -ry2],
      [0, -ry2],
      [ox2, -ry2],
      [rx2, -oy2],
    ];

    const rot2 = ([x, y]: number[]): [number, number] => [
      x * Math.cos(angleRad) - y * Math.sin(angleRad) + cx,
      x * Math.sin(angleRad) + y * Math.cos(angleRad) + cy,
    ];

    const [p0x, p0y] = rot2(pts2[0]);
    const [c1x, c1y] = rot2(pts2[1]);
    const [c2x, c2y] = rot2(pts2[2]);
    const [p1x, p1y] = rot2(pts2[3]);
    const [c3x, c3y] = rot2(pts2[4]);
    const [c4x, c4y] = rot2(pts2[5]);
    const [p2x, p2y] = rot2(pts2[6]);
    const [c5x, c5y] = rot2(pts2[7]);
    const [c6x, c6y] = rot2(pts2[8]);
    const [p3x, p3y] = rot2(pts2[9]);
    const [c7x, c7y] = rot2(pts2[10]);
    const [c8x, c8y] = rot2(pts2[11]);

    const d = [
      `M ${p0x} ${p0y}`,
      `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1x} ${p1y}`,
      `C ${c3x} ${c3y}, ${c4x} ${c4y}, ${p2x} ${p2y}`,
      `C ${c5x} ${c5y}, ${c6x} ${c6y}, ${p3x} ${p3y}`,
      `C ${c7x} ${c7y}, ${c8x} ${c8y}, ${p0x} ${p0y}`,
      "Z",
    ].join(" ");

    paths.push(d);
  }

  return paths;
}

function buildWavePaths(width: number, height: number): string[] {
  const numLines = 18;
  const paths: string[] = [];
  const amplitude = height * 0.025;
  const frequency = (2 * Math.PI) / (width * 0.4);
  const steps = 120;

  for (let i = 0; i < numLines; i++) {
    const y0 = (height / (numLines + 1)) * (i + 1);
    const phaseOffset = (i * Math.PI) / 4;
    const ampVariation = amplitude * (0.6 + 0.8 * Math.sin((i * Math.PI) / numLines));

    const points: string[] = [];
    for (let s = 0; s <= steps; s++) {
      const x = (width / steps) * s;
      const y = y0 + ampVariation * Math.sin(frequency * x + phaseOffset);
      if (s === 0) {
        points.push(`M ${x.toFixed(2)} ${y.toFixed(2)}`);
      } else {
        points.push(`L ${x.toFixed(2)} ${y.toFixed(2)}`);
      }
    }

    paths.push(points.join(" "));
  }

  return paths;
}

export default function Guilloche({
  width = 600,
  height = 600,
  color = "#33B899",
  opacity = 0.3,
  className,
  variant = "radial",
}: GuillocheProps) {
  const paths = variant === "radial"
    ? buildRadialPaths(width, height)
    : buildWavePaths(width, height);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={0.75}
          strokeOpacity={opacity}
          fill="none"
        />
      ))}
    </svg>
  );
}
