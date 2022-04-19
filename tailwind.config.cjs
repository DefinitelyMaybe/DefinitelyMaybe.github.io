// const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{svelte,css,html}'],
	darkMode: 'class',
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms')
	]
};
