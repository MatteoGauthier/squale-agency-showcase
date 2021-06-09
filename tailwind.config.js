module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
  mode: 'jit',
	theme: {
		extend: {
			colors: {
				"chrome-yellow": "#FFAB00",
				"teal-blue": "#567A89",
			},
      backdropBlur: {
        200: '200px',
      },
      blur: {
        200: '200px',
      }
		},
	},
	variants: {
		extend: {},
	},
	presets: [require("full-palette"),require("tw-utils/font/inter")],
	plugins: [require('tailwindcss-debug-screens')],
};
