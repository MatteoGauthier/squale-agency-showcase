module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "chrome-yellow": "#FFAB00",
        "teal-blue": "#567A89",
      },
      backdropBlur: {
        200: "200px",
      },
      blur: {
        200: "200px",
      },
      boxShadow: {
        card: "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);",
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1580px',
      }
    },
  },
  variants: {
    extend: {},
  },
  presets: [require("full-palette"), require("tw-utils/font/inter")],
  plugins: [require("tailwindcss-debug-screens")],
}
