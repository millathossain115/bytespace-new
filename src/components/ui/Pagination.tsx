"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  maxVisible?: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  maxVisible = 5,
}: PaginationProps) {
  if (totalPages <= 1) return null;

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
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("end-ellipsis");
    pages.push(totalPages);
  }

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 select-none ${className}`}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        typeof page === "string" ? (
          <span
            key={`ellipsis-${idx}`}
            className="w-10 h-10 flex items-center justify-center text-sm text-zinc-400"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`w-10 h-10 rounded-full text-sm font-semibold transition cursor-pointer ${
              currentPage === page
                ? "bg-[#0052FF] text-white shadow-md font-bold"
                : "border border-slate-200 bg-white text-zinc-600 hover:bg-slate-50"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
