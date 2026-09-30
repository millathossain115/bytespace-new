"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";

export function GrowthAndCreationSection() {
  const learnerAvatars = [
    "/students/Ellipse (1).png",
    "/students/Ellipse (2).png",
    "/students/Ellipse (3).png",
  ];

  const studentAvatars = [
    "/students/Ellipse (4).png",
    "/students/Ellipse (5).png",
    "/students/Ellipse (6).png",
    "/students/Ellipse (7).png",
  ];

  const creatorBenefits = [
    "Comprehensive Course Creation Tools",
    "Streamlined Publishing and Marketing",
    "Monetization and Revenue Tracking",
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 lg:space-y-44">
        
        {/* ================= Part 1: Advance Your Career ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Advance Your Career. <br />
              Learn in Demand Skills.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-zinc-500 leading-relaxed">
              Upskilling and staying ahead of industry trends is crucial for professional growth. Whether you&apos;re looking to switch careers, climb the corporate ladder, or simply broaden your horizons, our courses are designed to equip you with the expertise needed to excel.
            </p>
          </div>

          {/* Right Visual Collage */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[560px] w-full max-w-[520px]">
              {/* Back Card: Course preview (Figma) */}
              <div className="absolute top-4 left-0 z-10 w-[240px] sm:w-[260px] rounded-[24px] border border-zinc-200/90 bg-white p-3.5 shadow-xl transition-transform duration-300 hover:scale-105">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-zinc-100">
                  <Image
                    src="/courses/Learn Figma from Basic.jpg"
                    alt="Course Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                    <span className="rounded-full bg-[#E2E8F0]/90 px-2 py-0.5 text-[9px] font-semibold text-zinc-800">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-[#E2E8F0]/90 px-2 py-0.5 text-[9px] font-semibold text-zinc-800">
                      2h 16m
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">
                    Learn Figma from Basic
                  </h4>
                  <div className="flex items-center gap-0.5 text-[11px] font-bold text-zinc-600">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>4.8</span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full bg-[#F4F7FE] px-3.5 py-1.5 text-xs font-semibold text-zinc-700">
                    <span>Beginner</span>
                  </div>

                  <span className="text-xl font-extrabold text-[#0052FE]">
                    $25<span className="text-xs text-zinc-400 font-normal">/lifetime</span>
                  </span>
                </div>
              </div>

              {/* 3D Lime Spiral (top-right background) */}
              <div className="absolute top-2 right-2 sm:right-6 w-36 sm:w-44 animate-float-slow z-10 pointer-events-none">
                <Image
                  src="/shapes/Spiral-Lime.png"
                  alt="3D Lime Spiral"
                  width={180}
                  height={240}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Student Image (Hero cutout anchored to bottom) */}
              <div className="absolute bottom-0 right-0 w-[420px] sm:w-[500px] lg:w-[540px] h-[390px] sm:h-[470px] lg:h-[520px] z-20 pointer-events-none">
                <Image
                  src="/Heros/Hero.png"
                  alt="Student learning"
                  width={577}
                  height={540}
                  className="h-full w-full object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card: Learning Progress (55%) */}
              <div className="absolute top-52 sm:top-60 right-0 z-30 min-w-[165px] sm:min-w-[190px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
                <p className="text-[11px] sm:text-xs font-medium text-zinc-500">
                  Learning Progress
                </p>
                <p className="mt-0.5 text-2xl sm:text-3xl font-extrabold text-zinc-900">
                  55%
                </p>
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-[#D2FF00]"
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Part 2: Create & Manage Courses ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual Collage */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative h-[596px] w-full max-w-[541px]">
              {/* Floating Card 1: Total Revenue (Blue) */}
              <div className="absolute top-6 left-0 z-10 rounded-[20px] bg-[#0052FE] p-4 text-white shadow-xl min-w-[165px] sm:min-w-[180px]">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Total Revenue</span>
                  <span className="text-[10px] text-white/60">July 1-28</span>
                </div>
                <p className="mt-1 text-lg sm:text-xl font-extrabold text-white">
                  $120.29
                </p>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full bg-[#D2FF00] rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Floating Card 2: Year to Date (Blue) */}
              <div className="absolute top-44 sm:top-48 left-0 z-10 rounded-[20px] bg-[#0052FE] p-4 text-white shadow-xl min-w-[150px] sm:min-w-[165px]">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Year to Date</span>
                  <span className="text-[10px] text-white/60">2023</span>
                </div>
                <p className="mt-1 text-lg sm:text-xl font-extrabold text-white">
                  $1,200.38
                </p>
                <span className="mt-2 inline-block rounded-full bg-[#D2FF00] px-2.5 py-0.5 text-[10px] font-extrabold text-black">
                  +12$
                </span>
              </div>

              {/* 3D Cone / Spiral Background Shape */}
              <div className="absolute top-28 right-0 sm:right-4 w-36 sm:w-44 animate-float-reverse z-0 pointer-events-none">
                <Image
                  src="/shapes/Cone-lime-Rectangle.png"
                  alt="3D Lime Shape"
                  width={180}
                  height={240}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Center Creator Image (public/creator/Image.png) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[400px] lg:w-[430px] z-20 pointer-events-none">
                <Image
                  src="/creator/Image.png"
                  alt="Course Creator"
                  width={500}
                  height={560}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card 3: Happy Students */}
              <div className="absolute bottom-6 right-0 sm:right-2 z-30 rounded-[22px] border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md min-w-[165px] sm:min-w-[180px]">
                <p className="text-xs sm:text-sm font-bold text-zinc-900">
                  Happy Students
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-[11px] sm:text-xs text-zinc-600">
                  <span className="font-semibold text-zinc-900">4.5</span>
                  <span>(240)</span>
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="mt-2.5 flex items-center -space-x-1.5">
                  {studentAvatars.map((url, i) => (
                    <div
                      key={i}
                      className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border-2 border-white shadow-xs"
                    >
                      <Image
                        src={url}
                        alt="Student"
                        width={28}
                        height={28}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] px-1.5 text-[9px] sm:text-[10px] font-bold text-black shadow-xs">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Checklist */}
          <div className="max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-zinc-500 leading-relaxed">
              <strong className="font-semibold text-zinc-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <div className="mt-8 space-y-4">
              {creatorBenefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#0052FE] text-white shadow-xs shrink-0">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-zinc-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
