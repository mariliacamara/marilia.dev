const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      yellow: colors.yellow,
      lime: colors.lime,
      teal: colors.teal,
      cyan: colors.cyan,
      dark: "#13131F",
      dark_500: "#161626",
    },
    fontFamily: {
      sans: ["Rubik"],
      plex: ["IBM Plex Mono"],
    },
    extend: {},
  },
  plugins: [],
};
