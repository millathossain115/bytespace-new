export interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  duration: string;
  lessonsCount: number;
  price: number;
  originalPrice?: number;
  badge?: string;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
    role: string;
  };
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

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
}
