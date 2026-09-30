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
  FileText,
  Video,
  Award,
  Headphones,
  CheckCircle2,
  Calendar,
  Check
} from "lucide-react";
import { CourseItem } from "@/types";
import { CourseAboutTab } from "./CourseAboutTab";
import { CourseLessonsTab } from "./CourseLessonsTab";
import { CourseReviewsTab } from "./CourseReviewsTab";

interface CourseDetailViewProps {
  course: CourseItem;
}

export function CourseDetailView({ course }: CourseDetailViewProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("lessons");
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
      {/* 1. BLUE HERO SECTION */}
      <section className="relative w-full bg-[#0052FF] pt-28 sm:pt-32 pb-16 sm:pb-24 text-white overflow-hidden">
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
            <div className="max-w-3xl">
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
                {/* Level Badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <BarChart2 className="w-4 h-4 text-zinc-700" />
                  <span>{course.level}</span>
                </span>

                {/* Rating Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <Star className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                  <span>
                    {course.rating} ({course.reviewsCount} reviews)
                  </span>
                </span>

                {/* Students Badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs">
                  <Users className="w-4 h-4 text-zinc-700" />
                  <span>{course.studentsCount}</span>
                </span>
              </div>
            </div>

            {/* Share Button Top Right */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-black font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </div>

          {/* Video Preview Card Hero (Floating Halfway into Content) */}
          <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Big Preview Window */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl border-4 border-white/20">
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
                    <p className="text-lg font-bold">Interactive Video Preview Active</p>
                    <p className="text-sm text-zinc-400 mt-2">
                      Full high-definition lessons available upon enrollment.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold"
                    >
                      Close Preview
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sticky Enrollment Sidebar on Desktop */}
            <div className="lg:col-span-4">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-7 shadow-lg text-zinc-900">
                {/* Header: Total lessons + duration */}
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-zinc-900">
                  {course.totalLessonsInfo || `${course.lessons} (${course.duration})`}
                </h3>

                {/* Lesson Preview Snippets */}
                <div className="mt-4 space-y-3 divide-y divide-slate-100">
                  {course.lessonsList?.slice(0, 3).map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between text-xs sm:text-[13px]">
                      <span className="font-medium text-zinc-700 truncate pr-2">
                        {item.id} {item.title}
                      </span>
                      <span className="text-blue-600 font-semibold shrink-0">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs text-zinc-400">
                  + {Math.max(10, parseInt(course.lessons) - 3 || 12)} more videos
                </p>

                {/* Callout */}
                <p className="mt-5 text-xs text-zinc-500 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#0052FF]">
                    {course.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {course.period}
                  </span>
                </div>

                {/* Enroll Button */}
                <button
                  type="button"
                  className="mt-5 w-full py-3.5 px-6 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-98 text-black font-poppins font-bold text-sm text-center shadow-md transition-all cursor-pointer"
                >
                  Enroll Now
                </button>

                {/* This course includes */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    This course include
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-xs text-zinc-600 font-medium">
                    <li className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#0052FF]" />
                      <span>Learning Resources & Cheat Sheets</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-[#0052FF]" />
                      <span>Quality HD Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#0052FF]" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Headphones className="w-4 h-4 text-[#0052FF]" />
                      <span>Private Consultation & Community Access</span>
                    </li>
                  </ul>
                </div>

                {/* Instructor Card Mini */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-zinc-900">
                      {course.instructor}
                    </h5>
                    <p className="text-xs text-zinc-500">{course.instructorRole}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/creators"
                    className="block w-full py-2 rounded-full border border-slate-200 text-center text-xs font-semibold text-zinc-700 hover:bg-slate-50 transition"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TABS & CONTENT SECTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Left Content Area */}
          <div className="lg:col-span-8">
            {/* Tab Navigation Pill Group */}
            <div className="flex items-center gap-2.5 p-1.5 rounded-full bg-slate-100/90 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "about"
                    ? "bg-[#D4FB20] text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("lessons")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "lessons"
                    ? "bg-[#D4FB20] text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Lessons
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "reviews"
                    ? "bg-[#D4FB20] text-black shadow-xs font-bold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* Tab Views */}
            <div className="mt-8">
              {activeTab === "about" && <CourseAboutTab course={course} />}
              {activeTab === "lessons" && <CourseLessonsTab course={course} />}
              {activeTab === "reviews" && <CourseReviewsTab course={course} />}
            </div>
          </div>

          {/* Empty Right Column placeholder for large screens */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </section>
    </div>
  );
}
