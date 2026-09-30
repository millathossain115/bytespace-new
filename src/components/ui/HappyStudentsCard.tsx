import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface HappyStudentsCardProps {
  rating?: number;
  reviewsCount?: number;
  avatars?: string[];
  totalBadge?: string;
  className?: string;
  lime?: boolean;
}

const DEFAULT_AVATARS = [
  "/students/Ellipse (1).png",
  "/students/Ellipse (2).png",
  "/students/Ellipse (3).png",
  "/students/Ellipse (4).png",
  "/students/Ellipse (5).png",
  "/students/Ellipse (6).png",
  "/students/Ellipse (7).png",
];

export function HappyStudentsCard({
  rating = 4.5,
  reviewsCount = 240,
  avatars = DEFAULT_AVATARS,
  totalBadge = "2K+",
  className,
  lime = false,
}: HappyStudentsCardProps) {
  return (
    <div
      className={cn(
        "absolute flex w-[258px] flex-col rounded-2xl p-4 text-zinc-950",
        lime ? "bg-[#D4FB20]" : "bg-white shadow-xl",
        className
      )}
    >
      <p className="font-satoshi text-base font-medium leading-tight">
        Happy Students
      </p>
      <div
        className={cn(
          "mt-1 flex items-center gap-1 font-satoshi text-xs",
          lime ? "text-zinc-700" : "text-zinc-500"
        )}
      >
        <span>
          {rating} ({reviewsCount})
        </span>
        <Star
          aria-hidden
          className={
            lime
              ? "fill-[#0052FE] text-[#0052FE]"
              : "fill-[#D4FB20] text-[#D4FB20]"
          }
          size={14}
        />
      </div>

      {/* Avatar Stack */}
      <div className="mt-auto flex items-center">
        {avatars.map((path, idx) => (
          <Image
            key={idx}
            src={path}
            alt=""
            width={43}
            height={43}
            className="-mr-4 size-[43px] rounded-full border-2 border-white object-cover bg-white"
          />
        ))}
        <span
          className={cn(
            "grid size-[43px] place-items-center rounded-full text-xs font-bold shrink-0",
            lime ? "bg-zinc-950 text-white" : "bg-[#D4FB20] text-zinc-950"
          )}
        >
          {totalBadge}
        </span>
      </div>
    </div>
  );
}

