"use client";
import { motion } from "framer-motion";
import { SECTORS } from "@/lib/data";

export default function Sectors() {
  return (
    <section id="sectors" className="section py-24">
      <div className="flex items-end justify-between mb-10">
        <h2 className="heading text-3xl sm:text-5xl font-semibold">
          Sectors Served
        </h2>
        <span className="text-sm opacity-70">B2B & B2C</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTORS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm opacity-80">{s.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
