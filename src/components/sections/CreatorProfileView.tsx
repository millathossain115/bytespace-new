"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  BarChart2,
  Folder,
  ArrowUpDown,
  ChevronDown,
  Check,
  Plus
} from "lucide-react";
import { Creator, CourseItem } from "@/types";
import { CourseCard } from "@/components/ui/CourseCard";

interface CreatorProfileViewProps {
  creator: Creator;
  courses: CourseItem[];
}

const CATEGORIES = [
  "All",
  "Featured",
  "UI/UX Design",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "Creative Marketing",
  "Cooking",
];

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const SORT_OPTIONS = [
  { label: "Most Relevant", value: "relevant" },
  { label: "Highest Rated", value: "rating" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export function CreatorProfileView({ creator, courses }: CreatorProfileViewProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSort, setSelectedSort] = useState("relevant");

  // Dropdown states
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter creator courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by Category
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(
        (c) =>
          c.category.toLowerCase() === selectedCategory.toLowerCase() ||
          c.categories?.some(
            (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
          )
      );
    }

    // Filter by Level
    if (selectedLevel && selectedLevel !== "All Levels") {
      result = result.filter(
        (c) => c.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    // Sorting
    if (selectedSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "price-asc") {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (selectedSort === "price-desc") {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [courses, selectedCategory, selectedLevel, selectedSort]);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* 1. BLUE HERO SECTION */}
      <section className="relative w-full bg-[#0052FF] pt-28 sm:pt-36 pb-16 sm:pb-20 text-white overflow-hidden">
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
          {/* Creator Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar with soft rounded square & slight pink/white border */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] overflow-hidden bg-rose-200 border-2 border-white/40 shadow-xl shrink-0">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Name, Badge, Role */}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  {creator.name}
                </h1>
                {creator.badge && (
                  <span className="px-3 py-1 rounded-full bg-[#D4FB20] text-black text-xs font-bold font-poppins shadow-xs">
                    {creator.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm sm:text-base text-white/90 font-satoshi">
                {creator.role}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div className="mt-6 max-w-3xl text-xs sm:text-sm leading-relaxed text-white/90 font-satoshi space-y-2 whitespace-pre-line">
            <p>{creator.bio}</p>
          </div>

          {/* Stats Badges & Follow Button */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            {/* Left Pill Badges: Products + Followers */}
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold shadow-xs">
                {courses.length} Products
              </span>
              <span className="px-5 py-2 rounded-full bg-white text-zinc-900 text-xs sm:text-sm font-bold shadow-xs">
                {creator.followersCount}
              </span>
            </div>

            {/* Right Lime Follow Button */}
            <div>
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold font-poppins shadow-md transition-all active:scale-95 cursor-pointer ${
                  isFollowing
                    ? "bg-white text-zinc-900 hover:bg-slate-100"
                    : "bg-[#D4FB20] hover:bg-[#C2EB00] text-black"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER CONTROLS BAR */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          {/* Left Buttons: Reset Filter, Level Dropdown, Category Dropdown */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Reset Filter Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLevel("All Levels");
                setSelectedSort("relevant");
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Reset Filter</span>
            </button>

            {/* Level Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLevelOpen(!isLevelOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition cursor-pointer"
              >
                <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedLevel}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isLevelOpen && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setIsLevelOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-xs text-left transition ${
                        selectedLevel === lvl
                          ? "font-bold text-[#0052FE] bg-blue-50"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition cursor-pointer"
              >
                <Folder className="w-3.5 h-3.5 text-slate-500" />
                <span>Category: {selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-xs text-left transition ${
                        selectedCategory === cat
                          ? "font-bold text-[#0052FE] bg-blue-50"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Sort Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {SORT_OPTIONS.find((s) => s.value === selectedSort)?.label}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setSelectedSort(opt.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-xs text-left transition ${
                      selectedSort === opt.value
                        ? "font-bold text-[#0052FE] bg-blue-50"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CREATOR COURSES GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 pb-24">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-base text-zinc-500 font-satoshi">
              No products found for this filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLevel("All Levels");
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
