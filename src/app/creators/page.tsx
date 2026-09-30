import React from "react";
import { creatorsData } from "@/data/creators";
import { coursesData } from "@/data/courses";
import { CreatorProfileView } from "@/components/sections/CreatorProfileView";

export const metadata = {
  title: "Creators | ByteSpace",
  description: "Explore world-class instructors, designers, and builders teaching on ByteSpace.",
};

export default function CreatorsMainPage() {
  // PurePearl Studio is the flagship creator featured in design specs
  const featuredCreator = creatorsData[0];
  const creatorCourses = coursesData.filter(
    (c) =>
      c.instructor.toLowerCase() === featuredCreator.name.toLowerCase() ||
      (c.instructor.toLowerCase().includes("studio") && featuredCreator.name.toLowerCase().includes("studio"))
  );

  return (
    <CreatorProfileView
      creator={featuredCreator}
      courses={creatorCourses.length > 0 ? creatorCourses : coursesData.slice(0, 6)}
    />
  );
}
