"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseCardProps {
  course: CourseItem;
  studentAvatars?: string[];
}

export function CourseCard({ course, studentAvatars = [] }: CourseCardProps) {
  const [imgSrc, setImgSrc] = useState(course.image);

  return (
    <div className="group flex flex-col justify-between rounded-[28px] border border-zinc-200/90 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Course Top Image & Badges */}
      <div>
        <Link
          href={`/courses/${course.id}`}
          className="block relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-zinc-100 cursor-pointer"
        >
          <Image
            src={imgSrc}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
            onError={() => {
              setImgSrc("/courses/Learn Figma from Basic.jpg");
            }}
          />

          {/* Overlaid Badges at bottom of image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1 sm:gap-1.5">
            <span className="rounded-full bg-[#E2E8F0]/90 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-xs backdrop-blur-md">
              {course.lessons}
            </span>
            <span className="rounded-full bg-[#E2E8F0]/90 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-xs backdrop-blur-md">
              {course.duration}
            </span>
            <span className="rounded-full bg-[#E2E8F0]/90 px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-xs backdrop-blur-md">
              {course.comments}
            </span>
          </div>
        </Link>

        {/* Title & Rating */}
        <div className="mt-5 flex items-center justify-between gap-2">
          <Link
            href={`/courses/${course.id}`}
            className="hover:text-[#0052FE] transition-colors flex-1"
          >
            <h3 className="text-lg sm:text-[19px] font-bold text-zinc-900 line-clamp-1 hover:text-[#0052FE] transition-colors">
              {course.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 shrink-0 text-sm sm:text-base font-semibold text-zinc-500">
            <span>{course.rating}</span>
            <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
          </div>
        </div>

        {/* Author Subtitle */}
        <p className="mt-1 text-sm text-zinc-500">
          by{" "}
          <Link
            href="/creators"
            className="font-medium text-[#0052FE] hover:underline cursor-pointer"
          >
            {course.instructor}
          </Link>
        </p>

        {/* Level & Student Avatars */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-[#F4F7FE] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-zinc-800">
            <BarChart2 className="h-4 w-4 text-zinc-800" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center -space-x-2">
            {studentAvatars.map((url, i) => (
              <div
                key={i}
                className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white shadow-xs"
              >
                <Image
                  src={url}
                  alt="Student"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-[#D2FF00] text-[10px] sm:text-xs font-bold text-black shadow-xs">
              26+
            </span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-5 flex items-center justify-between pt-2">
        <div>
          <span className="text-2xl font-extrabold text-[#0052FE]">
            {course.price}
          </span>
          <span className="text-xs sm:text-sm text-zinc-500 font-normal ml-0.5">
            {course.period}
          </span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="text-xs font-bold text-[#0052FE] hover:underline"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}
