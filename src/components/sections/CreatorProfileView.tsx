"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  BarChart2,
  Shapes,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus
} from "lucide-react";
import { Creator, CourseItem } from "@/types";
import { motion } from "framer-motion";
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

const CARDS_PER_PAGE = 6;

export function CreatorProfileView({ creator, courses }: CreatorProfileViewProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    return result;
  }, [courses, selectedCategory, selectedLevel]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / CARDS_PER_PAGE));
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  // Reset page on filter change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setIsCategoryOpen(false);
  };

  const handleLevelChange = (lvl: string) => {
    setSelectedLevel(lvl);
    setCurrentPage(1);
    setIsLevelOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12"
        >
          {/* Creator Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar with soft rounded square & slight pink/white border */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] overflow-hidden bg-rose-200 shadow-xl shrink-0"
            >
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                priority
                className="object-cover"
              />
            </motion.div>

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
        </motion.div>
      </section>

      {/* 2. FILTER CONTROLS BAR */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-4">
        <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-slate-200/80">
          {/* Filter Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsLevelOpen(false);
                setIsCategoryOpen(false);
              }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-zinc-700 transition cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-zinc-700" />
              <span>Filter</span>
            </button>

            {isFilterOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full px-4 py-2.5 text-xs text-left font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

          {/* Level Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsLevelOpen(!isLevelOpen);
                setIsFilterOpen(false);
                setIsCategoryOpen(false);
              }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-zinc-700 transition cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 text-zinc-700" />
              <span>Level</span>
            </button>

            {isLevelOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => handleLevelChange(lvl)}
                    className={`w-full px-4 py-2.5 text-xs text-left transition flex items-center justify-between ${
                      selectedLevel === lvl
                        ? "font-bold text-[#0052FF] bg-blue-50"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{lvl}</span>
                    {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-[#0052FF]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsFilterOpen(false);
                setIsLevelOpen(false);
              }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm font-medium text-zinc-700 transition cursor-pointer"
            >
              <Shapes className="w-4 h-4 text-zinc-700" />
              <span>Category</span>
            </button>

            {isCategoryOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40 max-h-64 overflow-y-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`w-full px-4 py-2.5 text-xs text-left transition flex items-center justify-between ${
                      selectedCategory === cat
                        ? "font-bold text-[#0052FF] bg-blue-50"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-[#0052FF]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active filter indicators */}
          {(selectedLevel !== "All Levels" || selectedCategory !== "All") && (
            <div className="flex items-center gap-2 ml-2">
              {selectedLevel !== "All Levels" && (
                <span className="px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] text-xs font-semibold">
                  {selectedLevel}
                </span>
              )}
              {selectedCategory !== "All" && (
                <span className="px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] text-xs font-semibold">
                  {selectedCategory}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. CREATOR COURSES GRID with staggered animation */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 pb-12">
        {paginatedCourses.length > 0 ? (
          <motion.div
            key={`${currentPage}-${selectedCategory}-${selectedLevel}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {paginatedCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-base text-zinc-500 font-satoshi">
              No products found for this filter criteria.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers — show max 5 with ellipsis */}
            {(() => {
              const maxVisible = 5;
              let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
              let end = start + maxVisible - 1;
              if (end > totalPages) {
                end = totalPages;
                start = Math.max(1, end - maxVisible + 1);
              }
              const pages: (number | string)[] = [];
              if (start > 1) {
                pages.push(1);
                if (start > 2) pages.push("start-ellipsis");
              }
              for (let i = start; i <= end; i++) pages.push(i);
              if (end < totalPages) {
                if (end < totalPages - 1) pages.push("end-ellipsis");
                pages.push(totalPages);
              }
              return pages.map((page) =>
                typeof page === "string" ? (
                  <span key={page} className="w-10 h-10 flex items-center justify-center text-sm text-zinc-400">
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-semibold transition cursor-pointer ${
                      currentPage === page
                        ? "bg-[#0052FF] text-white shadow-md"
                        : "border border-slate-200 bg-white text-zinc-600 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              );
            })()}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
