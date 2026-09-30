import React from "react";
import { cn } from "@/lib/utils";

interface LearningProgressCardProps {
  label?: string;
  percentage?: number;
  className?: string;
}

export function LearningProgressCard({
  label = "Learning Progress",
  percentage = 55,
  className,
}: LearningProgressCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl px-5 pt-4 pb-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[220px] w-full flex flex-col justify-between",
        className
      )}
    >
      <div>
        <span className="font-satoshi font-medium text-[13px] text-slate-500 leading-tight block">
          {label}
        </span>
        <div className="font-poppins font-semibold text-slate-900 text-[40px] tracking-tight leading-none mt-1.5">
          {percentage}%
        </div>
      </div>
      {/* Progress Bar with bottom gap */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-1">
        <div
          className="h-full bg-[#D4FB20] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
