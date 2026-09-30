"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PencilRuler,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";
import { learningPathsData } from "@/data/learningPaths";

const ICONS_MAP: Record<string, React.ReactNode> = {
  PencilRuler: <PencilRuler className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
  Code2: <Code2 className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
  Laptop: <Laptop className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
  Building2: <Building2 className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
  Megaphone: <Megaphone className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
  Camera: <Camera className="h-7 w-7 text-zinc-950 stroke-[2.2]" />,
};

export function FeaturesSection() {
  return (
    <section className="px-5 pt-[72px] pb-[121px] md:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-poppins text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-zinc-900 md:text-[36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-[15px] max-w-[910px] text-base leading-[1.6] text-zinc-500 md:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </motion.div>

        {/* 6 Category Path Cards Grid */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="mt-[69px] grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10"
        >
          {learningPathsData.map((path) => (
            <motion.li
              key={path.id}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <Link
                href={`/courses?category=${encodeURIComponent(path.category)}`}
                className="group flex aspect-square flex-col items-center justify-center rounded-[24px] border border-zinc-200/90 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                {/* 60px Lime Circle */}
                <div className="flex size-[60px] items-center justify-center rounded-full bg-[#D4FB20] shadow-xs transition-transform duration-300 group-hover:scale-110">
                  {ICONS_MAP[path.icon] || <Code2 className="h-7 w-7 text-zinc-950 stroke-[2.2]" />}
                </div>

                {/* Title */}
                <span className="mt-[13px] text-base md:text-lg font-medium text-zinc-900 transition-colors group-hover:text-[#0052FE]">
                  {path.title}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
