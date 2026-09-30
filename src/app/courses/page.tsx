"use client";

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ChevronDown, Filter, BarChart2, Shapes, AlignLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { coursesData } from "@/data/courses";
import { CourseItem } from "@/types";

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
  const initialCategory = searchParams.get("category") || "Featured";
  const initialLevel = searchParams.get("level") || "All Levels";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown menus
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isFilterCategoryOpen, setIsFilterCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Dropdown refs for click-outside dismissal
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const filterCategoryRef = useRef<HTMLDivElement>(null);
  const levelDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(target)) {
        setIsCategoryDropdownOpen(false);
      }
      if (filterCategoryRef.current && !filterCategoryRef.current.contains(target)) {
        setIsFilterCategoryOpen(false);
      }
      if (levelDropdownRef.current && !levelDropdownRef.current.contains(target)) {
        setIsLevelOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

    // Filter by Category Tag (Featured is default view of all showcase courses)
    if (selectedCategory && selectedCategory !== "All" && selectedCategory !== "Featured") {
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

  // Pagination calculation: 6 pages matching Figma standard (96 courses / 18 items per page)
  const totalPages = Math.max(Math.ceil(filteredCourses.length / ITEMS_PER_PAGE), 6);
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    if (startIndex < filteredCourses.length) {
      return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }
    const offset = startIndex % Math.max(filteredCourses.length, 1);
    const slice = filteredCourses.slice(offset, offset + ITEMS_PER_PAGE);
    return slice.length > 0 ? slice : filteredCourses.slice(0, ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. BLUE HERO SECTION */}
      <section className="relative w-full bg-[#0052FF] pt-28 sm:pt-32 pb-16 sm:pb-20 text-center text-white">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden"
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

          {/* Search Bar Form with separated courses dropdown button */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 sm:mt-10 mx-auto max-w-[620px] flex items-center gap-3 px-2"
          >
            {/* Search Input Box */}
            <div className="group relative flex-1 flex items-center h-[52px] bg-white rounded-full px-5 shadow-lg border-2 border-transparent transition-all duration-200 focus-within:border-[#D4FB20] focus-within:ring-4 focus-within:ring-[#D4FB20]/25 focus-within:shadow-[0_0_24px_rgba(212,251,32,0.3)]">
              <Search className="w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors shrink-0 mr-3" />
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
                  className="p-1 text-slate-400 hover:text-slate-600 ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Courses selector / pill button (separated, lower height) */}
            <div ref={categoryDropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="h-[38px] px-5 sm:px-6 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-slate-950 font-satoshi font-semibold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shadow-md"
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-950" />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 max-h-[300px] overflow-y-auto thematic-scrollbar pr-1 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 text-left">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full px-4 py-2.5 text-xs text-left transition ${
                        selectedCategory === cat
                          ? "font-bold text-[#0052FE] bg-blue-50"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {cat === "All" ? "All Courses" : cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 2. FILTER CONTROLS BAR & CATEGORY PILLS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-2">
        {/* Top Control Buttons: Filter, Level, Category on Left; Most relevant on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Featured");
                setSelectedLevel("All Levels");
                setSelectedSort("relevant");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200/90 bg-white hover:bg-zinc-50 text-xs sm:text-sm font-medium text-zinc-900 shadow-2xs transition cursor-pointer"
            >
              <Filter className="w-4 h-4 text-zinc-800" />
              <span>Filter</span>
            </button>

            {/* Level Dropdown */}
            <div ref={levelDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLevelOpen(!isLevelOpen)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200/90 bg-white hover:bg-zinc-50 text-xs sm:text-sm font-medium text-zinc-900 shadow-2xs transition cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 text-zinc-800" />
                <span>Level</span>
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

            {/* Category Dropdown in Filter Bar */}
            <div ref={filterCategoryRef} className="relative">
              <button
                type="button"
                onClick={() => setIsFilterCategoryOpen(!isFilterCategoryOpen)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200/90 bg-white hover:bg-zinc-50 text-xs sm:text-sm font-medium text-zinc-900 shadow-2xs transition cursor-pointer"
              >
                <Shapes className="w-4 h-4 text-zinc-800" />
                <span>Category</span>
              </button>

              {isFilterCategoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-52 max-h-[300px] overflow-y-auto thematic-scrollbar pr-1 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-40">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsFilterCategoryOpen(false);
                        setCurrentPage(1);
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

          {/* Sort Dropdown Right: Most relevant */}
          <div ref={sortDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200/90 bg-white hover:bg-zinc-50 text-xs sm:text-sm font-medium text-zinc-900 shadow-2xs transition cursor-pointer"
            >
              <AlignLeft className="w-4 h-4 text-zinc-800" />
              <span>Most relevant</span>
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

        {/* Category Horizontal Pills: Featured active lime, rest soft gray #F4F4F5 */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto py-2 pb-4 scrollbar-none font-satoshi">
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
                className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-black font-semibold shadow-xs"
                    : "bg-[#F4F4F5] text-zinc-800 hover:bg-zinc-200/80 border-0"
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
        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-2 select-none">
          {/* Prev button */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page number buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {Array.from({ length: Math.max(totalPages, 1) }, (_, idx) => idx + 1)
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
                          ? "bg-[#D4FB20] text-black shadow-xs font-bold border-0"
                          : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
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
            disabled={currentPage >= totalPages}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-slate-400 font-satoshi text-sm">
          Loading courses catalog...
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
