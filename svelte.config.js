import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			assets: 'docs',
			pages: 'docs'
		}),
		appDir: 'app'
	},
	preprocess: preprocess()
};

export default config;
