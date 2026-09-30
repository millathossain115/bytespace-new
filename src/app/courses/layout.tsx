import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Explore our complete catalog of curated courses designed to advance your creative and technical skills.",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
