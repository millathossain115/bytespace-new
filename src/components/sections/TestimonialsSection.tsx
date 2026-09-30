import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { TestimonialItem } from "@/types";

export function TestimonialsSection() {
  const testimonials: TestimonialItem[] = testimonialsData;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#fafbfc] py-20 sm:py-28 lg:py-32">
      {/* Ambient Gradient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-Right Lime / Yellow Glow */}
        <div className="absolute -top-24 right-0 h-[450px] w-[550px] rounded-full bg-[#d7ff2e]/25 blur-[130px] sm:h-[550px] sm:w-[650px]" />
        
        {/* Mid-Top Lime Accent */}
        <div className="absolute top-10 left-1/2 -translate-x-1/3 h-[320px] w-[420px] rounded-full bg-[#ccff00]/15 blur-[110px]" />

        {/* Bottom-Left Soft Blue Glow */}
        <div className="absolute -bottom-20 -left-20 h-[420px] w-[480px] rounded-full bg-[#93c5fd]/30 blur-[120px]" />
        
        {/* Bottom-Right Soft Violet Tint */}
        <div className="absolute -bottom-24 right-1/4 h-[300px] w-[350px] rounded-full bg-[#c7d2fe]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: Title on Left, Description on Right */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="max-w-xl lg:max-w-[500px] lg:pt-1">
            <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-zinc-600 font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-[28px] sm:rounded-[32px] border border-zinc-200/90 bg-white p-7 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]"
            >
              {/* User Avatar */}
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full ring-2 ring-zinc-100 shadow-xs">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-base sm:text-[17px] font-bold text-zinc-900 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-[13px] font-semibold text-[#0052FE] mt-0.5">
                  {item.role}
                </p>
              </div>

              {/* Quote */}
              <p className="mt-4 sm:mt-5 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
