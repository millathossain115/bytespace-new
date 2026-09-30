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
  const course = coursesData.find((c) => c.id.toString() === id);

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
  const course = coursesData.find((c) => c.id.toString() === id);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
