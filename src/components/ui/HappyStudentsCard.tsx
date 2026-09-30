import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HappyStudentsCardProps {
  rating?: number;
  reviewsCount?: number;
  avatars?: string[];
  totalBadge?: string;
  className?: string;
}

export function HappyStudentsCard({
  rating = 4.5,
  reviewsCount = 240,
  avatars = [
    "/students/Ellipse (1).png",
    "/students/Ellipse (2).png",
    "/students/Ellipse (3).png",
    "/students/Ellipse (4).png",
    "/students/Ellipse (5).png",
    "/students/Ellipse (6).png",
    "/students/Ellipse (7).png",
  ],
  totalBadge = "2K+",
  className,
}: HappyStudentsCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)] text-left min-w-[210px] sm:min-w-[230px]",
        className
      )}
    >
      <h4 className="font-satoshi font-medium text-slate-900 text-[16px] leading-tight">
        Happy Students
      </h4>
      <div className="flex items-center gap-1.5 mt-1 font-satoshi text-xs text-slate-600">
        <span className="font-bold text-slate-900">{rating}</span>
        <span className="text-slate-400">({reviewsCount})</span>
        <span className="text-[#D4FB20]">★</span>
      </div>

      {/* Avatar Stack */}
      <div className="flex items-center -space-x-2 mt-2.5 overflow-hidden">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-slate-100 shrink-0"
          >
            <Image
              src={avatar}
              alt={`Student ${idx + 1}`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FB20] text-black font-satoshi font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0">
          {totalBadge}
        </div>
      </div>
    </div>
  );
}
