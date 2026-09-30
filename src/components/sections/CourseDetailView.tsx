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
        </div>
      </section>

      {/* ───── CONTENT: Video + Sidebar + Tabs — pulled up into the blue area ───── */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 -mt-36 sm:-mt-48 lg:-mt-60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─── Left Column: Video Card + Tabs ─── */}
          <div className="lg:col-span-8">
            {/* Video Preview Card */}
            <div className="relative aspect-video w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl" style={{ border: 'none' }}>
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
            </div>

            {/* Tab Navigation Pill Group */}
            <div className="mt-8 flex items-center gap-3">
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

            {/* Tab Views Content */}
            <div className="mt-8 pb-12 sm:pb-16">
              {activeTab === "about" && <CourseAboutTab course={course} />}
              {activeTab === "lessons" && <CourseLessonsTab course={course} />}
              {activeTab === "reviews" && <CourseReviewsTab course={course} />}
            </div>
          </div>

          {/* ─── Right Column: Enrollment Sidebar ─── */}
          {/* Starts at same height as video, overlaps both blue hero and white content */}
          <div className="lg:col-span-4 relative z-30">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[28px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl text-zinc-900">
                {/* Header: Total lessons + duration */}
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-zinc-900">
                  {course.totalLessonsInfo || `${course.lessons} (${course.duration})`}
                </h3>

                {/* Lesson Preview Snippets */}
                <div className="mt-5 space-y-4 divide-y divide-slate-100">
                  {course.lessonsList?.slice(0, 3).map((item) => (
                    <div key={item.id} className="pt-4 first:pt-0 flex items-start justify-between gap-3 text-xs sm:text-[13px]">
                      <span className="font-medium text-zinc-700 leading-relaxed font-satoshi">
                        {item.id} {item.title}
                      </span>
                      <span className="text-[#0052FF] font-semibold shrink-0 font-satoshi mt-0.5">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs text-zinc-400 font-satoshi">
                  + {Math.max(10, parseInt(course.lessons) - 3 || 12)} more videos
                </p>

                {/* Callout */}
                <p className="mt-5 text-xs text-zinc-500 leading-relaxed font-satoshi">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#0052FF] font-poppins">
                    {course.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium font-satoshi">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-poppins">
                    This course include
                  </h4>
                  <ul className="mt-3.5 space-y-3 text-xs text-zinc-600 font-medium font-satoshi">
                    <li className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#0052FF] shrink-0" />
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-[#0052FF] shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#0052FF] shrink-0" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Headphones className="w-4 h-4 text-[#0052FF] shrink-0" />
                      <span>Private Consultation</span>
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
                    <h5 className="text-sm font-bold text-zinc-900 font-poppins">
                      {course.instructor}
                    </h5>
                    <p className="text-xs text-zinc-500 font-satoshi">{course.instructorRole}</p>
                  </div>
                </div>

                {/* Ready to dive in secondary prompt */}
                <p className="mt-5 text-xs text-zinc-500 leading-relaxed font-satoshi">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="mt-4">
                  <Link
                    href="/creators"
                    className="inline-block py-2 px-5 rounded-full border border-slate-200 text-center text-xs font-semibold text-zinc-700 hover:bg-slate-50 transition"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
