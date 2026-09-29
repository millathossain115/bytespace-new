"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const studentAvatars = [
    "/students/Ellipse (1).png",
    "/students/Ellipse (2).png",
    "/students/Ellipse (3).png",
    "/students/Ellipse (4).png",
    "/students/Ellipse (5).png",
    "/students/Ellipse (6).png",
  ];

  return (
    <section className="relative w-full bg-[#0052FF] overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-0">
      {/* Background White Intense Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* FLOATING 3D SHAPES */}
      {/* 1. Left top lime spiral: aligned up with 2nd line of heading */}
      <div className="absolute -left-12 sm:-left-10 lg:-left-6 top-[170px] sm:top-[180px] lg:top-[190px] w-[140px] sm:w-[190px] lg:w-[220px] pointer-events-none select-none z-10 rotate-[4deg]">
        <Image
          src="/shapes/Spiral-Lime.png"
          alt="Lime Spiral Shape"
          width={240}
          height={320}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 2. Left middle white spring/zigzag: w-175 h-175 */}
      <div className="absolute left-[12%] sm:left-[14%] lg:left-[16%] top-[460px] sm:top-[480px] lg:top-[490px] w-[100px] sm:w-[140px] lg:w-[175px] pointer-events-none select-none z-10 rotate-[-12deg]">
        <Image
          src="/shapes/Spiral-White.png"
          alt="White Spiral Shape"
          width={175}
          height={175}
          className="w-full h-auto drop-shadow-md"
        />
      </div>

      {/* 3. Left bottom white donut ring: w-343 h-343 */}
      <div className="absolute left-[-20px] sm:left-[1%] lg:left-[3%] bottom-[20px] sm:bottom-[40px] lg:bottom-[50px] w-[200px] sm:w-[270px] lg:w-[343px] pointer-events-none select-none z-10 -rotate-[22deg]">
        <Image
          src="/shapes/Cone-White.png"
          alt="White Donut Ring Shape"
          width={343}
          height={343}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* 4. Right top lime cone/cylinder block: aligned up with 2nd line of heading */}
      <div className="absolute -right-8 sm:-right-6 lg:-right-4 top-[150px] sm:top-[160px] lg:top-[170px] w-[150px] sm:w-[200px] lg:w-[240px] pointer-events-none select-none z-10 rotate-[-6deg]">
        <Image
          src="/shapes/Cone-lime-Rectangle.png"
          alt="Lime Cylinder Shape"
          width={240}
          height={340}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* 5. Right middle white triangle pyramid: hovering above the big spiral */}
      <div className="absolute right-[11%] sm:right-[13%] lg:right-[14%] top-[470px] sm:top-[480px] lg:top-[490px] w-[90px] sm:w-[120px] lg:w-[140px] pointer-events-none select-none z-10 rotate-[8deg]">
        <Image
          src="/shapes/Cone-Triangle.png"
          alt="White Triangle Pyramid"
          width={140}
          height={140}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      {/* 6. Right bottom big white spiral: w-331.5 h-331.5 */}
      <div className="absolute right-[-20px] sm:right-[1%] lg:right-[2%] bottom-[10px] sm:bottom-[20px] lg:bottom-[30px] w-[190px] sm:w-[260px] lg:w-[331.5px] pointer-events-none select-none z-10 rotate-[-8deg]">
        <Image
          src="/shapes/Spiral_White-Bigpng.png"
          alt="White Big Spiral Shape"
          width={331.5}
          height={331.5}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col items-center text-center z-20">
        {/* Headings */}
        <h1 className="font-poppins font-semibold text-white text-[38px] sm:text-[52px] lg:text-[72px] leading-[1.1] tracking-[-0.02em] max-w-5xl mx-auto">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Caption: Satoshi Body L 18px line-height 160% single line */}
        <p className="mt-4 font-satoshi font-normal text-white/90 text-sm sm:text-base lg:text-[18px] leading-[1.6] max-w-none whitespace-normal lg:whitespace-nowrap mx-auto">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search: Separated button with lower height */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl justify-center">
          {/* Search Box */}
          <div className="w-full sm:flex-1 bg-white rounded-full h-[52px] px-6 flex items-center gap-3 shadow-lg">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-sm sm:text-[15px] font-satoshi outline-none"
            />
          </div>

          {/* Separated Search Button: lower height h-[44px] */}
          <button
            type="submit"
            className="w-full sm:w-auto h-[44px] px-8 rounded-full bg-[#D4FB20] text-black font-satoshi font-semibold text-sm sm:text-[15px] hover:bg-[#C2EB00] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer">
            Search
          </button>
        </form>

        {/* HERO IMAGE & ARCH DISPLAY WITH FLOATING BADGES */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20 w-full max-w-[1240px] flex justify-center items-end">
          {/* Green Lime Arch (Ellipse 7): w-1149 h-1149 */}
          <div className="absolute bottom-0 w-[720px] sm:w-[940px] lg:w-[1149px] pointer-events-none select-none z-0">
            <Image
              src="/shapes/Ellipse 7.png"
              alt="Lime Arch Portal"
              width={1149}
              height={1149}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </div>

          {/* Student Cutout Image (Hero.png) */}
          <div className="relative z-10 w-[360px] sm:w-[480px] lg:w-[580px] mx-auto">
            <Image
              src="/Heros/Hero.png"
              alt="Smiling Student with Laptop and Headset"
              width={580}
              height={580}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* FLOATING CARD 1: UI/UX Design (Left of student's shoulder) */}
          <div className="absolute left-[3%] sm:left-[8%] lg:left-[16%] top-[34%] sm:top-[36%] z-30 bg-white rounded-2xl px-5 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[160px] sm:min-w-[190px] hidden sm:block">
            <h4 className="font-clash font-bold text-slate-900 text-sm sm:text-[15px] leading-tight">
              UI/UX Design
            </h4>
            <p className="font-satoshi text-[11px] sm:text-xs text-slate-400 mt-1 whitespace-nowrap">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* FLOATING CARD 2: Learning Progress 55% (Right of student's shoulder) */}
          <div className="absolute right-[3%] sm:right-[8%] lg:right-[15%] top-[35%] sm:top-[37%] z-30 bg-white rounded-2xl p-5 sm:p-6 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[170px] sm:min-w-[210px] hidden sm:block">
            <span className="font-satoshi text-[12px] sm:text-[13px] text-slate-700 font-semibold">
              Learning Progress
            </span>
            <div className="font-clash font-bold text-slate-900 text-3xl sm:text-[40px] mt-1 tracking-tight leading-none">
              55%
            </div>
            {/* Progress Bar */}
            <div className="mt-3.5 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
            </div>
          </div>

          {/* FLOATING CARD 3: Happy Students (Overlapping bottom left of student) */}
          <div className="absolute left-[6%] sm:left-[12%] lg:left-[21%] bottom-[8%] sm:bottom-[10%] z-30 bg-white rounded-2xl px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] text-left min-w-[210px] sm:min-w-[230px]">
            <h4 className="font-clash font-bold text-slate-900 text-sm sm:text-[15px] leading-tight">
              Happy Students
            </h4>
            <div className="flex items-center gap-1.5 mt-1 font-satoshi text-xs text-slate-600">
              <span className="font-bold text-slate-900">4.5</span>
              <span className="text-slate-400">(240)</span>
              <span className="text-[#FBBF24]">★</span>
            </div>

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 mt-2.5 overflow-hidden">
              {studentAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={avatar}
                    alt={`Student ${idx + 1}`}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FB20] text-black font-satoshi font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
