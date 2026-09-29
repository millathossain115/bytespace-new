import { Course, Review, NavItem, Feature } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/#about" },
  { label: "Instructors", href: "/#instructors" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const COURSES_DATA: Course[] = [];

export const REVIEWS_DATA: Review[] = [];

export const STATS_DATA = [
  { value: "10K+", label: "Active Students" },
  { value: "500+", label: "Expert Mentors" },
  { value: "1.2K+", label: "Certified Courses" },
  { value: "98%", label: "Satisfaction Rate" },
];

export const FEATURES_DATA: Feature[] = [];
