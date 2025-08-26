"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <nav className="section flex items-center justify-between py-4">
        <Link href="#" className="font-display text-lg tracking-tight">
          {COMPANY.name}
        </Link>
        <div className="flex items-center gap-3">
          <a href="#services" className="text-sm opacity-80 hover:opacity-100">
            Services
          </a>
          <a href="#sectors" className="text-sm opacity-80 hover:opacity-100">
            Sectors
          </a>
          <a href="#timeline" className="text-sm opacity-80 hover:opacity-100">
            Timeline
          </a>
        </div>
      </nav>
    </div>
  );
}
