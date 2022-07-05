import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			assets:"docs",
			pages: "docs"
		}),
		appDir: 'app',
		vite: {
			ssr: {
				noExternal: ['three']
			}
		}
	},
	preprocess: preprocess()
};

export default config;
