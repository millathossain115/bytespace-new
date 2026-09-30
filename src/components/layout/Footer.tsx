"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const column1 = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses?category=Marketing" },
    { label: "IT", href: "/courses?category=Data%20Science" },
    { label: "Design", href: "/courses?category=UI%2FUX%20Design" },
  ];

  const column2 = [
    { label: "Development", href: "/courses?category=Web%20Development" },
    { label: "Marketing", href: "/courses?category=Marketing" },
    { label: "Photography", href: "/courses?category=Drawing%20%26%20Painting" },
    { label: "Finance", href: "/courses?category=Marketing" },
    { label: "Sport", href: "/courses" },
  ];

  const column3 = [
    { label: "Become a Creator", href: "/signup" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 py-16 sm:py-20 lg:py-24 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Newsletter on Left, 3 Columns on Right */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="max-w-md">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative h-7 w-7 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="ByteSpace Logo"
                  width={28}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-clash font-bold text-2xl tracking-tight text-zinc-950">
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="mt-5 font-satoshi text-xs sm:text-sm leading-relaxed text-zinc-600">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input & Submit */}
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-wrap items-center gap-3 sm:flex-nowrap"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-1 min-w-[220px] rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 shadow-xs focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition font-satoshi"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-[#D4FB20] px-7 py-3 text-xs sm:text-sm font-bold text-black transition-all hover:bg-[#C2EB00] hover:scale-105 active:scale-95 shadow-xs text-center cursor-pointer font-satoshi shrink-0"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            {/* Disclaimer / Agreement */}
            <p className="mt-4 text-[11px] sm:text-xs leading-normal text-zinc-500 font-satoshi">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-16 pt-2 font-satoshi">
            {/* Column 1 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column1.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column2.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-3.5 sm:space-y-4">
              {column3.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13.5px] text-zinc-600 hover:text-zinc-950 transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div className="mt-16 sm:mt-20 border-t border-zinc-200/80 pt-6 sm:pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-[11px] sm:text-xs text-zinc-500 font-satoshi">
          <p>© 2026 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
