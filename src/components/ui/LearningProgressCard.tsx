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
        "bg-white rounded-2xl p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.18)] text-left min-w-[220px] sm:min-w-[270px] w-full max-w-[290px]",
        className
      )}
    >
      <span className="font-satoshi font-medium text-[14px] text-slate-500 leading-tight block">
        {label}
      </span>
      <div className="font-poppins font-semibold text-slate-900 text-[48px] mt-3.5 tracking-tight leading-none">
        {percentage}%
      </div>
      {/* Progress Bar */}
      <div className="mt-3.5 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#D4FB20] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
