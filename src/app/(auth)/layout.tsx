import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#0052FF] flex flex-col justify-center relative overflow-hidden">
      {/* Background Grid Pattern matching design */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
