"use client";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    date: "2015",
    title: "Founded in Johannesburg",
    copy: "Bobsons Workwear started with a mission to provide durable, affordable, and safe uniforms for industrial workers.",
  },
  {
    date: "2017",
    title: "First Major Contracts",
    copy: "Secured partnerships with leading construction firms, delivering 10,000+ high-quality overalls and safety gear.",
  },
  {
    date: "2020",
    title: "Product Line Expansion",
    copy: "Introduced steel-toe boots, high-visibility jackets, and custom-branded uniforms to serve broader industries.",
  },
  {
    date: "2023",
    title: "Nationwide Recognition",
    copy: "Achieved a 95% client retention rate and became the preferred workwear supplier for over 120 companies.",
  },
  {
    date: "2025+",
    title: "Future Growth",
    copy: "Expanding into the SADC region, launching sustainable eco-fabric uniforms, and rolling out smart wear technology.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section py-24">
      <h2 className="heading text-3xl sm:text-5xl font-semibold mb-12">
        Our Journey
      </h2>
      <ol className="relative border-l border-white/10 ml-3">
        {TIMELINE.map((t, i) => (
          <motion.li
            key={t.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="mb-12 ml-6"
          >
            {/* Marker */}
            <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-brand-400 to-brand-600 shadow-md" />

            {/* Date */}
            <time className="text-xs uppercase tracking-widest text-brand-300">
              {t.date}
            </time>

            {/* Title + Copy */}
            <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
            <p className="mt-1 opacity-80 text-sm leading-relaxed">{t.copy}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
