import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GrowthAndCreationSection } from "@/components/sections/GrowthAndCreationSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 antialiased overflow-x-hidden">
      {/* 1. Hero Section with 12-Column Royal Blue Grid and 3D floating shapes */}
      <HeroSection />

      {/* 2. Partner / Company Logos Bar */}
      <StatsSection />

      {/* 3. Courses Discovery Section with dynamic filters */}
      <CoursesSection />

      {/* 4. Learning Paths Category Cards Grid */}
      <FeaturesSection />

      {/* 5. Dual Showcase: Student Growth & Creator Course Management */}
      <GrowthAndCreationSection />

      {/* 6. Creator CTA Banner with Royal Blue Grid Pattern */}
      <CtaSection />

      {/* 7. Community Testimonials Section with ambient glow */}
      <TestimonialsSection />
    </div>
  );
}
