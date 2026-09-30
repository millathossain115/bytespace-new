"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Video,
  Award,
  Headphones,
} from "lucide-react";
import { CourseItem } from "@/types";

interface CourseEnrollmentSidebarProps {
  course: CourseItem;
}

export function CourseEnrollmentSidebar({ course }: CourseEnrollmentSidebarProps) {
  return (
    <div className="rounded-[28px] border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl text-zinc-900">
      {/* Header: Total lessons + duration */}
      <h3 className="font-poppins font-bold text-lg sm:text-xl text-zinc-900">
        {course.totalLessonsInfo || `${course.lessons} (${course.duration})`}
      </h3>

      {/* Lesson Preview Snippets */}
      <div className="mt-5 space-y-4 divide-y divide-slate-100">
        {course.lessonsList?.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="pt-4 first:pt-0 flex items-start justify-between gap-3 text-xs sm:text-[13px]"
          >
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
  );
}
