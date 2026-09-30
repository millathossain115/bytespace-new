import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full bg-[#0052FF] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Background Grid */}
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

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center">
        {/* Giant 404 with lime-to-blue gradient */}
        <h1
          className="font-poppins font-black text-[140px] sm:text-[200px] md:text-[280px] leading-[0.85] tracking-tighter select-none"
          style={{
            background: "linear-gradient(180deg, #D4FB20 0%, #D4FB20 40%, rgba(0, 82, 255, 0.6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Message */}
        <h2 className="mt-2 font-poppins font-bold text-white text-2xl sm:text-3xl md:text-[40px] md:leading-[1.2] tracking-tight">
          The page you are looking
          <br /> for doesn&apos;t exist
        </h2>

        {/* Subtitle */}
        <p className="mt-4 font-satoshi text-white/70 text-sm sm:text-base max-w-lg">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
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
