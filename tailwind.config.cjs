module.exports = {
	content: ['./src/**/*.{svelte,css,html}'],
	darkMode: 'class',
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'), require('daisyui')
	]
};
