/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "443px",
			sm: "700px",
			md: "740px",
			xl: "1028px",
		},
		extend: {},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("tailwindcss-labeled-groups")(["custom", "1"]),
	],
};
