import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05090d",
          900: "#0a1119",
          850: "#0d1620",
          800: "#101c28",
          700: "#16273570",
        },
        border: {
          soft: "rgba(148, 197, 211, 0.12)",
          softer: "rgba(148, 197, 211, 0.07)",
        },
        accent: {
          teal: "#2dd4c8",
          tealDim: "#1a8f88",
          cyan: "#22d3ee",
          green: "#34d399",
          amber: "#f5a623",
          orange: "#f2994a",
          red: "#ef4444",
          purple: "#a78bfa",
        },
        ink: {
          primary: "#e7f1f3",
          secondary: "#8ca2ac",
          muted: "#5c7480",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45, 212, 200, 0.15), 0 0 24px -6px rgba(45, 212, 200, 0.35)",
        panel: "0 1px 0 0 rgba(255,255,255,0.02) inset, 0 8px 24px -12px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 20%, rgba(45,212,200,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.06), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
