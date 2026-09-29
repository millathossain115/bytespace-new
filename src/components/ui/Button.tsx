import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#0052FF] text-white hover:bg-[#0040CC] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-[0.98]",
    outline:
      "border border-slate-300 text-slate-900 hover:bg-slate-50 active:scale-[0.98]",
    ghost: "text-slate-700 hover:bg-slate-100 active:scale-[0.98]",
    lime: "bg-[#D4FF00] text-black hover:bg-[#C2EB00] active:scale-[0.98] shadow-sm",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded-full",
    md: "h-10 px-5 text-sm rounded-full",
    lg: "h-12 px-7 text-base rounded-full",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
