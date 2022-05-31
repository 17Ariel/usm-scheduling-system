module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#008A00"],
        secondary: ["#97D077"],
        grey: ["#6D8764"],
        warning: ["#E3C800"],
        tertiary: ["#A7C942"],
        danger: ["#63AC18"],
        silver: ["#D5E8D4"],
        light: ["#EAF2D3"],
        custom: ["#ABD895"],
        greenish: ["#60A917"],
      },
      height: {
        100: ["25rem"],
        102: ["85vh"],
      },
      width: {
        98: ["30rem"],
        110: ["50rem"],
        112: ["83vw"],
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
