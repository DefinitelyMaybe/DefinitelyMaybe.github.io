# Next Steps

- A grid of Projects and things I'd like to show off
  - various sized "cards" to show off grid css
- A light-dark theme switch (use of cookies and local storage)
- A project about how I made the website
- Use defer scripts if needed
- Try out <a href:external href="https://www.npmjs.com/package/seolint">seolint</a>
- Do a small svelte-cubed project
- Try out some nice <a href:external href="https://www.youtube.com/watch?v=lPJVi797Uy0">curves</a>
- Image sizing for different viewports
- Show off an API

# Deploying svelte.kit builds to github-pages

I followed a couple of googled options but ended up with:

- keeping it all in one repo
- using the `@sveltejs/adapter-static` adapter
- add `appDir: 'app'` to `svelte.config.js`
- run `pnpm run build`
- rename the `build` folder to `docs`
- vs-code find-and-replace all `__layout` to `layout` within the docs folder
- go-to repo Settings > Pages > then change to serve `docs` folder instead of default `root`
