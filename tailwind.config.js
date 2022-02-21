module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xl: { max: "1590px" },
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
      babyblue: "#A4C3FF",
    },
    extend: {
      backgroundImage: {
        yumyumnyang: "url('../public/yumyumnyang.png')",
        wave: "url('../public/wave.svg')",
      },
      keyframes: {
        wave: {
          "0%": { marginLeft: "0px" },
          "100%": { marginLeft: "-1500px" },
        },
        swell: {
          "0%": { marginLeft: "translate3d(0,-25px,0)" },
          "100%": { marginLeft: "translate3d(0,-25px,0)" },
          "50%": { transform: " translate3d(0,5px,0) " },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 2s ease-in-out infinite",
        wave: "wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite",
        swell:
          "wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite",
      },
    },
  },
  plugins: [],
};
