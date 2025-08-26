"use client";
import { motion } from "framer-motion";

const TRACTION = {
  current: [
    "Supplied over 50,000 workwear units across multiple industries",
    "Trusted by 120+ companies nationwide",
    "95% client retention rate due to consistent quality",
    "Expanded product line to include safety footwear and accessories",
    "Established reliable logistics network ensuring on-time delivery",
  ],
  future: [
    "Scale to 200,000+ workwear units delivered annually",
    "Expand operations into Southern African Development Community (SADC) region",
    "Introduce sustainable eco-fabric product line by next year",
    "Launch digital uniform management system for enterprises",
    "Secure partnerships with leading construction and mining companies",
  ],
};

export default function Traction() {
  return (
    <section className="section py-24">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="heading text-3xl sm:text-5xl font-semibold">
            Current Traction
          </h2>
          <ul className="mt-6 space-y-3">
            {TRACTION.current.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                <span className="opacity-90">{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="heading text-3xl sm:text-5xl font-semibold">
            Future Growth
          </h2>
          <ul className="mt-6 space-y-3">
            {TRACTION.future.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                <span className="opacity-90">{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
