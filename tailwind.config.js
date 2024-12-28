/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondarybg: "#F5F5F5",
        text_link: "#18A0FB",
        black_50: "rgba(0, 0, 0, 0.5)",
        custom_color1: "#EAEAEA",
        hr_color: "#B1B1B1",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
