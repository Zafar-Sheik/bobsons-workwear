"use client";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    tag: "Workwear",
    title: "Heavy-Duty Overalls",
    bullets: [
      "Triple-stitched seams for maximum durability",
      "Reinforced knees & stress points",
      "Breathable yet heavy fabric for all climates",
      "Fade & shrink resistant even after multiple washes",
    ],
  },
  {
    tag: "Protective Gear",
    title: "Safety Jackets",
    bullets: [
      "High-visibility reflective strips",
      "Weather-resistant outer shell",
      "Lightweight insulation for comfort",
      "Tested to meet global safety standards",
    ],
  },
  {
    tag: "Footwear",
    title: "Steel-Toe Boots",
    bullets: [
      "Shock-absorbing soles for long hours",
      "Waterproof leather with reinforced stitching",
      "Slip-resistant outsole for all terrains",
      "Steel toe protection without extra weight",
    ],
  },
  {
    tag: "Corporate Line",
    title: "Custom Branded Uniforms",
    bullets: [
      "Tailored fit with premium fabric",
      "Embroidery & branding options",
      "Wrinkle-free and easy-care materials",
      "Designed for both comfort and style",
    ],
  },
  {
    tag: "Accessories",
    title: "Work Gloves",
    bullets: [
      "Cut & abrasion resistant materials",
      "Enhanced grip for wet and dry conditions",
      "Breathable lining for all-day comfort",
      "Durable stitching for extended use",
    ],
  },
  {
    tag: "Innovation",
    title: "Next-Gen Smart Wear",
    bullets: [
      "Moisture-wicking fabrics for heat management",
      "Integrated RFID tags for workforce tracking",
      "Ergonomic designs reducing fatigue",
      "Sustainable eco-friendly material options",
    ],
  },
];

export default function Services() {
  return (
    <section id="products" className="section py-24">
      <h2 className="heading text-3xl sm:text-5xl font-semibold mb-10">
        Bobsons Workwear Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.title}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-soft"
          >
            <div className="text-xs uppercase tracking-widest text-brand-300">
              {prod.tag}
            </div>
            <h3 className="mt-2 text-xl font-semibold">{prod.title}</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-90 list-disc list-inside">
              {prod.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
