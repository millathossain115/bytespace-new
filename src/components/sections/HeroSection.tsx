"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import {
  type Decoration,
  Decorations,
  fromEdge,
  fromFrame,
} from "@/components/ui/Decorations";
import { CategoryStatCard } from "@/components/ui/CategoryStatCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";

// Exact 1440px Figma coordinates from reference
const decorations: Decoration[] = [
  {
    src: "/shapes/Spiral-Lime.png",
    w: 240,
    h: 320,
    left: fromEdge(0),
    top: 117,
    width: 265,
  },
  {
    src: "/shapes/Spiral-White.png",
    w: 160,
    h: 160,
    left: fromFrame(184),
    top: 373,
    width: 176,
  },
  {
    src: "/shapes/Cone-White.png",
    w: 290,
    h: 290,
    left: fromFrame(14),
    top: 577,
    width: 344,
  },
  {
    src: "/shapes/Cone-lime-Rectangle.png",
    w: 240,
    h: 340,
    right: fromEdge(0),
    top: 116,
    width: 213,
  },
  {
    src: "/shapes/Cone-Triangle.png",
    w: 140,
    h: 140,
    left: fromFrame(1104),
    top: 360,
    width: 190,
  },
  {
    src: "/shapes/Spiral_White-Bigpng.png",
    w: 331,
    h: 331,
    left: fromFrame(1124),
    top: 568,
    width: 316,
  },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#0052FF] overflow-hidden lg:h-[920px]">
      {/* Background White 12-Column Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100vw / 12) calc(100vw / 12)",
        }}
      />

      {/* Main Hero Header Text & Search Form */}
      <div className="relative z-20 mx-auto flex max-w-[920px] flex-col items-center px-5 pt-28 sm:pt-32 lg:pt-[104px] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins text-[40px] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:text-[72px] md:leading-[1.2]"
        >
          Get Access to Hundreds
          <br className="hidden md:block" /> Courses Available
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-[900px] text-base leading-[1.6] text-white/90 md:text-lg"
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="search"
          onSubmit={handleSearch}
          className="mt-10 flex w-full max-w-[581px] items-center gap-4 md:mt-[66px]"
        >
          <label className="sr-only" htmlFor="course-search">
            Search courses
          </label>
          <div className="relative min-w-0 flex-1">
            <Search
              aria-hidden
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              id="course-search"
              name="q"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="h-[52px] w-full rounded-full border-0 bg-white pl-12 pr-5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="h-[46px] w-[104px] shrink-0 rounded-full bg-[#D4FB20] font-semibold text-zinc-900 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
          >
            Search
          </button>
        </motion.form>
      </div>

      {/* Hero Stage: Centered 1150px Artboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0"
      >
        <div className="relative h-[514px] w-[1150px] shrink-0 overflow-hidden [zoom:0.46] sm:[zoom:0.75] lg:[zoom:1]">
          {/* Lime Arch Portal */}
          <motion.div
            aria-hidden
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.95 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[72px] left-0 size-[1149px] rounded-full border-[320px] border-[#D4FB20] pointer-events-none select-none opacity-95"
          />

          {/* Student Cutout */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-[265px] h-auto w-[722px] max-w-none pointer-events-none select-none"
          >
            <Image
              src="/Heros/Hero.webp"
              alt="Student learning online with a laptop and headphones"
              width={2888}
              height={2060}
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Floating UI/UX Design Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              x: { duration: 0.6, delay: 0.6 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            className="absolute top-[129px] left-[259px] z-30"
          >
            <CategoryStatCard className="h-[70px] w-[208px]" />
          </motion.div>

          {/* Floating Learning Progress Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.7 },
              x: { duration: 0.6, delay: 0.7 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
            }}
            className="absolute top-[141px] left-[697px] z-30"
          >
            <LearningProgressCard className="h-[131px] w-[232px]" />
          </motion.div>

          {/* Floating Happy Students Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8 },
              scale: { duration: 0.6, delay: 0.8 },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
            }}
            className="absolute top-[327px] left-[183px] z-30"
          >
            <HappyStudentsCard className="h-[121px] w-[258px]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating 3D Shapes pinned to 1440px artboard coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Decorations items={decorations} className="h-[920px]" />
      </motion.div>
    </section>
  );
}

