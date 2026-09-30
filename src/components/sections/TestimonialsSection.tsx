"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { Glows, type Glow } from "@/components/ui/Decorations";

// Reference radial glows relative to section top
const glows: Glow[] = [
  { x: 1410.5, y: 327.5, r: 568.5, rgb: "203 252 1", alpha: 0.4 },
  { x: 731, y: 198, r: 336, rgb: "203 252 1", alpha: 0.6 },
  { x: 126.5, y: 717.5, r: 568.5, rgb: "0 59 226", alpha: 0.24 },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#fafafa] px-5 pt-[74px] pb-[58px] md:px-8">
      <Glows items={glows} />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header: Title on Left, Description on Right */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-zinc-900 md:text-[44px] lg:mt-10">
            Discover What Our
            <br className="hidden md:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-zinc-600 md:text-lg lg:w-[582px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:-mx-0.5 lg:mt-[71px] lg:grid-cols-3 lg:gap-[41px]"
        >
          {testimonialsData.map(({ id, name, role, avatar, quote }) => (
            <motion.figure
              key={id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="rounded-[24px] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-zinc-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="relative size-20 overflow-hidden rounded-full ring-2 ring-zinc-100">
                <Image
                  src={avatar}
                  alt={name}
                  width={80}
                  height={80}
                  className="size-full object-cover"
                />
              </div>

              <figcaption className="mt-[23px]">
                <p className="font-poppins text-xl font-semibold leading-[1.5] text-zinc-900">
                  {name}
                </p>
                <p className="text-base leading-[1.6] font-medium text-[#0052FE]">{role}</p>
              </figcaption>

              <blockquote className="mt-6 text-base leading-[1.6] text-zinc-600">
                {quote}
              </blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
