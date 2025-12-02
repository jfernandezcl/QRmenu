/** @type {import('tailwindcss').Config} */
import { colors } from "./src/styles/colors.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: colors,
    },
  },
  plugins: [],
};
