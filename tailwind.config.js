/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      gray: "#bcbdc1",
      blue: "#3A86FF",
      black: "#011627",
      white: "#FFFAFF",
      orange: "#fb5607",
      red: "#ef233c",
    },
    fontFamily: {
      poppins: "Poppins",
      ubuntu: "Ubuntu",
      pacifico: "Pacifico",
    },
    backgroundImage: {
      "bg-registration": "url('/assets/images/hand.jpg')",
    },
  },
  plugins: [],
};
