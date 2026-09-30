"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";

export function AuthShowcase() {
  const studentAvatars = [
    "/students/Ellipse (1).png",
    "/students/Ellipse (2).png",
    "/students/Ellipse (3).png",
    "/students/Ellipse (4).png",
    "/students/Ellipse (5).png",
    "/students/Ellipse (6).png",
    "/students/Ellipse (7).png",
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[480px] select-none pointer-events-none">
      {/* 3D Shapes Around Showcase */}

      {/* 1. Yellow/Lime Torus Donut (Top Left) */}
      <div className="absolute -top-6 left-6 w-[78px] h-[78px] z-30 drop-shadow-xl animate-float-slow">
        <Image
          src="/shapes/Cone-lime-Rectangle.png"
          alt="Lime Torus"
          width={90}
          height={90}
          className="w-full h-full object-contain rotate-[-15deg]"
          priority
        />
      </div>

      {/* 2. Lime Triangle Pyramid (Bottom Left) */}
      <div className="absolute bottom-2 -left-4 w-[95px] h-[95px] z-30 drop-shadow-2xl animate-float-reverse">
        <Image
          src="/shapes/Cone-Triangle-Lime.png"
          alt="Lime Cone Triangle"
          width={110}
          height={110}
          className="w-full h-full object-contain -rotate-[12deg]"
          onError={(e) => {
            // fallback if shape name difference
            (e.target as HTMLImageElement).src = "/shapes/Cone-Triangle.png";
          }}
        />
      </div>

      {/* 3. White Spring/Spiral (Right middle edge) */}
      <div className="absolute top-[260px] right-2 sm:right-6 w-[80px] h-[100px] z-30 drop-shadow-md">
        <Image
          src="/shapes/Spiral-White.png"
          alt="White Spiral Spring"
          width={90}
          height={110}
          className="w-full h-full object-contain rotate-[18deg]"
        />
      </div>

      {/* Back Faded Course Card: Build Digital Asset (Left under card) */}
      <div className="absolute top-12 left-0 w-[300px] sm:w-[320px] bg-white/95 rounded-[24px] p-3.5 shadow-lg opacity-85 -rotate-2 z-10 border border-white/60">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-slate-100">
          <Image
            src="/courses/Build Digital Asset.jpg"
            alt="Build Digital Asset"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2">
            <span className="rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-medium text-slate-800 shadow-xs">
              17 Lessons
            </span>
          </div>
        </div>
        <div className="mt-2.5">
          <h4 className="font-poppins font-bold text-[15px] text-slate-900 leading-snug">
            Build Digital Asset
          </h4>
          <p className="text-[11px] text-slate-500 font-satoshi mt-0.5">
            by purepearl studio
          </p>
          <div className="mt-2.5 flex items-center justify-between">
            <div className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
              Beginner
            </div>
            <span className="text-base font-bold text-[#0052FE]">$25<span className="text-[10px] text-slate-500 font-normal">/lifetime</span></span>
          </div>
        </div>
      </div>

      {/* Front Focal Card: the Power of Big Data (Front Right) */}
      <div className="absolute top-4 right-2 sm:right-6 w-[310px] sm:w-[335px] bg-white rounded-[26px] p-4 shadow-[0_24px_50px_rgba(0,0,0,0.22)] z-20 border border-slate-100">
        {/* Card Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-950">
          <Image
            src="/courses/the Power of Big Data.avif"
            alt="the Power of Big Data"
            fill
            className="object-cover"
            priority
          />
          {/* Badges on bottom */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
            <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white/90 border border-white/10">
              17 Lessons
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white/90 border border-white/10">
              2 hours 16 mins
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white/90 border border-white/10">
              59 Comments
            </span>
          </div>
        </div>

        {/* Card Info */}
        <div className="mt-3.5">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-bold text-[16px] text-slate-900 leading-tight">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 text-[13px] font-bold text-slate-900">
              <span>4.5</span>
              <span className="text-[#FBBF24]">★</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 font-satoshi mt-0.5">
            by purepearl studio
          </p>

          <div className="mt-3.5 flex items-center justify-between">
            <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700">
              Beginner
            </div>
            {/* Student avatar mini stack */}
            <div className="flex items-center -space-x-1.5">
              {studentAvatars.slice(0, 4).map((url, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white overflow-hidden bg-slate-200"
                >
                  <Image
                    src={url}
                    alt="Student"
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black text-[9px] font-bold text-white">
                26+
              </span>
            </div>
          </div>

          {/* Pricing bottom */}
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-lg font-extrabold text-[#0052FE]">
                $25
              </span>
              <span className="text-[11px] text-slate-400 font-normal ml-0.5">
                /lifetime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Happy Students Card (Lime background style matching mock) */}
      <div className="absolute bottom-4 left-20 sm:left-24 z-25">
        <div className="bg-[#D4FB20] rounded-[22px] px-5 py-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] min-w-[210px] text-left">
          <h4 className="font-poppins font-bold text-slate-950 text-[14px] leading-tight">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5 font-satoshi text-xs text-slate-800">
            <span className="font-bold text-slate-950">4.5</span>
            <span className="text-slate-700">(240)</span>
            <span className="text-slate-900">★</span>
          </div>

          {/* Avatar stack with 2K+ badge */}
          <div className="flex items-center -space-x-1.5 mt-2 overflow-hidden">
            {studentAvatars.slice(0, 5).map((avatar, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border-2 border-[#D4FB20] overflow-hidden bg-white shrink-0"
              >
                <Image
                  src={avatar}
                  alt={`Student ${idx + 1}`}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-slate-950 text-white font-satoshi font-bold text-[9px] flex items-center justify-center border-2 border-[#D4FB20] shrink-0">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
