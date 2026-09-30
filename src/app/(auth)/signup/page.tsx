"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthShowcase } from "@/components/auth/AuthShowcase";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/courses";
    }, 600);
  };

  return (
    <div className="mx-auto max-w-[1200px] w-full pt-[35px] pb-[120px] px-5 md:px-8 xl:px-0 lg:flex lg:justify-between lg:gap-10">
      {/* Left Column: Brand & Heading & Visual Showcase */}
      <div className="text-white lg:pl-0.5 xl:relative xl:w-[484px] lg:shrink-0">
        {/* Logo mark */}
        <Link href="/" aria-label="ByteSpace home" className="inline-block">
          <Image
            src="/logo.svg"
            alt="ByteSpace"
            width={29}
            height={31.5}
            priority
          />
        </Link>

        {/* Heading & Subtitle */}
        <h1 className="mt-[44px] font-poppins text-xl font-medium leading-[1.5] tracking-[-0.01em] text-white">
          Sign up and come in
        </h1>
        <p className="mt-3.5 max-w-[480px] font-satoshi text-lg leading-[29px] text-white/80">
          The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
        </p>

        {/* Graphical Showcase Mockup */}
        <AuthShowcase />
      </div>

      {/* Right Column: White Registration Card */}
      <div className="mt-10 flex w-full flex-col rounded-[24px] bg-white px-6 py-10 text-slate-900 sm:px-[63px] lg:mt-[85px] lg:pt-[62px] lg:pb-[41px] lg:min-h-[784px] lg:w-[579px] lg:shrink-0 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
        {/* Header label */}
        <span className="font-satoshi text-[13px] font-medium text-[#0052FE] block mb-1">
          Create an Account
        </span>
        <h2 className="font-poppins font-bold text-3xl sm:text-[36px] text-slate-900 tracking-tight leading-tight">
          Welcome to<br />ByteSpace
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block font-satoshi text-xs font-semibold text-slate-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Jamie Davis"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-[52px] rounded-2xl border border-slate-200 px-4 text-sm font-satoshi text-slate-900 placeholder:text-slate-400 focus:border-[#0052FE] focus:outline-none focus:ring-2 focus:ring-[#0052FE]/20 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-satoshi text-xs font-semibold text-slate-600 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="designer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[52px] rounded-2xl border border-slate-200 px-4 text-sm font-satoshi text-slate-900 placeholder:text-slate-400 focus:border-[#0052FE] focus:outline-none focus:ring-2 focus:ring-[#0052FE]/20 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-satoshi text-xs font-semibold text-slate-600 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[52px] rounded-2xl border border-slate-200 px-4 text-sm font-satoshi text-slate-900 placeholder:text-slate-400 focus:border-[#0052FE] focus:outline-none focus:ring-2 focus:ring-[#0052FE]/20 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-slate-950 font-satoshi font-bold text-sm shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Continue"}
            </button>
          </div>
        </form>

        {/* Bottom link */}
        <div className="mt-auto pt-14 text-center">
          <p className="font-satoshi text-xs text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0052FE] hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
