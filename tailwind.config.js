/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050B12",
          900: "#0A121C",
          850: "#0D1622",
          800: "#101C29",
          700: "#16263566",
        },
        teal: {
          glow: "#1FE0C6",
          DEFAULT: "#22D3C5",
          dim: "#0F8C82",
        },
        amber: {
          glow: "#F5A524",
        },
        crit: {
          glow: "#F0473F",
        },
        good: {
          glow: "#2ED990",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(34,211,197,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
