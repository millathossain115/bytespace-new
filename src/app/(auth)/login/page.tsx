"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthShowcase } from "@/components/auth/AuthShowcase";

export default function LoginPage() {
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
              Sign in with ease
            </h1>
            <p className="font-satoshi text-sm sm:text-base text-white/80 leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Graphical Showcase Mockup */}
          <div className="pt-2 w-full flex justify-center lg:justify-start">
            <AuthShowcase />
          </div>
        </div>

        {/* Right Column: White Sign In Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[460px] bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
            {/* Header label */}
            <span className="font-satoshi text-[13px] font-medium text-[#0052FE] block mb-1">
              Sign In
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-[36px] text-slate-900 tracking-tight leading-tight">
              Welcome Back
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

              {/* Submit Button (Right-aligned lime pill button like mock) */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#C2EB00] active:scale-95 text-slate-950 font-satoshi font-bold text-sm shadow-sm transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            {/* Divider "or" */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-4 font-satoshi text-slate-400">
                  or
                </span>
              </div>
            </div>

            {/* Social Logins: Facebook & Google in circular border buttons */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook Button */}
              <button
                type="button"
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Sign in with Facebook"
              >
                <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Sign in with Google"
              >
                <svg className="w-5 h-5 fill-slate-900 font-bold" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            {/* Bottom link: New user? Create an account */}
            <div className="mt-8 text-center">
              <p className="font-satoshi text-xs text-slate-500">
                New user?{" "}
                <Link
                  href="/signup"
                  className="text-[#0052FE] hover:underline font-semibold"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
