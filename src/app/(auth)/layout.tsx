import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid-backdrop min-h-screen w-full relative overflow-x-hidden">
      <div className="relative z-10 w-full">
        {children}
      </div>
    </main>
  );
}


