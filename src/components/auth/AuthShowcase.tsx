"use client";

import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { CourseItem } from "@/types";

// Shapes in the showcase, as Figma px relative to its top-left (122, 305).
const shapes = [
  {
    src: "/shapes/Spiral-White CTA.png",
    w: 459,
    h: 488,
    top: 350.3,
    left: 380.7,
    width: 114.6,
  },
  {
    src: "/shapes/Cone-Lime-Full.png",
    w: 952,
    h: 872,
    top: 40.3,
    left: 50.1,
    width: 101.6,
  },
  {
    src: "/shapes/Cone-Triangle-Lime.png",
    w: 499,
    h: 549,
    top: 418.7,
    left: 0.4,
    width: 124.7,
  },
];

const course1: CourseItem = {
  id: 2,
  slug: "build-digital-asset",
  title: "Build Digital Asset",
  subtitle: "Architect multi-brand token frameworks and resilient UI libraries",
  category: "Design",
  categories: ["Featured", "Design"],
  instructor: "purepearl studio",
  instructorRole: "Studio Lead",
  instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  rating: 4.5,
  reviewsCount: 120,
  studentsCount: "340 Students",
  level: "Beginner",
  price: "$25",
  priceNumeric: 25,
  period: "/lifetime",
  image: "/courses/Build Digital Asset.webp",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
};

const course2: CourseItem = {
  id: 3,
  slug: "the-power-of-big-data",
  title: "the Power of Big Data",
  subtitle: "From low-fidelity paper sketches to validated iOS & Android flows",
  category: "Data Science",
  categories: ["Featured", "Data Science"],
  instructor: "purepearl studio",
  instructorRole: "Studio Lead",
  instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  rating: 4.5,
  reviewsCount: 158,
  studentsCount: "416 Students",
  level: "Beginner",
  price: "$25",
  priceNumeric: 25,
  period: "/lifetime",
  image: "/courses/the Power of Big Data.webp",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
};

const studentAvatars = [
  "/students/Ellipse (1).png",
  "/students/Ellipse (2).png",
  "/students/Ellipse (3).png",
  "/students/Ellipse (4).png",
];

export function AuthShowcase() {
  return (
    <div className="relative mt-[86px] hidden h-[558px] w-[484px] lg:block lg:[zoom:0.7] xl:absolute xl:top-[270px] xl:left-0.5 xl:mt-0 xl:[zoom:1] select-none pointer-events-none">
      {/* Back Course Card: Build Digital Asset */}
      <div className="absolute top-[89px] left-0 w-[373px] z-10">
        <CourseCard
          course={course1}
          studentAvatars={studentAvatars}
          interactive={false}
        />
      </div>

      {/* Front Course Card: the Power of Big Data */}
      <div className="absolute top-0 left-[111px] w-[373px] z-20">
        <CourseCard
          course={course2}
          studentAvatars={studentAvatars}
          interactive={false}
        />
      </div>

      {/* Floating Happy Students Card (lime variant) */}
      <HappyStudentsCard
        lime
        className="top-[435px] left-[226px] h-[123px] w-[258px] z-25"
      />

      {/* 3D Shapes pinned to Figma px coordinates */}
      {shapes.map(({ src, w, h, top, left, width }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={w}
          height={h}
          className="absolute h-auto max-w-none pointer-events-none select-none z-30"
          style={{
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
          }}
          priority
        />
      ))}
    </div>
  );
}
