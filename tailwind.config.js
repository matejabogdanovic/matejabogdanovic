import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#EA5136",

        dark: {
          900: "#14181B",
          300: "#293138",
        },
        light: "#D9D9D9",
      },

      keyframes: {
        flip: {
          "0%": { transform: "rotateY(180deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        "fly-out": {
          "0%": { transform: "translateX(0%)" },
          "30%": { opacity: 0 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        "fly-in": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "30%": { opacity: 1 },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        flip: "flip 2s linear infinite;",
        "fly-out": "fly-out 1s ease-out",
        "fly-in": "fly-in 1s ease-out",
      },
    },
  },
  plugins: [],
};
