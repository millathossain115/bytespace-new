"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CourseCard } from "@/components/ui/CourseCard";
import coursesDataRaw from "@/data/courses.json";
import { CourseItem } from "@/types";

const coursesData: CourseItem[] = coursesDataRaw as CourseItem[];

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
  "Web Development",
  "Data Science",
  "Productivity",
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
    <section id="courses" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-tight">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-zinc-950 font-semibold shadow-xs"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            );
          })}
          <Link
            href="/courses"
            className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-[#0052FE] hover:underline transition cursor-pointer"
          >
            + More
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
