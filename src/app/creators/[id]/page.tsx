import React from "react";
import { notFound } from "next/navigation";
import { creatorsData } from "@/data/creators";
import { coursesData } from "@/data/courses";
import { CreatorProfileView } from "@/components/sections/CreatorProfileView";

interface CreatorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return creatorsData.map((creator) => ({
    id: creator.id,
  }));
}

export async function generateMetadata({ params }: CreatorPageProps) {
  const { id } = await params;
  const creator = creatorsData.find((c) => c.id === id);

  if (!creator) {
    return {
      title: "Creator Not Found | ByteSpace",
    };
  }

  return {
    title: `${creator.name} | ByteSpace Creators`,
    description: creator.bio.slice(0, 160),
  };
}

export default async function CreatorDetailPage({ params }: CreatorPageProps) {
  const { id } = await params;
  const creator = creatorsData.find((c) => c.id === id);

  if (!creator) {
    notFound();
  }

  // Get courses created by this instructor
  const creatorCourses = coursesData.filter(
    (c) =>
      c.instructor.toLowerCase() === creator.name.toLowerCase() ||
      c.instructor.toLowerCase().includes("studio") && creator.name.toLowerCase().includes("studio")
  );

  return (
    <CreatorProfileView
      creator={creator}
      courses={creatorCourses.length > 0 ? creatorCourses : coursesData.slice(0, 6)}
    />
  );
}
