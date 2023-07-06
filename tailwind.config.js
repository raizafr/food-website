/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("../public/image/lily-banse-YHSwy6uqvk-unsplash.webp")',
      },
    },
  },
  plugins: [require("daisyui")],
};
