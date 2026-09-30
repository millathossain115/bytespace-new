"use client";

import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
  return (
    <section id="cta" className="relative bg-[#0052FE] overflow-hidden py-24 sm:py-32">
      {/* Background White Exact 12-Column Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* 3D Floating Elements around the CTA banner */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10 select-none">
        {/* Top-Left Lime Spiral */}
        <div className="absolute -left-8 sm:left-2 lg:left-6 top-4 sm:top-6 w-28 sm:w-36 lg:w-44 animate-float-slow">
          <Image
            src="/shapes/Spiral-Lime.png"
            alt="Floating Spiral"
            width={180}
            height={240}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Mid-Top White Zigzag / Spring */}
        <div className="absolute left-24 sm:left-40 lg:left-52 top-8 sm:top-12 w-14 sm:w-18 lg:w-24 animate-float-reverse">
          <Image
            src="/shapes/Spiral-White.png"
            alt="Floating Zigzag"
            width={100}
            height={100}
            className="h-auto w-full object-contain drop-shadow-md"
          />
        </div>

        {/* Bottom-Left White Pyramid */}
        <div className="absolute left-3 sm:left-8 bottom-6 sm:bottom-10 w-20 sm:w-24 lg:w-28 animate-float-reverse">
          <Image
            src="/shapes/Cone-Triangle.png"
            alt="Floating Pyramid"
            width={110}
            height={110}
            className="h-auto w-full object-contain -rotate-45 drop-shadow-lg"
          />
        </div>

        {/* Bottom-Mid Lime Torus / Donut */}
        <div className="absolute left-20 sm:left-32 lg:left-44 -bottom-8 sm:-bottom-6 w-32 sm:w-40 lg:w-48 animate-float-slow">
          <Image
            src="/shapes/Cone-White.png"
            alt="Floating Donut Ring"
            width={180}
            height={180}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Top-Right Lime Cylinder */}
        <div className="absolute right-8 sm:right-16 lg:right-24 top-6 sm:top-10 w-24 sm:w-32 lg:w-36 animate-float-slow">
          <Image
            src="/shapes/Cone-lime-Rectangle.png"
            alt="Floating Cylinder"
            width={160}
            height={220}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Bottom-Right Big White Spiral */}
        <div className="absolute right-4 sm:right-10 lg:right-16 -bottom-6 sm:bottom-0 w-28 sm:w-36 lg:w-44 animate-float-reverse">
          <Image
            src="/shapes/Spiral_White-Bigpng.png"
            alt="Floating Spiral"
            width={180}
            height={180}
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-poppins font-extrabold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight sm:leading-[1.2]">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="font-satoshi mx-auto mt-6 max-w-3xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/signup"
            className="rounded-full bg-[#D4FB20] px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-bold text-black shadow-xl transition-all duration-200 hover:bg-[#C2EB00] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
