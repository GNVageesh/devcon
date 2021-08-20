module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			megrim: ["Megrim", "sans-serif"],
		},
		extend: {
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(2deg)" },
				},
			},
		},
	},
	variants: {
		animation: ["responsive", "motion-safe", "motion-reduce"],
		extend: {},
	},
	plugins: [],
};
