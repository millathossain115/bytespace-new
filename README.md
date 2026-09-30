# ByteSpace — Modern EdTech Learning & Creator Platform

ByteSpace is a high-performance, pixel-crafted e-learning and course creation web platform built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. It provides an engaging digital education experience matching design specifications with fluid micro-interactions, responsive typography, and robust state management.

---

## 🌟 Key Features

### 1. Interactive Landing Page (`/`)
- **Royal Blue Hero Experience**: Dynamic 12-column grid motif with calibrated 3D geometric shapes and high-resolution student portrait cutout.
- **Engaging Landing Animations**: Smooth, staggered text entrance, portal scale-ins, and animated floating stat badges powered by Framer Motion.
- **Trusted Partners Bar**: Scroll-triggered logo reveal highlighting leading global edtech and corporate collaborators.
- **Course Discovery Section**: Multi-row category pill filters (Featured, Design, Marketing, Web Development, etc.) with real-time course card filtering and interactive hover states.
- **Learning Paths Showcase**: 6 category path cards with custom icons, hover elevation, and direct catalog deep-linking.
- **Growth & Creation Showcase**: Dual visual storytelling layout highlighting student learning milestones (progress indicators, stats) and creator course administration (revenue insights, subscriber metrics).
- **Creator CTA Banner**: High-impact banner driving creator registrations.
- **Community Testimonials**: Authentic student and instructor feedback with 5-star ratings and profile showcases.

### 2. Comprehensive Course Catalog (`/courses`)
- **Real-Time Search & Filtering**: Multi-faceted filter controls for Category, Difficulty Level (All Levels, Beginner, Intermediate, Advanced), and Sort order (Most relevant, Price Low-High, Price High-Low, Rating).
- **Responsive Category Bar**: Horizontal scrollable pill filters for fast topic switching on desktop and mobile.
- **Dynamic 5-Page Window Pagination**: Intelligent sliding window pagination with ellipsis navigation, smoothly scaling across large catalog datasets.
- **Smooth Page/Filter Transitions**: Staggered card entrance animations triggered on page turns and filter changes.

### 3. Course Details & Curriculum View (`/courses/[id]`)
- **Hero & Badge Header**: Dynamic title, subtitle, instructor attribution, rating distribution, and level badges with instant shareable link copy functionality.
- **Interactive Video Preview**: Clean 16:9 aspect-ratio video player with interactive play overlay.
- **Segmented Tab Views**: Smooth animated tab switcher (`AnimatePresence`) for:
  - **About Tab**: Course overview, detailed description paragraphs, visual sneak-peek gallery, and key learning takeaways.
  - **Lessons Tab**: Module breakdown with video duration markers, interactive previews, and progress completion stats.
  - **Reviews Tab**: Rating distribution breakdown with interactive rating star filters and learner testimonials.
- **Sticky Course Enrollment Sidebar**:
  - Module summaries and lesson countdowns
  - Transparent pricing & billing period tags
  - Enrollment CTA button
  - Course deliverables checklist (Certificates, Consultation, Video access)
  - Instructor bio card with direct creator profile navigation

### 4. Creator Profile Page (`/creators` & `/creators/[id]`)
- **Creator Hero Header**: High-resolution profile avatar, creator badge, role, bio, product count, and follower metrics.
- **Interactive Follow State**: Immediate toggle between "Follow" and "Following" states.
- **Creator Portfolio Grid**: Filterable course grid specifically showcasing curriculum published by the creator with responsive pagination.

### 5. Authentication Flows (`/login` & `/signup`)
- **Clean Auth Layout**: Dedicated split layout with branding showcase and secure form entry.
- **Password Visibility Toggles**: Interactive show/hide password toggles and validation-ready input states.
- **Seamless Redirection**: Accessible pathways between sign-in, account creation, and main catalog exploration.

### 6. Custom 404 Experience (`/not-found`)
- **Thematic Error State**: Gradient-filled typography with contextual help links guiding users back to active learning paths.

---

## 🎨 Design System & Aesthetics

- **Color Palette**:
  - **Brand Blue**: `#0052FF` (Primary hero background, active accents, brand elements)
  - **Brand Blue Dark**: `#0040CC` (Deep contrast states, active navigation)
  - **Brand Lime**: `#D4FB20` (CTA buttons, badge accents, highlights)
  - **Brand Lime Hover**: `#C2EB00` (Hover interactive feedback)
  - **Neutrals**: `#FAFAFA`, `#F4F4F6`, `#FFFFFF`, `#0F172A`
- **Typography**:
  - **Headings**: `Poppins` & `Clash Display` (Bold, geometric modern headlines)
  - **Body Text**: `Satoshi` (Clean, legible neutral typography with contextual alternates)
- **Custom Thematic Scrollbar**:
  - White-toned, subtle scroll track with light-gray thumb hover effects.
- **Responsive Architecture**:
  - Mobile-first layout tested across mobile (375px+), tablet (768px+), and desktop (1024px, 1440px) breakpoints.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, SSG & Dynamic Routing) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS `@theme` tokens |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📂 Project Structure

```text
bytespace-app/
├── public/                 # Static assets, 3D shapes, hero cutouts, student avatars, logo
│   ├── Heros/              # Hero illustrations and cutouts
│   ├── icons/              # SVG system icons
│   ├── shapes/             # 3D geometric design elements
│   └── students/           # Community avatar assets
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── (auth)/         # Grouped authentication routes (login, signup)
│   │   ├── courses/        # Course catalog & dynamic [id] route
│   │   ├── creators/       # Creator profile & dynamic [id] route
│   │   ├── globals.css     # Design tokens, fonts, and thematic scrollbar styles
│   │   ├── layout.tsx      # Root layout with ClientLayoutShell
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── auth/           # Authentication showcase & forms
│   │   ├── layout/         # Navbar, Footer, and ClientLayoutShell
│   │   ├── sections/       # Primary page sections & views
│   │   │   ├── CourseAboutTab.tsx
│   │   │   ├── CourseDetailView.tsx
│   │   │   ├── CourseEnrollmentSidebar.tsx
│   │   │   ├── CourseLessonsTab.tsx
│   │   │   ├── CourseReviewsTab.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── CreatorProfileView.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── GrowthAndCreationSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   └── ui/             # Reusable UI primitives (CourseCard, Pagination, Decorations, Cards)
│   ├── data/               # Structured data stores (courses, creators, learningPaths, partners, testimonials)
│   ├── lib/                # Utility helpers (cn class merging)
│   └── types/              # Comprehensive TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18+` or `v20+` recommended
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/millathossain115/bytespace-new.git
   cd bytespace-new
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Building for Production

To validate TypeScript compilation and generate the static production bundle:

```bash
npm run build
```

To run the optimized production server locally:

```bash
npm run start
```

---

## 📄 License

This project is created for evaluation, educational, and portfolio purposes.
