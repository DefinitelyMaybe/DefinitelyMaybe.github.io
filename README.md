# Project Management

## Current focus

- Link to https://www.iamhope.org.nz/
- use svelte-cubed

## Next things to work on:

1. Integrate <a href:external href="https://www.npmjs.com/package/seolint">seolint</a>
2. Stylelint for Postcss? https://youtu.be/WhCXiEwdU1A?t=46
3. Make a background like this one https://slinkity.dev/
4. Try out some nice <a href:external href="https://www.youtube.com/watch?v=lPJVi797Uy0">curves</a>

# Deploying svelte.kit builds to github-pages

- using the `@sveltejs/adapter-static` adapter change the `svelte.config.js` with the following:
  ```js
  const config = {
    kit: {
      adapter: adapter({
        assets:"docs",
        pages: "docs"
      }),
      appDir: 'app'
    },
	// ...
  };
  ```
- run `npm run build`
- go to your repo > Settings > Pages > then change to serve `docs` folder instead of default `root`

# Maths remake

- nobody cares about the details of a function
- naming a function something more descriptive is called better user experience
- mobile first
  - Limit display to just the available screen space
  - display as little as possible initially and let the user navigate to:
    - a graph, image, number or output of some kind
- manage the references
- button to add basics onto the screen
- draw inspiration from physical calculators
