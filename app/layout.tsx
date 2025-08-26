import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Bobsons Workwear — Workwear & MediSpa Uniforms",
  description:
    "South African manufacturer & supplier for workwear across medical, spa, wellness, outdoor, oversized, and corporate sectors.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="accent-gradient">{children}</body>
    </html>
  );
}
