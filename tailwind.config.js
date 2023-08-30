/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import generateTintsAndShades from "./src/utils/color";
const primary = "#182c61";
const secondary = "#6d214f";
const danger = "#b33771";
const warning = "#F97F51";
const info = "#25CCF7";
const success = "#58B19F";
const dark = "#222f3e";
const light = "#f5f6fa";

const primaryVariations = generateTintsAndShades(primary);
const secondaryVariations = generateTintsAndShades(secondary);
const dangerVariations = generateTintsAndShades(danger);
const warningVariations = generateTintsAndShades(warning);
const infoVariations = generateTintsAndShades(info);
const successVariations = generateTintsAndShades(success);
const darkVariations = generateTintsAndShades(dark);
const lightVariations = generateTintsAndShades(light);

// font-family: 'Cutive Mono', monospace;
// font-family: 'Poppins', sans-serif;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: primaryVariations,
        secondary: secondaryVariations,
        danger: dangerVariations,
        warning: warningVariations,
        info: infoVariations,
        success: successVariations,
        dark: darkVariations,
        light: lightVariations,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Cutive Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
