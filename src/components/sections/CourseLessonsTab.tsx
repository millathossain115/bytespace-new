"use client";

import React from "react";
import { Video } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseLessonsTabProps {
  course: CourseItem;
}

export function CourseLessonsTab({ course }: CourseLessonsTabProps) {
  const percentage = parseInt(course.progressPercentage || "55%") || 55;

  return (
    <div className="space-y-10 text-zinc-800">
      {/* 1. Explore the Modules Overview */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-poppins text-zinc-900">
          Explore the Modules
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-satoshi">
          {course.modulesOverview ||
            "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences."}
        </p>
      </div>

      {/* 2. Lesson List / Modules */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold font-poppins text-zinc-900 mb-5">
          Lesson List
        </h3>
        <div className="space-y-4">
          {course.modules && course.modules.length > 0 ? (
            course.modules.map((mod, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#D4FB20] flex items-center justify-center shrink-0 shadow-2xs">
                  <Video className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 font-poppins">
                    {mod.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed font-satoshi">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-zinc-500">
              Module breakdown is currently being updated.
            </p>
          )}
        </div>
      </div>

      {/* 3. Lesson Content Text */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold font-poppins text-zinc-900">
          Lesson Content
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-satoshi">
          {course.lessonContentText ||
            "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes."}
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold font-poppins text-zinc-900">
          Lesson Progress Tracking
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 font-satoshi">
          {course.progressTrackingText ||
            "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey."}
        </p>

        {/* Learning Progress Card */}
        <div className="mt-6 p-6 sm:p-7 rounded-[24px] bg-white border border-slate-200/90 shadow-2xs">
          <p className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            Learning Progress
          </p>
          <div className="mt-2 text-3xl sm:text-4xl font-black font-poppins text-zinc-900">
            {course.progressPercentage || "55%"}
          </div>

          {/* Progress Bar Container */}
          <div className="mt-4 h-3.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#D4FB20] transition-all duration-700 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
