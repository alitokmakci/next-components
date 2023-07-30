/** @type {import("tailwindcss").Config} */

import theme from "./@ui/theme.ts";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./@ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: theme,
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
      },
    },
  },
  plugins: [],
};
