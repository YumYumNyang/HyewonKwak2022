module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xl: { max: "1366px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "576px" },
    },
    fontSize: {
      tiny: ".50rem",
      "2xs": ".60rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      title: ["Modak"],
      subTitle: ["'Rubik Mono One'"],
      desc: ["'Bebas Neue'"],
      code: ["Courier"],
      etc: ["Rubik"],
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#1B1EFF",
      darkblue: "#0022D7",
      gray: "#292929",
      green: "#52C22B",
      red: "#FF5A52",
      yellow: "#E6C029",
    },
    extend: {
      backgroundImage: {
        yumyumnyang: "url('../public/yumyumnyang.png')",
      },

      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
