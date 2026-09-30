"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  Check
} from "lucide-react";
import { CourseItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { CourseAboutTab } from "./CourseAboutTab";
import { CourseLessonsTab } from "./CourseLessonsTab";
import { CourseReviewsTab } from "./CourseReviewsTab";
import { CourseEnrollmentSidebar } from "./CourseEnrollmentSidebar";

interface CourseDetailViewProps {
  course: CourseItem;
}

export function CourseDetailView({ course }: CourseDetailViewProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* ───── BLUE HERO SECTION ───── */}
      <section className="relative w-full bg-[#0052FF] pt-24 sm:pt-28 pb-40 sm:pb-52 lg:pb-64 text-white overflow-hidden">
        {/* Background Grid Pattern */}
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header row: Title + Share button */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white tracking-tight">
                {course.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90 font-satoshi">
                {course.subtitle}
              </p>
              <p className="mt-3 text-sm text-white/80 font-satoshi">
                by{" "}
                <Link
                  href="/creators"
                  className="font-medium text-white hover:underline cursor-pointer underline-offset-2"
                >
                  {course.instructor}
                </Link>
              </p>

              {/* Badges: Level, Rating, Students */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <BarChart2 className="w-4 h-4 text-[#0052FF]" />
                  <span>{course.level}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <Star className="w-4 h-4 fill-[#0052FF] text-[#0052FF]" />
                  <span>
                    {course.rating} ({course.reviewsCount} reviews)
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <Users className="w-4 h-4 text-[#0052FF]" />
                  <span>{course.studentsCount}</span>
                </span>
              </div>
            </motion.div>

            {/* Share Button Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="shrink-0"
            >
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-black font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── CONTENT: Video + Sidebar + Tabs — pulled up into the blue area ───── */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 -mt-36 sm:-mt-48 lg:-mt-60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─── Left Column: Video Card + Tabs ─── */}
          <div className="lg:col-span-8">
            {/* Video Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-video w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl"
              style={{ border: 'none' }}
            >
              <Image
                src={course.videoPreviewImage || course.image}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />

              {/* Play Button Overlay */}
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/45 transition-all group cursor-pointer"
                  aria-label="Play video preview"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-zinc-900 text-zinc-900 ml-1" />
                  </div>
                </button>
              ) : (
                <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-white p-6 text-center">
                  <p className="text-lg font-bold font-poppins">Interactive Video Preview Active</p>
                  <p className="text-sm text-zinc-400 mt-2 font-satoshi">
                    Full high-definition lessons available upon enrollment.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-slate-100 transition cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              )}
            </motion.div>

            {/* Tab Navigation Pill Group */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  activeTab === "about"
                    ? "bg-[#D4FB20] text-black shadow-md font-bold border-transparent"
                    : "bg-[#EBEBEB] text-zinc-500 border-transparent hover:bg-[#E0E0E0] hover:text-zinc-700"
                }`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("lessons")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  activeTab === "lessons"
                    ? "bg-[#D4FB20] text-black shadow-md font-bold border-transparent"
                    : "bg-[#EBEBEB] text-zinc-500 border-transparent hover:bg-[#E0E0E0] hover:text-zinc-700"
                }`}
              >
                Lessons
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  activeTab === "reviews"
                    ? "bg-[#D4FB20] text-black shadow-md font-bold border-transparent"
                    : "bg-[#EBEBEB] text-zinc-500 border-transparent hover:bg-[#E0E0E0] hover:text-zinc-700"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* Tab Views Content with Animated Transition */}
            <div className="mt-8 pb-12 sm:pb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {activeTab === "about" && <CourseAboutTab course={course} />}
                  {activeTab === "lessons" && <CourseLessonsTab course={course} />}
                  {activeTab === "reviews" && <CourseReviewsTab course={course} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ─── Right Column: Enrollment Sidebar with Entrance Animation ─── */}
          {/* Starts at same height as video, overlaps both blue hero and white content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative z-30"
          >
            <div className="lg:sticky lg:top-24">
              <CourseEnrollmentSidebar course={course} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
