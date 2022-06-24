/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				platinum: '#E5E5E5',
				brown: {
					100: '#1E140B',
					200: '#512C0A',
					300: '#4F2B0A',
				},
				oldlace: '#FFF1E8',
			},
			fontFamily: {
				cinzel: ['cinzel', 'monospace'],
				kokila: ['kokila', 'sans-serif'],
				kokilab: ['kokilab', 'sans-serif'],
				kruti: ['kruti', 'sans-serif'],
				'kruti-bold': ['kruti-bold', 'sans-serif'],
				'kruti-italic': ['kruti-italic', 'sans-serif'],
				'kruti-bold-italic': ['kruti-bold-italic', 'sans-serif'],
				'cinzel-black': ['cinzel-black', 'cursive'],
				'cinzel-bold': ['cinzel-bold', 'cursive'],
			},
		},
	},
	plugins: [],
};
