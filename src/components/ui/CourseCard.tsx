"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChartNoAxesColumnIncreasing } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseCardProps {
  course: CourseItem;
  studentAvatars?: string[];
}

export function CourseCard({ course, studentAvatars = [] }: CourseCardProps) {
  const [imgSrc, setImgSrc] = useState(course.image);

  const meta = [
    course.lessons,
    course.duration,
    course.comments,
  ];

  return (
    <article className="group min-w-0 rounded-[24px] border border-zinc-200/90 bg-white p-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Course Top Image & Overlaid Badges */}
        <Link
          href={`/courses/${course.id}`}
          className="relative block aspect-[341/195] w-full overflow-hidden rounded-xl bg-zinc-100 cursor-pointer"
        >
          <Image
            src={imgSrc}
            alt={course.title}
            fill
            sizes="(min-width: 1024px) 341px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => {
              setImgSrc("/courses/Learn Figma from Basic.webp");
            }}
          />
          {/* Overlaid Badges pill list */}
          <ul className="absolute inset-x-[13px] bottom-[14px] flex flex-wrap items-center gap-x-2 gap-y-1.5 z-10">
            {meta.map((item, index) => (
              <li
                key={index}
                className="flex h-[26px] items-center whitespace-nowrap rounded-full bg-[#f6f6f6]/80 px-2.5 sm:px-3 text-[11px] font-medium text-zinc-800 backdrop-blur-md shadow-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </Link>

        {/* Title & Rating */}
        <div className="mt-[19px] flex items-start justify-between gap-3">
          <Link
            href={`/courses/${course.id}`}
            className="flex-1 hover:text-[#0052FE] transition-colors"
          >
            <h3 className="line-clamp-1 font-poppins text-lg sm:text-[19px] font-semibold text-zinc-900 group-hover:text-[#0052FE]">
              {course.title}
            </h3>
          </Link>
          <p className="flex shrink-0 items-center gap-1 text-base font-semibold text-zinc-600">
            <span>{course.rating}</span>
            <Star aria-hidden size={16} className="fill-[#FBBF24] text-[#FBBF24]" />
            <span className="sr-only">out of 5</span>
          </p>
        </div>

        {/* Author Subtitle */}
        <p className="mt-1 text-xs text-zinc-500">
          by{" "}
          <Link
            href="/creators"
            className="font-medium text-[#0052FE] hover:underline cursor-pointer"
          >
            {course.instructor}
          </Link>
        </p>

        {/* Level & Student Avatars */}
        <div className="mt-[18px] flex items-center justify-between">
          <span className="flex h-8 items-center gap-2 rounded-full bg-zinc-100 px-3.5 text-xs sm:text-sm font-semibold text-zinc-700">
            <ChartNoAxesColumnIncreasing aria-hidden size={15} strokeWidth={2.2} />
            {course.level}
          </span>

          <div className="flex items-center -space-x-2">
            {studentAvatars.map((url, i) => (
              <div
                key={i}
                className="relative size-8 overflow-hidden rounded-full border-2 border-white shadow-xs"
              >
                <Image
                  src={url}
                  alt="Student"
                  width={32}
                  height={32}
                  className="size-full object-cover"
                />
              </div>
            ))}
            <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#D4FB20] text-xs font-bold text-black shadow-xs">
              26+
            </span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 pt-1 flex items-center justify-between">
        <p className="text-xs text-zinc-500">
          <span className="font-poppins text-xl font-bold text-[#0052FE] mr-1">
            {course.price}
          </span>
          {course.period}
        </p>

        <Link
          href={`/courses/${course.id}`}
          className="text-xs font-bold text-[#0052FE] hover:underline"
        >
          View Details &rarr;
        </Link>
      </div>
    </article>
  );
}
