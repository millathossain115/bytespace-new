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
    <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-10 sm:py-14 min-h-screen flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Brand & Heading & Visual Showcase */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left text-white space-y-6">
          {/* Logo mark */}
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="ByteSpace Logo"
              width={34}
              height={38}
              className="w-8 h-9 brightness-0 invert"
              priority
            />
          </Link>

          {/* Heading & Subtitle */}
          <div className="space-y-2 max-w-md">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Sign up and come in
            </h1>
            <p className="font-satoshi text-sm sm:text-base text-white/80 leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* Graphical Showcase Mockup */}
          <div className="pt-2 w-full flex justify-center lg:justify-start">
            <AuthShowcase />
          </div>
        </div>

        {/* Right Column: White Registration Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[460px] bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
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

              {/* Submit Button (Right-aligned lime pill button like mock: "Continue") */}
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

            {/* Bottom link: Already have an account? Login */}
            <div className="mt-14 text-center">
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
      </div>
    </div>
  );
}
