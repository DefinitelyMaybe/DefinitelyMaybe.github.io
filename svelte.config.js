import staticAdapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		appDir: 'app'
	},
	preprocess: preprocess()
};

export default config;
