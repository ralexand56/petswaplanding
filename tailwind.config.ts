import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f5fbf7",
        brand: "#0b6a53",
        "brand-dark": "#084f3f",
        accent: "#ffe38a",
        ink: "#0e1b16",
        muted: "#5a6b63",
        card: "#ffffff",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,.06)",
      },
      borderRadius: {
        xl: "14px",
        lg: "10px",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
} satisfies Config;
