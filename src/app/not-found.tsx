import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full bg-[#0052FF] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Background White Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Floating 3D Shapes */}
      {/* Left Top Lime Spiral */}
      <div className="absolute left-[-20px] top-[10%] w-[120px] sm:w-[180px] pointer-events-none select-none z-10 rotate-[6deg]">
        <Image
          src="/shapes/Spiral-Lime.png"
          alt="Lime Spiral"
          width={180}
          height={240}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Left Bottom Donut Ring */}
      <div className="absolute left-[4%] bottom-[8%] w-[140px] sm:w-[220px] pointer-events-none select-none z-10 -rotate-[18deg]">
        <Image
          src="/shapes/Cone-White.png"
          alt="White Donut Ring"
          width={220}
          height={220}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Right Top Lime Cylinder */}
      <div className="absolute right-[-15px] top-[12%] w-[120px] sm:w-[180px] pointer-events-none select-none z-10 -rotate-[8deg]">
        <Image
          src="/shapes/Cone-lime-Rectangle.png"
          alt="Lime Cylinder"
          width={180}
          height={240}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Right Bottom Big White Spiral */}
      <div className="absolute right-[4%] bottom-[6%] w-[130px] sm:w-[200px] pointer-events-none select-none z-10 -rotate-[6deg]">
        <Image
          src="/shapes/Spiral_White-Bigpng.png"
          alt="White Spiral"
          width={200}
          height={260}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Right Middle Triangle Pyramid */}
      <div className="absolute right-[16%] top-[30%] w-[70px] sm:w-[100px] pointer-events-none select-none z-10 rotate-[12deg] hidden sm:block">
        <Image
          src="/shapes/Cone-Triangle.png"
          alt="Triangle Pyramid"
          width={100}
          height={100}
          className="w-full h-auto drop-shadow-lg"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
        {/* Massive 404 in Electric Lime */}
        <h1 className="font-poppins font-bold text-[#D4FB20] text-[110px] sm:text-[160px] md:text-[210px] leading-[0.9] tracking-tight drop-shadow-sm select-none">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 font-poppins font-semibold text-white text-[22px] sm:text-[28px] md:text-[32px] tracking-tight">
          The page you are looking
          <br className="hidden sm:inline" /> for doesn't exist
        </h2>

        {/* Subtitle */}
        <p className="mt-3 font-satoshi text-white/80 text-sm sm:text-base max-w-md">
          Please check the URL or return back to the ByteSpace homepage.
        </p>

        {/* Action Button: Back to Home in Electric Lime */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#D4FB20] text-black font-satoshi font-semibold text-sm sm:text-base hover:bg-[#C2EB00] active:scale-95 transition-all shadow-lg cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
