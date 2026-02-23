/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        newyork: ['var(--font-newyork)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
