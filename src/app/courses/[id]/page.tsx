import React from "react";
import { notFound } from "next/navigation";
import { coursesData } from "@/data/courses";
import { CourseDetailView } from "@/components/sections/CourseDetailView";

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id.toString(),
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { id } = await params;
  let course = coursesData.find((c) => c.id.toString() === id || c.slug === id);

  if (!course && id === "id" && coursesData.length > 0) {
    course = coursesData[0];
  }

  if (!course) {
    return {
      title: "Course Not Found | ByteSpace",
    };
  }

  return {
    title: `${course.title} | ByteSpace Courses`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  let course = coursesData.find(
    (c) => c.id.toString() === id || c.slug === id
  );

  // If the user navigates directly to literal /courses/id or invalid id, fallback to first course gracefully
  if (!course) {
    if (id === "id" && coursesData.length > 0) {
      course = coursesData[0];
    } else {
      notFound();
    }
  }

  return <CourseDetailView course={course} />;
}
