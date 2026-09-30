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
          Sign in with ease
        </h1>
        <p className="mt-3.5 max-w-[480px] font-satoshi text-lg leading-[29px] text-white/80">
          Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
        </p>

        {/* Graphical Showcase Mockup */}
        <AuthShowcase />
      </div>

      {/* Right Column: White Sign In Card */}
      <div className="mt-10 flex w-full flex-col rounded-[24px] bg-white px-6 py-10 text-slate-900 sm:px-[63px] lg:mt-[85px] lg:pt-[62px] lg:pb-[41px] lg:min-h-[784px] lg:w-[579px] lg:shrink-0 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
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

          {/* Submit Button */}
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
        <div className="mt-[73px] flex items-center gap-3 text-lg text-slate-400">
          <span className="h-px flex-1 bg-[#d1d1d1]" />
          or
          <span className="h-px flex-1 bg-[#d1d1d1]" />
        </div>

        {/* Social Logins */}
        <div className="mt-[41px] flex items-center justify-center gap-4">
          <button
            type="button"
            className="grid size-[54px] place-items-center rounded-2xl border border-[#d1d1d1] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Continue with Facebook"
          >
            <svg viewBox="969.833 712.333 33.334 33.334" className="size-[22px] fill-slate-950">
              <title>Facebook</title>
              <path d="M1003.17 729C1003.17 719.795 995.705 712.333 986.5 712.333C977.295 712.333 969.833 719.795 969.833 729C969.833 737.319 975.928 744.214 983.896 745.464V733.818H979.664V729H983.896V725.328C983.896 721.151 986.384 718.844 990.191 718.844C992.015 718.844 993.922 719.169 993.922 719.169V723.271H991.82C989.75 723.271 989.104 724.555 989.104 725.874V729H993.727L992.988 733.818H989.104V745.464C997.072 744.214 1003.17 737.319 1003.17 729Z" />
            </svg>
          </button>

          <button
            type="button"
            className="grid size-[54px] place-items-center rounded-2xl border border-[#d1d1d1] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Continue with Google"
          >
            <svg
              viewBox="1057.83 712.333 32.63 33.334"
              className="size-[22px] fill-slate-950"
            >
              <title>Google</title>
              <path d="M1090.46 729.375C1090.46 728.278 1090.36 727.236 1090.19 726.222H1074.5V732.486H1083.49C1083.08 734.542 1081.9 736.278 1080.15 737.458V741.625H1085.51C1088.65 738.722 1090.46 734.444 1090.46 729.375Z" />
              <path d="M1074.5 718.93C1076.96 718.93 1079.15 719.778 1080.89 721.43L1085.64 716.68C1082.76 713.986 1079 712.333 1074.5 712.333C1067.99 712.333 1062.36 716.083 1059.63 721.528L1065.15 725.819C1066.47 721.861 1070.15 718.93 1074.5 718.93Z" />
              <path
                fillRule="evenodd"
                d="M1074.5 745.667C1067.99 745.667 1062.36 741.917 1059.63 736.472L1065.15 732.18C1066.47 736.139 1070.15 739.069 1074.5 739.069C1076.75 739.069 1078.65 738.458 1080.15 737.458L1085.51 741.625C1082.76 744.167 1079 745.667 1074.5 745.667ZM1065.15 725.819V721.528H1059.63L1065.15 725.819Z"
              />
              <path d="M1059.63 732.18H1065.15C1064.81 731.18 1064.63 730.111 1064.63 729C1064.63 727.889 1064.82 726.819 1065.15 725.819L1059.63 721.528C1058.49 723.778 1057.83 726.305 1057.83 729C1057.83 731.694 1058.49 734.222 1059.63 736.472V732.18Z" />
              <path d="M1065.15 732.18H1059.63V736.472L1065.15 732.18Z" />
            </svg>
          </button>
        </div>

        {/* Bottom link */}
        <div className="mt-auto pt-10 text-center">
          <p className="font-satoshi text-base text-slate-500">
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
  );
}
