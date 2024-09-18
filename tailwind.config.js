/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dmsans: ['var(--font-dmSans)', 'sans-serif'],
      // roboto: ["", "sans-serif"],
      helvetica: [],
      "font-grotesk": [],
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "72px",
      // Optionally, you can add bigger sizes here:
      "8xl": "96px",
      "9xl": "120px",
    },
    colors: {
      dark: {
        green: {
          50: "#E6EFED",
          100: "#B0CCC6",
          200: "#8AB4AA",
          300: "#559184",
          400: "#347C6C",
          500: "#015B47",
          600: "#015341",
          700: "#014132",
          800: "#013227",
          900: "#00261E",
          950: "#1A2327",
          1000: "#0F1518",
          fluorescent: "#7DFFAF",
          opaque: "#131B1E",
        },
      },
      light: "#FDFCFE",
      purple: "#7B5FA6",
      green: "#3BBA9C",
      gblack: "#000",
      g700: "#374151",
      g900: "#111827",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};

// radial-gradient(at right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))

// bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
