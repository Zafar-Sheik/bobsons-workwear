"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: 0.08 }
      );
      gsap.fromTo(
        ".hero-badges > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={heroRef} className="relative overflow-hidden">
      <div className="section min-h-[78svh] grid place-items-center text-center py-24">
        <div className="max-w-3xl">
          <h1 className="heading hero-heading text-4xl sm:text-6xl md:text-7xl font-bold">
            <span className="text-brand-400">Workwear</span> for every sector
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-80">
            {COMPANY.blurb}
          </p>
          <div className="hero-badges mt-10 flex items-center justify-center gap-3 flex-wrap">
            {["Medical", "MediSpa", "Outdoor", "Oversized", "Corporate"].map(
              (b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm"
                >
                  {b}
                </span>
              )
            )}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-soft"
            >
              {COMPANY.cta.primary}
            </motion.a>
            <motion.a
              href="#sectors"
              whileHover={{ y: -2 }}
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10"
            >
              {COMPANY.cta.secondary}
            </motion.a>
          </div>
        </div>
      </div>
      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-brand-500/20 blur-3xl"
      />
    </header>
  );
}
