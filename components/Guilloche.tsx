"use client";

interface GuillocheProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  variant?: "radial" | "wave" | "legacy-radial";
  preset?: "teal" | "warm";
}

interface SpirographLayer {
  R: number;       // outer radius (fraction of viewBox, 0-1)
  r: number;       // inner radius (fraction of viewBox, 0-1)
  d: number;       // pen distance (fraction of viewBox, 0-1)
  rotation: number; // rotation in degrees
  waviness: number; // amplitude of edge perturbation (0 = smooth, higher = wavier)
  waveFreq: number; // frequency of edge perturbation
}

function buildSpirographPath(
  layer: SpirographLayer,
  width: number,
  height: number,
  steps: number = 360
): string {
  const { R, r, d, rotation, waviness, waveFreq } = layer;
  const cx = width / 2;
  const cy = height / 2;
  const scale = Math.min(width, height) / 2;
  const rotRad = (rotation * Math.PI) / 180;

  const Rscaled = R * scale;
  const rScaled = r * scale;
  const dScaled = d * scale;
  const ratio = (Rscaled - rScaled) / rScaled;
  const periods = lcmRatio(R, r);

  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * 2 * Math.PI * periods;

    const perturbation = waviness * Math.sin(waveFreq * t);
    const x0 = (Rscaled - rScaled + perturbation) * Math.cos(t) + dScaled * Math.cos(ratio * t);
    const y0 = (Rscaled - rScaled + perturbation) * Math.sin(t) - dScaled * Math.sin(ratio * t);

    // Apply rotation
    const x = x0 * Math.cos(rotRad) - y0 * Math.sin(rotRad) + cx;
    const y = x0 * Math.sin(rotRad) + y0 * Math.cos(rotRad) + cy;

    if (i === 0) {
      points.push(`M ${x.toFixed(3)} ${y.toFixed(3)}`);
    } else {
      points.push(`L ${x.toFixed(3)} ${y.toFixed(3)}`);
    }
  }
  points.push("Z");
  return points.join(" ");
}

interface GuillochePreset {
  layers: SpirographLayer[];
  contours: {
    count: number;
    startScale: number;
    endScale: number;
    waviness: number;
    waveFreq: number;
  };
  colors: string[];
}

interface CompositionItem {
  path: string;
  color: string;
  opacity: number;
  blendMode: string;
}

const PRESET_TEAL: GuillochePreset = {
  layers: [
    { R: 0.45, r: 0.17, d: 0.28, rotation: 0,   waviness: 4, waveFreq: 8 },
    { R: 0.45, r: 0.17, d: 0.28, rotation: 45,  waviness: 4, waveFreq: 8 },
    { R: 0.45, r: 0.17, d: 0.28, rotation: 90,  waviness: 4, waveFreq: 8 },
    { R: 0.45, r: 0.17, d: 0.28, rotation: 135, waviness: 4, waveFreq: 8 },
  ],
  contours: {
    count: 28,
    startScale: 0.7,
    endScale: 0.12,
    waviness: 4,
    waveFreq: 8,
  },
  colors: ["#14334C", "#33B899", "#A1E6DA", "#426A5A"],
};

const PRESET_WARM: GuillochePreset = {
  layers: [
    { R: 0.42, r: 0.15, d: 0.26, rotation: 23,   waviness: 5, waveFreq: 10 },
    { R: 0.42, r: 0.15, d: 0.26, rotation: -67,  waviness: 5, waveFreq: 10 },
    { R: 0.42, r: 0.15, d: 0.26, rotation: -22,  waviness: 5, waveFreq: 10 },
    { R: 0.42, r: 0.15, d: 0.26, rotation: -112, waviness: 5, waveFreq: 10 },
  ],
  contours: {
    count: 30,
    startScale: 0.7,
    endScale: 0.15,
    waviness: 5,
    waveFreq: 10,
  },
  colors: ["#121047", "#FF4B00", "#FFD099", "#FEDFCA"],
};

function buildGuillocheComposition(
  preset: GuillochePreset,
  width: number,
  height: number
): CompositionItem[] {
  const items: CompositionItem[] = [];

  // 4 base spirograph layers — each drawn twice (multiply + screen)
  preset.layers.forEach((layer, i) => {
    const color = preset.colors[i % preset.colors.length];
    const path = buildSpirographPath(layer, width, height);

    items.push({ path, color, opacity: 0.4, blendMode: "multiply" });
    items.push({ path, color, opacity: 0.15, blendMode: "screen" });
  });

  // Concentric contour rings
  const { count, startScale, endScale, waviness, waveFreq } = preset.contours;
  const baseLayer = preset.layers[0];
  const contourColor = preset.colors[0];

  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1);
    const scale = startScale + (endScale - startScale) * t;

    const contourLayer: SpirographLayer = {
      R: baseLayer.R * scale,
      r: baseLayer.r * scale,
      d: baseLayer.d * scale,
      rotation: baseLayer.rotation,
      waviness,
      waveFreq,
    };

    const path = buildSpirographPath(contourLayer, width, height);
    items.push({ path, color: contourColor, opacity: 0.3, blendMode: "multiply" });
  }

  return items;
}

function lcmRatio(R: number, r: number): number {
  // Number of full rotations needed to close the hypotrochoid
  // = R/r (simplified). We use a fixed large number of steps instead.
  // For rendering, we just go 0..2π * ceil(R/r) to ensure closure.
  const ratio = R / r;
  // Round to nearest integer multiple for closure (up to 20)
  const periods = Math.min(Math.ceil(ratio), 20);
  return periods;
}

function buildLegacyRadialPaths(width: number, height: number): string[] {
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
  preset = "teal",
}: GuillocheProps) {
  const isRadial = variant === "radial";
  const selectedPreset = preset === "warm" ? PRESET_WARM : PRESET_TEAL;
  const composition: CompositionItem[] = isRadial
    ? buildGuillocheComposition(selectedPreset, width, height)
    : [];

  const simplePaths: string[] = isRadial
    ? []
    : variant === "legacy-radial"
    ? buildLegacyRadialPaths(width, height)
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
      {isRadial && (
        <defs>
          <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="30%" stopColor="white" stopOpacity="0.6" />
            <stop offset="60%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {isRadial
        ? composition.map((item, i) => (
            <g key={i} style={{ mixBlendMode: item.blendMode as React.CSSProperties["mixBlendMode"] }}>
              <path
                d={item.path}
                stroke={item.color}
                strokeWidth={0.5}
                strokeOpacity={item.opacity}
                fill="none"
              />
            </g>
          ))
        : simplePaths.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={color}
              strokeWidth={0.75}
              strokeOpacity={opacity}
              fill="none"
            />
          ))}
      {isRadial && (
        <circle cx={width / 2} cy={height / 2} r={width * 0.35} fill={`url(#glow-${variant})`} />
      )}
    </svg>
  );
}
