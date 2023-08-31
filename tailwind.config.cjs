/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ontum-blue": "#293171",
        "ontum-blue2": "#4256a2",
        "ontum-blue3": "#e8eaf5",
        "ontum-white": "#f5f4f4",
        "ontum-yellow": "#ffda3f",
        "ontum-pink": "#ecb1b5",
        "ontum-green-blue": "#96d1ce",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
