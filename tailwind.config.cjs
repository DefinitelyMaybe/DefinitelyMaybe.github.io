// const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: 'class',
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
};
