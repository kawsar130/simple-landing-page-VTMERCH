import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-inter)"],
        title: ["var(--font-montserrat)"],
        brusher: ["var(--font-act-of-rejection)"],
      },
      colors: {
        primary: {
          DEFAULT: "#EA2127",
        },
        secondary: {
          DEFAULT: "#111111",
          dark: "#000000",
        },
        tertiary: {
          DEFAULT: "#F6F5F5",
          light: "#FFFFFF",
        },
        typo: {
          primary: "#EF5256",
          "primary-dark": "#DE2A2F",
          secondary: "#060606",
          tertiary: "#FFFFFF",
          disabled: "#9B9B9B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
