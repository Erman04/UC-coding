/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2A2367",
        inkLight: "#6B5AF9",
        inkHover: "#7A6AFF",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("daisyui")],
};
