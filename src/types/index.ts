export interface CourseItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categories: string[];
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  level: string;
  price: string;
  priceNumeric: number;
  period: string;
  image: string;
  videoPreviewImage?: string;
  lessons: string;
  duration: string;
  comments: string;
  totalLessonsInfo?: string;
  progressPercentage?: string;
  modulesOverview?: string;
  lessonContentText?: string;
  progressTrackingText?: string;
  modules?: {
    title: string;
    description: string;
  }[];
  description?: string[];
  keyPoints?: string[];
  lessonsList?: {
    id: string;
    title: string;
    duration: string;
  }[];
  sneakPeakImages?: string[];
}

export type Course = CourseItem;


export interface PartnerLogo {
  id: number;
  name: string;
  image: string;
}

export interface LearningPathItem {
  id: number;
  title: string;
  category: string;
  icon: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
}
