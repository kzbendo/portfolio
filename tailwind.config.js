/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#33aaaa",
        red: "#ff7f7f",
        yellow: "#d4a963",
        grey: "#ededed",
        "deep-blue": "#121c2e",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(77.69deg, #00b5ee 7.77%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(96deg, #24cbff 13.77%, #ff45a4 69.69%, #ffbd0c 117.77%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brushstroke: "url('./assets/brushstroke.png')",
        brushstroke2: "url('./assets/brushstroke2.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768pm",
      md: "1060px",
    },
  },
  plugins: [],
};
