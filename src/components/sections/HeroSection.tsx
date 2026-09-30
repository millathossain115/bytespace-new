"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { CategoryStatCard } from "@/components/ui/CategoryStatCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";

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
    "/students/Ellipse (7).png",
  ];

  return (
    <section className="relative w-full bg-[#0052FF] overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-0">
      {/* Background White Exact 12-Column Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100vw / 12) calc(100vw / 12)",
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

      {/* 2. Left middle white spring/zigzag */}
      <div className="absolute left-[16%] sm:left-[19%] lg:left-[21%] top-[380px] sm:top-[400px] lg:top-[410px] w-[90px] sm:w-[130px] lg:w-[160px] pointer-events-none select-none z-10 rotate-[-12deg]">
        <Image
          src="/shapes/Spiral-White.png"
          alt="White Spiral Shape"
          width={160}
          height={160}
          className="w-full h-auto drop-shadow-md"
        />
      </div>

      {/* 3. Left bottom white donut ring: lowered size to 290px and placed a bit right */}
      <div className="absolute left-[0px] sm:left-[3%] lg:left-[6%] bottom-[20px] sm:bottom-[35px] lg:bottom-[45px] w-[180px] sm:w-[230px] lg:w-[290px] pointer-events-none select-none z-10 -rotate-[22deg]">
        <Image
          src="/shapes/Cone-White.png"
          alt="White Donut Ring Shape"
          width={290}
          height={290}
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
        <div className="relative mt-6 sm:mt-8 lg:mt-10 w-full max-w-[1240px] flex justify-center items-end">
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

          {/* Student Cutout Image (Hero.png) - naturally larger size anchored to bottom */}
          <div className="relative z-10 w-[450px] sm:w-[600px] lg:w-[750px] mx-auto">
            <Image
              src="/Heros/Hero.png"
              alt="Smiling Student with Laptop and Headset"
              width={750}
              height={702}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* FLOATING CARD 1: UI/UX Design (Left of student's shoulder) */}
          <CategoryStatCard
            className="absolute left-[3%] sm:left-[8%] lg:left-[16%] top-[34%] sm:top-[36%] z-30 hidden sm:block"
          />

          {/* FLOATING CARD 2: Learning Progress 55% (Right of student's shoulder) */}
          <LearningProgressCard
            className="absolute right-[3%] sm:right-[8%] lg:right-[15%] top-[35%] sm:top-[37%] z-30 hidden sm:block"
          />

          {/* FLOATING CARD 3: Happy Students (Overlapping bottom left of student) */}
          <HappyStudentsCard
            avatars={studentAvatars}
            className="absolute left-[6%] sm:left-[12%] lg:left-[21%] bottom-[8%] sm:bottom-[10%] z-30"
          />
        </div>
      </div>
    </section>
  );
}
