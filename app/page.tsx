"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "../components/Nav";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import RangeShowcase from "@/components/RangeShowcase";
import Objectives from "@/components/Objectives";
import Timeline from "@/components/Timeline";
import Deliverables from "@/components/Deliverables";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Sectors />
      <Services />
      <RangeShowcase />
      <Objectives />
      <Deliverables />
      <Timeline />

      <Footer />
    </>
  );
}
