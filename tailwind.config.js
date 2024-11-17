/** @type {import('tailwindcss').Config} */
export default {
  /** @type {import('rippleui').Config} */
  rippleui: {
		// You will have all the properties available
    removeThemes: ["dark"],
	},
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui"),require('tailwind-scrollbar')],
}

