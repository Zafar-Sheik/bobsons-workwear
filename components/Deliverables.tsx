"use client";
import { motion } from "framer-motion";

const BOBSONS_DELIVERABLES = [
  "High-quality workwear built to withstand extreme conditions",
  "Bulk supply with consistent sizing and finish across orders",
  "Custom branding and embroidery options for corporate identity",
  "Rigorous safety-tested apparel that meets industry standards",
  "Durable stitching and reinforced seams for longer product life",
  "On-time delivery with reliable logistics support",
  "Sustainable and eco-conscious fabric choices on request",
  "After-sales support and replacement guarantee",
  "Flexible uniform programs tailored to workforce needs",
];

export default function Deliverables() {
  return (
    <section className="section py-24">
      <h2 className="heading text-3xl sm:text-5xl font-semibold mb-8">
        What Bobsons Delivers
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BOBSONS_DELIVERABLES.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
          >
            <p className="opacity-90">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
