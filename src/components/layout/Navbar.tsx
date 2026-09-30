"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any pending hide timer
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      if (currentScrollY <= 20) {
        // At top of page -> always visible
        setVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 88) {
        // Scrolling down -> hide immediately
        setVisible(false);
        setMobileOpen(false);
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setVisible(true);
        setIsScrolled(true);

        // Disappear after 2.5s of idle if not at top and menu closed
        idleTimerRef.current = setTimeout(() => {
          if (window.scrollY > 88 && !mobileOpen) {
            setVisible(false);
          }
        }, 2500);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#0052FE]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="ByteSpace Logo"
            width={28.88}
            height={31.5}
            className="w-[28.88px] h-[31.5px] shrink-0"
            priority
          />
          <span className="font-clash font-bold text-[24px] leading-none tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-10 font-satoshi text-[16px] font-medium text-white/90">
          <Link
            href="/"
            className={`transition-colors duration-200 ${
              isActive("/")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`transition-colors duration-200 ${
              isActive("/courses")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className={`transition-colors duration-200 ${
              isActive("/creators")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Creators
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 font-satoshi text-[16px] font-medium">
          <Link
            href="/login"
            className="text-white hover:text-[#D4FB20] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-[#D4FB20] transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center p-1 hover:opacity-80 transition-opacity"
            aria-label="Cart"
          >
            <Image
              src="/icons/cart.svg"
              alt="Cart Icon"
              width={16}
              height={20}
              className="w-4 h-5 brightness-0 invert"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/cart" aria-label="Cart">
            <Image
              src="/icons/cart.svg"
              alt="Cart Icon"
              width={16}
              height={20}
              className="w-4 h-5 brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0040CC] border-t border-white/10 px-6 py-5 font-satoshi space-y-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block text-[16px] font-medium transition-colors ${
              isActive("/")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileOpen(false)}
            className={`block text-[16px] font-medium transition-colors ${
              isActive("/courses")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileOpen(false)}
            className={`block text-[16px] font-medium transition-colors ${
              isActive("/creators")
                ? "text-[#D4FB20] font-semibold"
                : "text-white/80 hover:text-white"
            }`}
          >
            Creators
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-medium text-white hover:text-[#D4FB20]"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] font-medium text-white hover:text-[#D4FB20]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
