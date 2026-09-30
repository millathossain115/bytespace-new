"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ChevronDown, SlidersHorizontal, BarChart2, Folder, ArrowUpDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { coursesData } from "@/data/courses";
import { CourseItem } from "@/types";

const CATEGORIES = [
  "All",
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
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

const ITEMS_PER_PAGE = 18; // 96 courses / 18 = 6 pages (1, 2, 3, 4, 5, 6)

function CoursesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search input state
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "All";
  const initialLevel = searchParams.get("level") || "All Levels";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown menus
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sync state when URL params change
  useEffect(() => {
    if (searchParams.get("q") !== null) {
      setSearchQuery(searchParams.get("q") || "");
    }
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category") || "All");
    }
  }, [searchParams]);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
    router.push(`/courses?${params.toString()}`);
  };

  // Student avatars mock
  const studentAvatars = [
    "/students/Ellipse (1).png",
    "/students/Ellipse (2).png",
    "/students/Ellipse (3).png",
    "/students/Ellipse (4).png",
    "/students/Ellipse (5).png",
    "/students/Ellipse (6).png",
    "/students/Ellipse (7).png",
  ];

  // Filtering and Sorting
  const filteredCourses = useMemo(() => {
    let result = [...coursesData];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Filter by Category Tag
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
  }, [searchQuery, selectedCategory, selectedLevel, selectedSort]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* 1. BLUE HERO SECTION */}
      <section className="relative w-full bg-[#0052FF] pt-28 sm:pt-32 pb-16 sm:pb-20 text-center text-white overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-poppins font-semibold text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar Form with category dropdown inside */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 sm:mt-10 mx-auto max-w-2xl bg-white rounded-full p-1.5 sm:p-2 flex items-center shadow-2xl"
          >
            <div className="flex items-center gap-3 flex-1 pl-4 sm:pl-5">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-satoshi outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 text-slate-400 hover:text-slate-600 mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Courses selector / pill button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="h-[44px] px-5 sm:px-6 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-black font-satoshi font-semibold text-sm flex items-center gap-2 transition cursor-pointer shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-black" />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 text-left">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setIsCategoryDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-left"
                  >
                    All Courses
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-left"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 2. FILTER CONTROLS BAR & CATEGORY PILLS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-4">
        {/* Top Control Buttons: Filter, Level, Category on Left; Most Relevant on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLevel("All Levels");
                setSelectedSort("relevant");
                setSearchQuery("");
                setCurrentPage(1);
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
                        setCurrentPage(1);
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

            {/* Category Dropdown Indicator */}
            <button
              type="button"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs transition cursor-pointer"
            >
              <Folder className="w-3.5 h-3.5 text-slate-500" />
              <span>Category: {selectedCategory}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Sort Dropdown Right: Most Relevant */}
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
                      setCurrentPage(1);
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

        {/* Category Horizontal Pills */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto py-5 scrollbar-none font-satoshi">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-black shadow-xs scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. COURSES GRID SECTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6 pb-20">
        {/* Results count indicator */}
        <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-slate-500 font-satoshi">
          <span>
            Showing <strong className="text-slate-900">{paginatedCourses.length}</strong> of{" "}
            <strong className="text-slate-900">{filteredCourses.length}</strong> courses
          </span>
          {searchQuery && (
            <span>
              Search for: &ldquo;<strong className="text-[#0052FE]">{searchQuery}</strong>&rdquo;
            </span>
          )}
        </div>

        {/* Grid of Course Cards: 3 columns matching image layout */}
        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                studentAvatars={studentAvatars}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-slate-800 font-poppins">
              No courses found
            </h3>
            <p className="mt-2 text-sm text-slate-500 font-satoshi">
              Try adjusting your search terms or filters to find what you are looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Featured");
                setSelectedLevel("All Levels");
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#0052FE] text-white font-semibold text-xs hover:bg-[#0040CC] transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. FUNCTIONAL PAGINATION BAR */}
        {totalPages > 1 && (
          <div className="mt-14 sm:mt-16 flex items-center justify-center gap-2 select-none">
            {/* Prev button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page number buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                .filter((p) => {
                  // Show pages around current
                  if (totalPages <= 7) return true;
                  return (
                    p === 1 ||
                    p === totalPages ||
                    Math.abs(p - currentPage) <= 2
                  );
                })
                .map((page, idx, arr) => {
                  const prev = arr[idx - 1];
                  const hasGap = prev && page - prev > 1;

                  return (
                    <React.Fragment key={page}>
                      {hasGap && (
                        <span className="px-1 text-slate-400 text-xs">...</span>
                      )}
                      <button
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          currentPage === page
                            ? "bg-slate-900 text-white shadow-xs font-bold"
                            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  );
                })}
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-400 font-satoshi text-sm">
          Loading courses catalog...
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
