module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
          "0%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(365deg)" },
        },
      },
      animation: {
        rotate: "rotate 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
