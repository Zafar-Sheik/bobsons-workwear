import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#b7dbff",
          300: "#88c3ff",
          400: "#59a7ff",
          500: "#2b88ff",
          600: "#1a6ae6",
          700: "#154faf",
          800: "#123f8a",
          900: "#112f66",
        },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
