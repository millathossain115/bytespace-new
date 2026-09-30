import Image from "next/image";
import type { CSSProperties } from "react";

// Calculations based on 1440px Figma centered artboard
const frameLeft = "calc(50% - 720px)";
const edge = `min(0px, ${frameLeft})`;

export const fromFrame = (x: number) => `calc(${frameLeft} + ${x}px)`;
export const fromEdge = (x: number) => `calc(${edge} + ${x}px)`;

export type Decoration = {
  src: string;
  w: number;
  h: number;
  left?: string;
  right?: string;
  top: number;
  width: number;
  rotate?: string;
};

export function Decorations({
  items,
  className = "",
}: {
  items: readonly Decoration[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 hidden overflow-hidden lg:block select-none z-10 ${className}`}
    >
      {items.map(({ src, w, h, rotate, ...position }) => (
        <div
          key={src + position.top}
          className="absolute h-auto max-w-none"
          style={{
            ...(position as CSSProperties),
            transform: rotate ? `rotate(${rotate})` : undefined,
          }}
        >
          <Image
            src={src}
            alt=""
            width={w}
            height={h}
            sizes={`${position.width}px`}
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export type Glow = {
  x: number;
  y: number;
  r: number;
  rgb: string;
  alpha: number;
};

export function Glows({ items }: { items: readonly Glow[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {items.map(({ x, y, r, rgb, alpha }) => (
        <div
          key={`${x}-${y}`}
          className="absolute rounded-full"
          style={{
            left: fromFrame(x - r),
            top: y - r,
            width: r * 2,
            height: r * 2,
            background: `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / ${alpha * 0.23}) 53%, rgb(${rgb} / ${alpha * 0.06}) 75%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}
