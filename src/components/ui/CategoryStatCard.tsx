import React from "react";
import { cn } from "@/lib/utils";

interface CategoryStatCardProps {
  title?: string;
  coursesCount?: number;
  studentsCount?: string;
  className?: string;
}

export function CategoryStatCard({
  title = "UI/UX Design",
  coursesCount = 200,
  studentsCount = "1000+",
  className,
}: CategoryStatCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl px-5 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[160px] sm:min-w-[190px]",
        className
      )}
    >
      <h4 className="font-satoshi font-medium text-slate-900 text-[16px] leading-tight">
        {title}
      </h4>
      <p className="font-satoshi text-[11px] sm:text-xs text-slate-400 mt-1 whitespace-nowrap">
        {coursesCount} Courses &bull; {studentsCount} Students
      </p>
    </div>
  );
}
