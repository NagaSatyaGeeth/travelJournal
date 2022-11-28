/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F55A5A",
				primaryText: "#2B283A",
				secondaryText: "#918E9B",
			},
		},
	},
	plugins: [],
};
