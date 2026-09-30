"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseReviewsTabProps {
  course: CourseItem;
}

export function CourseReviewsTab({ course }: CourseReviewsTabProps) {
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const distribution = course.ratingDistribution || [
    { stars: 5, count: 120, percentage: 75 },
    { stars: 4, count: 25, percentage: 16 },
    { stars: 3, count: 8, percentage: 5 },
    { stars: 2, count: 4, percentage: 3 },
    { stars: 1, count: 2, percentage: 1 },
  ];

  const allReviews = course.courseReviews || [
    {
      id: "rev-default-1",
      author: "PurePearl Studio",
      role: "UX/UI Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "1 year ago",
      comment:
        "The course provided me with a comprehensive understanding of practical digital creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: "rev-default-2",
      author: "Albert Flores",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "1 year ago",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "rev-default-3",
      author: "Cody Fisher",
      role: "Interaction Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      date: "1 year ago",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "rev-default-4",
      author: "Brooklyn Simmons",
      role: "Visual Creator",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 4,
      date: "1 year ago",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  const filteredReviews =
    filterRating === "all"
      ? allReviews
      : allReviews.filter((r) => r.rating === filterRating);

  return (
    <div className="space-y-10 text-zinc-800">
      {/* 1. What Learners Are Saying */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-poppins text-zinc-900">
          What Learners Are Saying
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-satoshi">
          Discover what our learners have to say about their experience with &quot;{course.title}&quot;. Read reviews and ratings from individuals who have embarked on this transformative journey.
        </p>
      </div>

      {/* 2. Rating Breakdown Card */}
      <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        {/* Left Big Rating Box (Lime colored background) */}
        <div className="md:col-span-3 flex justify-center md:justify-start">
          <div className="w-[125px] h-[125px] rounded-[20px] bg-[#D4FB20] flex flex-col items-center justify-center text-center shadow-xs">
            <span className="text-[11px] font-medium text-zinc-700 tracking-tight">
              Ratings
            </span>
            <span className="text-4xl font-extrabold font-poppins text-zinc-950 mt-0.5">
              {course.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Right Star Breakdown Bars */}
        <div className="md:col-span-9 space-y-2">
          {distribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-4 text-xs font-semibold text-zinc-600">
              {/* Progress Bar Container */}
              <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#D4FB20] transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              {/* 5 Star Icons */}
              <div className="flex items-center gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < item.stars
                        ? "fill-zinc-800 text-zinc-800"
                        : "text-zinc-200"
                    }`}
                  />
                ))}
              </div>

              {/* Count */}
              <span className="w-9 text-right font-normal text-xs text-zinc-500 font-satoshi">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Individual Reviews with Filter Buttons */}
      <div>
        <h3 className="text-base sm:text-lg font-bold font-poppins text-zinc-900 mb-4">
          Individual Reviews:
        </h3>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setFilterRating("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filterRating === "all"
                ? "bg-[#D4FB20] text-black shadow-xs font-bold"
                : "bg-white text-zinc-700 hover:bg-slate-50 border border-slate-200/90"
            }`}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() => setFilterRating(stars)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterRating === stars
                  ? "bg-[#D4FB20] text-black shadow-xs font-bold"
                  : "bg-white text-zinc-700 hover:bg-slate-50 border border-slate-200/90"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{stars}</span>
            </button>
          ))}
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs space-y-3"
              >
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 font-poppins">
                        {rev.author}
                      </h4>
                      <p className="text-xs text-zinc-500 font-satoshi">
                        {rev.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 font-normal font-satoshi shrink-0">
                    {rev.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 pt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? "fill-zinc-900 text-zinc-900"
                          : "text-zinc-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-satoshi pt-1">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-zinc-500 py-4">
              No reviews found for this star rating.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
