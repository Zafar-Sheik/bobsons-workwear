"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="section py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/30 to-neutral-900 p-10 text-center shadow-soft">
        <h2 className="heading text-3xl sm:text-5xl font-semibold">
          Ready to scale your brand?
        </h2>
        <p className="mt-4 opacity-80 max-w-2xl mx-auto">
          Request a proposal with KPIs, packages and timelines tailored to your
          goals.
        </p>
        <motion.form
          whileHover={{ scale: 1.01 }}
          className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          <input
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/10"
            placeholder="Name"
            required
          />
          <input
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/10"
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 sm:col-span-2"
            placeholder="Company"
          />
          <textarea
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 sm:col-span-2"
            placeholder="What are you looking for?"
            rows={4}
          />
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-soft sm:col-span-2"
          >
            Request Proposal
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
