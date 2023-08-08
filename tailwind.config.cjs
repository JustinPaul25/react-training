/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			'white': '#ffffff',
			'blue-dark': '#2372B6',
			'gray-medium': '#5B5B5B',
			'border-stroke': '#D0DAD1',
			'blue-light': '#1FA7DD',
			'gray-extra-light': '#F1F1F1'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
