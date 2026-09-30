"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CourseCard } from "@/components/ui/CourseCard";
import { coursesData } from "@/data/courses";

// Two category rows following reference layout
const CATEGORY_ROWS = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media"],
  ["UI/UX Design", "Creative Marketing", "Cooking", "Web Development", "Data Science", "Productivity"],
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
      <div className="mx-auto max-w-[1200px] text-center">
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

        {/* 2 Filter Pill Rows */}
        <div className="mt-[42px] flex flex-col gap-[21px]">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <ul
              key={rowIndex}
              className="flex flex-wrap justify-center gap-x-4 gap-y-[14px]"
            >
              {row.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`flex h-[43px] items-center rounded-full px-[18px] text-sm md:text-base font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#D4FB20] text-zinc-950 shadow-xs"
                          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
              {rowIndex === CATEGORY_ROWS.length - 1 && (
                <li className="flex h-[43px] items-center px-2 text-base font-semibold text-[#0052FE]">
                  <Link href="/courses" className="hover:underline">
                    + More
                  </Link>
                </li>
              )}
            </ul>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-[77px] grid gap-[41px] text-left md:grid-cols-2 lg:grid-cols-3">
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
