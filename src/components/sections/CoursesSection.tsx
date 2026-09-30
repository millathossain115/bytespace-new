"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CourseCard } from "@/components/ui/CourseCard";
import { coursesData } from "@/data/courses";

// 3 Filter Pill Rows exactly matching user uploaded layout image
const CATEGORY_ROWS = [
  // Row 1
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  // Row 2
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  // Row 3
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
];

const STUDENT_AVATARS = [
  "/students/Ellipse (1).png",
  "/students/Ellipse (2).png",
  "/students/Ellipse (3).png",
  "/students/Ellipse (4).png",
];

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses =
    activeCategory === "Featured"
      ? coursesData.slice(0, 6)
      : coursesData.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.categories?.some(
              (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
            )
        );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : coursesData.slice(0, 6);

  return (
    <section id="courses" className="px-5 pt-[73px] pb-16 md:px-8 bg-white">
      <div className="mx-auto max-w-[1320px] text-center">
        {/* Section Header */}
        <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-zinc-900 md:text-[44px]">
          Discover Your Passion,
          <br /> Build Your Skills
        </h2>
        <p className="mx-auto mt-[15px] max-w-[910px] text-base leading-[1.6] text-zinc-500 md:text-lg">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* 3 Filter Pill Rows (Exact Match to Image) */}
        <div className="mt-[42px] flex flex-col items-center gap-[18px]">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <ul
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-3"
            >
              {row.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`flex h-[44px] items-center rounded-full px-5 text-sm md:text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#D4FB20] text-zinc-950 font-semibold shadow-xs"
                          : "bg-[#F4F4F6] text-zinc-700 hover:bg-zinc-200/80"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
              {rowIndex === CATEGORY_ROWS.length - 1 && (
                <li className="flex h-[44px] items-center pl-2 text-[15px] font-semibold text-[#0052FE]">
                  <Link href="/courses" className="hover:underline cursor-pointer">
                    + More
                  </Link>
                </li>
              )}
            </ul>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-[77px] grid gap-[41px] text-left md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              studentAvatars={STUDENT_AVATARS}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
