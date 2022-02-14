module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      title: ["Modak"],
      subTitle: ["'Rubik Mono One'"],
      desc: ["'Bebas Neue'"],
      etc: ["Courier"],
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#1B1EFF",
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
