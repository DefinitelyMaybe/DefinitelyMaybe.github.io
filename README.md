# Project Management

## Current focus

- use svelte-cubed

## Next things to work on:

1. Integrate <a href:external href="https://www.npmjs.com/package/seolint">seolint</a>
2. Add a project
   1. Show off an API
3. Make use of icons? https://github.com/antfu/unplugin-icons
4. Stylelint for Postcss? https://youtu.be/WhCXiEwdU1A?t=46
5. Make a background like this one https://slinkity.dev/
6. Try out some nice <a href:external href="https://www.youtube.com/watch?v=lPJVi797Uy0">curves</a>

# Tips for using tailwindcss

- Start from a mobile design, then add media queries `sm:`, `md:`, etc... to target larger screen sizes https://tailwindcss.com/docs/responsive-design#mobile-first
- easiest way to apply style to specific elements https://tailwindcss.com/docs/adding-base-styles#using-css
- child element `hover` or other state change can be done using groups https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover
- combining responsive utilities is a thing https://tailwindcss.com/docs/hover-focus-and-other-states#combining-with-responsive-prefixes

# Deploying svelte.kit builds to github-pages

I followed a couple of googled options but ended up with:

- keeping it all in one repo
- using the `@sveltejs/adapter-static` adapter
- add `appDir: 'app'` to `svelte.config.js`
- run `pnpm run build`
- rename the `build` folder to `docs`
- vs-code find-and-replace all `__layout` to `layout` within the docs folder
- go-to repo Settings > Pages > then change to serve `docs` folder instead of default `root`

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
