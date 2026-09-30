"use client";

import Link from "next/link";
import {
  type Decoration,
  Decorations,
  fromEdge,
  fromFrame,
} from "@/components/ui/Decorations";

// Exact Figma px relative to CTA section top (page y 4580)
const decorations: Decoration[] = [
  {
    src: "/shapes/Cone-Triangle-Lime.png",
    w: 499,
    h: 549,
    left: fromFrame(1105.4),
    top: 21.7,
    width: 124.7,
  },
  {
    src: "/shapes/Spiral-lime-CTA.png",
    w: 495,
    h: 649,
    left: fromFrame(1179.5),
    bottom: 0,
    width: 220,
  },
  {
    src: "/shapes/Spiral Lime-CTA.png",
    w: 563,
    h: 598,
    left: "0px",
    top: 0,
    width: 220,
  },
  {
    src: "/shapes/Spiral-White CTA.png",
    w: 704,
    h: 704,
    left: fromFrame(178.8),
    top: 5,
    width: 176,
  },
  {
    src: "/shapes/Cone-Triangle-CTA.png",
    w: 512,
    h: 609,
    left: fromEdge(-13.5),
    top: 242,
    width: 128,
  },
  {
    src: "/shapes/Cine-Lime CTA.png",
    w: 952,
    h: 872,
    left: fromFrame(69.5),
    top: 358.3,
    width: 238.1,
  },
  {
    src: "/shapes/Cone-White-Rectangle CTA.png",
    w: 1093,
    h: 1198,
    right: fromEdge(-104.1),
    top: 40.9,
    width: 273.2,
  },
];

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#0052FF] px-5 py-20 text-center text-white md:px-8 lg:h-[488px] lg:pt-[86px] lg:pb-0"
    >
      {/* Background White Exact 12-Column Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Pinned 3D Shapes */}
      <Decorations items={decorations} className="h-full" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-[980px]">
        <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
          Unlock Your Potential as a
          <br className="hidden md:block" /> Creator with ByteSpace
        </h2>

        <p className="mt-6 text-base leading-[1.6] md:text-lg lg:mt-[39px] text-white/90">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a
          <br className="hidden lg:block" /> part of a community comprising over
          10,000 local and international creators. Utilize our Course Editor,
          and showcase your expertise by publishing your finest course on the
          ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center lg:mt-[41px]">
          <Link
            href="/signup"
            className="inline-grid h-[46px] w-[172px] place-items-center rounded-full bg-[#D4FB20] text-base font-semibold text-zinc-950 transition-transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
