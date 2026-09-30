import Image from "next/image";
import { partnersData } from "@/data/partners";

export function StatsSection() {
  return (
    <section aria-label="Trusted partners" className="bg-[#fafafa] border-y border-zinc-200/60">
      <div className="mx-auto flex min-h-[140px] max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-7 px-5 py-8 md:justify-between">
        {partnersData.map((logo) => (
          <div
            key={logo.id}
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
          </div>
        ))}
      </div>
    </section>
  );
}
