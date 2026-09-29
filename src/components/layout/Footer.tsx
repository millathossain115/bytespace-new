"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

function SocialIcon({ d }: { d: string }) {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}

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

  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#D4FF00] flex items-center justify-center font-black text-black text-lg">
                B
              </div>
              <span className="font-extrabold text-2xl text-slate-900 tracking-tight">
                Byte<span className="text-[#0052FF]">Space</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Empowering global learners with practical tech skills, expert mentorship, and industry-accredited certifications.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
              <label htmlFor="newsletter-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                />
                <Button variant="lime" size="md" type="submit">
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>

          {/* Col 2: Top Categories */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-4">Top Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/courses?cat=development" className="hover:text-[#0052FF] transition-colors">Development</Link></li>
              <li><Link href="/courses?cat=design" className="hover:text-[#0052FF] transition-colors">UI/UX Design</Link></li>
              <li><Link href="/courses?cat=marketing" className="hover:text-[#0052FF] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/courses?cat=business" className="hover:text-[#0052FF] transition-colors">Business & Strategy</Link></li>
              <li><Link href="/courses?cat=data" className="hover:text-[#0052FF] transition-colors">Data Science & AI</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#about" className="hover:text-[#0052FF] transition-colors">About Us</Link></li>
              <li><Link href="/#mentors" className="hover:text-[#0052FF] transition-colors">Careers</Link></li>
              <li><Link href="/#community" className="hover:text-[#0052FF] transition-colors">Teach on ByteSpace</Link></li>
              <li><Link href="/#testimonials" className="hover:text-[#0052FF] transition-colors">Success Stories</Link></li>
              <li><Link href="/#contact" className="hover:text-[#0052FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Legal */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-[#0052FF] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#0052FF] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#0052FF] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#0052FF] transition-colors">Cookie Settings</Link></li>
              <li><Link href="#" className="hover:text-[#0052FF] transition-colors">System Status</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            {/* Twitter / X */}
            <Link href="https://twitter.com" target="_blank" className="hover:text-[#0052FF] transition-colors">
              <SocialIcon d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </Link>
            {/* LinkedIn */}
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[#0052FF] transition-colors">
              <SocialIcon d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </Link>
            {/* Instagram */}
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#0052FF] transition-colors">
              <SocialIcon d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </Link>
            {/* GitHub */}
            <Link href="https://github.com" target="_blank" className="hover:text-[#0052FF] transition-colors">
              <SocialIcon d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
