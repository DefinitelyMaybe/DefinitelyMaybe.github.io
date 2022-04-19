import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter(),
		appDir: 'app',
		outDir: 'docs'
	},
	preprocess: preprocess()
};

export default config;
