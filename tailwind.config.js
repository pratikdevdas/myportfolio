module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway' : ['Raleway', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif']
    },
    colors: {
      dark: "#1E1F25",
      light: "#FDFCFE",
      purple:"#7B5FA6",
      green: "#3BBA9C",
      gblack: "#000",
      g700: "#374151",
      g900: "#111827",
      transparent: "transparent"
    },
    extend: {},
  },
  plugins: [],
};


// radial-gradient(at right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))

// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black