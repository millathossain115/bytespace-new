"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChartNoAxesColumnIncreasing } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseCardProps {
  course: CourseItem;
  studentAvatars?: string[];
  interactive?: boolean;
}

export function CourseCard({
  course,
  studentAvatars = [],
  interactive = true,
}: CourseCardProps) {
  const [imgSrc, setImgSrc] = useState(course.image);

  const meta = [
    course.lessons,
    course.duration,
    course.comments,
  ];

  return (
    <article
      className={`min-w-0 rounded-[24px] border border-zinc-200/90 bg-white p-[15px] flex flex-col justify-between ${
        interactive
          ? "group shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          : "shadow-none"
      }`}
    >
      <div>
        {/* Course Top Image & Overlaid Badges */}
        {interactive ? (
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
        ) : (
          <div className="relative block aspect-[341/195] w-full overflow-hidden rounded-xl bg-zinc-100">
            <Image
              src={imgSrc}
              alt={course.title}
              fill
              sizes="(min-width: 1024px) 341px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
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
          </div>
        )}

        {/* Title & Rating */}
        <div className="mt-[19px] flex items-start justify-between gap-3">
          {interactive ? (
            <Link
              href={`/courses/${course.id}`}
              className="flex-1 hover:text-[#0052FE] transition-colors"
            >
              <h3 className="line-clamp-1 font-poppins text-lg sm:text-[19px] font-semibold text-zinc-900 group-hover:text-[#0052FE]">
                {course.title}
              </h3>
            </Link>
          ) : (
            <h3 className="flex-1 line-clamp-1 font-poppins text-lg sm:text-[19px] font-semibold text-zinc-900">
              {course.title}
            </h3>
          )}
          {/* Muted neutral grey star from design */}
          <p className="flex shrink-0 items-center gap-1 text-base font-semibold text-zinc-600">
            <span>{course.rating}</span>
            <Star aria-hidden size={18} className="fill-[#C5C9D0] text-[#C5C9D0]" />
            <span className="sr-only">out of 5</span>
          </p>
        </div>

        {/* Author Subtitle */}
        <p className="mt-1 text-xs text-zinc-500">
          by{" "}
          {interactive ? (
            <Link
              href="/creators"
              className="font-medium text-[#0052FE] hover:underline cursor-pointer"
            >
              purepearl studio
            </Link>
          ) : (
            <span className="font-medium text-[#0052FE]">purepearl studio</span>
          )}
        </p>

        {/* Level badge + left-aligned avatars cluster with 26+ chip on top */}
        <div className="mt-[18px] flex items-center justify-start gap-3">
          <span className="flex h-8 items-center gap-2 rounded-full bg-[#F4F4F6] px-4 text-xs sm:text-sm font-medium text-zinc-800">
            <ChartNoAxesColumnIncreasing aria-hidden size={15} strokeWidth={2.2} />
            {course.level}
          </span>

          {/* Student Avatars cluster: images first, 26+ chip on the right */}
          <div className="relative flex items-center">
            {studentAvatars.map((url, i) => (
              <div
                key={i}
                className="relative size-8 shrink-0 -mr-2 overflow-hidden rounded-full"
                style={{ zIndex: i }}
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
            <span
              className="relative grid size-8 shrink-0 place-items-center rounded-full bg-[#D4FB20] text-xs font-semibold text-zinc-950"
              style={{ zIndex: studentAvatars.length + 1 }}
            >
              26+
            </span>
          </div>
        </div>
      </div>

      {/* Price without view details button */}
      <div className="mt-4 pt-1 flex items-baseline">
        <p className="text-xs text-zinc-500">
          <span className="font-poppins text-2xl font-bold text-[#0052FE] mr-0.5">
            {course.price}
          </span>
          {course.period}
        </p>
      </div>
    </article>
  );
}
