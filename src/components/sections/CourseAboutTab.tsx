"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CourseItem } from "@/types";

interface CourseAboutTabProps {
  course: CourseItem;
}

export function CourseAboutTab({ course }: CourseAboutTabProps) {
  return (
    <div className="space-y-10 text-zinc-800">
      {/* Description */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold font-poppins text-zinc-900">
          Description
        </h2>
        <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600 font-satoshi">
          {course.description && course.description.length > 0 ? (
            course.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>
              Embark on an enlightening exploration into {course.title}. This
              transformative learning experience invites you to delve deep into the
              intricacies of crafting impactful deliverables, mastering practical
              techniques, and elevating your professional skillset.
            </p>
          )}
        </div>
      </div>

      {/* Sneak Peak Section */}
      {course.sneakPeakImages && course.sneakPeakImages.length > 0 && (
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-zinc-900">
            Sneak Peak
          </h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {course.sneakPeakImages.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:scale-105 transition-transform"
              >
                <Image
                  src={img}
                  alt={`Sneak peak ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Points */}
      {course.keyPoints && course.keyPoints.length > 0 && (
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-poppins text-zinc-900">
            Key Points
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {course.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
