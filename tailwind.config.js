/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Clash: ["'Clash Display', sans-serif"],
        General: [" 'General Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};
