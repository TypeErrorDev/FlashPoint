/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Fira Code"],
    },
    extend: {},
  },
  plugins: [],
};
