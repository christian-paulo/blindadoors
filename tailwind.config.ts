import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-warm": "var(--bg-warm)",
        "bg-card": "var(--bg-card)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        "ink-dim": "var(--ink-dim)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        accent: "var(--accent)",
        "accent-warm": "var(--accent-warm)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideUp: "slideUp 1s cubic-bezier(0.2,0.9,0.3,1) forwards",
        scroll: "scroll 40s linear infinite",
      },
      screens: {
        sm: "720px",
        lg: "1024px",
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
