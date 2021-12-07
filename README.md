# Deploying svelte.kit builds to github-pages

I followed a couple of googled options but ended up with:

- keeping it all in one repo
- using the `@sveltejs/adapter-static` adapter
- add `appDir: 'app'` to `svelte.config.js`
- run `pnpm run build`
- rename the `build` folder to `docs`
- vs-code find-and-replace all `__layout` to `layout` within the docs folder
- go-to repo Settings > Pages > then change to serve `docs` folder instead of default `root`
