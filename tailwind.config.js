/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "var(--lightBlue)",
        darkBlue: "var(--darkBlue)",
      },
      height: {
        navHeight: "var(--customHeight)",
      },
    },
  },
  plugins: [],
};
