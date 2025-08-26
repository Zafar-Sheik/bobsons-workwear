"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { title: "Men's Utility Jacket", img: "/images/jacket.png" },
  { title: "MediSpa Tunic", img: "/images/tunic.png" },
  { title: "Outdoor Shell", img: "/images/shell.png" },
  { title: "Corporate Chino", img: "/images/chino.png" },
];

export default function RangeShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="section py-24">
      <div className="mb-6 marquee">
        <div className="marquee-content text-6xl font-bold opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}> EVOLUTION • ENGINEERED • DURABILITY • </span>
          ))}
        </div>
      </div>
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((card, i) => (
          <motion.article
            key={card.title}
            style={{ y }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{card.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
