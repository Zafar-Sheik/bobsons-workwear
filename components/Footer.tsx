export default function Footer() {
  return (
    <footer className="section py-16">
      <div className="border-t border-white/10 pt-8 text-sm opacity-70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Bobsons Workwear. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind, Framer Motion & GSAP.</p>
      </div>
    </footer>
  );
}
