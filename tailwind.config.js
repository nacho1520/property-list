/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark-blue": "#121826",
        "white-font": "#F2F9FE",
        "card-stroke": "#4A5567",
        "gray-font": "#97A3B6",
        "super-gray": "#20293A",
        "toggle-blue": "#4E80EE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: '"Outfit", sans-serif',
      }
    },
  },
  plugins: [],
};
