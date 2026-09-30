"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnersData } from "@/data/partners";

export function StatsSection() {
  return (
    <section aria-label="Trusted partners" className="bg-[#fafafa] border-y border-zinc-200/60 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="mx-auto flex min-h-[140px] max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-7 px-5 py-8 md:justify-between"
      >
        {partnersData.map((logo) => (
          <motion.div
            key={logo.id}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-2.5 text-[#82868E] transition-opacity duration-200 hover:text-zinc-900"
          >
            <div className="relative size-10 shrink-0">
              <Image
                src={logo.image}
                alt={logo.name}
                width={40}
                height={40}
                className="size-full object-contain"
              />
            </div>
            <span className="font-poppins text-xl sm:text-2xl font-bold tracking-tight text-[#82868E]">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
