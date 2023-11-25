const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "-3px 4px 1.8px rgba(0, 0, 0, 0.15 )",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      screens: {
        m400: "1600px",
        "3xl": "1680px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        PoetsenOne: ["poetsen one", "Inter", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#E4E1DC",
        page: "#F3F1EE",
        text: {
          lightBrown: "#A85430",
          darkBrown: "#682210",
          900: "#1D1D21",
          800: "#593D29",
        },
        brown: {
          900: "#342418",
        },
        button: {
          100: "#593C28",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
});
