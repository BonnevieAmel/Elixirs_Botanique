/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Open: ["Open", "sans-serif"],
    },
    extend: {
      fontFamily: {
        DM: "DM Sans",
        I: "Inter",
      },
    },
  },
  plugins: [],
};
