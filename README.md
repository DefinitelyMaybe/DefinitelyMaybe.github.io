# Project Management
## Current focus

- Merge old projects into new framework / revision

## Next things to work on:

1. Resizing for bigger viewports
2. Redo reveal.js slides as it's breaking styles
3. Integrate <a href:external href="https://www.npmjs.com/package/seolint">seolint</a>
4. Add a project
   1. Do a Svelte.kit project i.e. how I made this website
   2. Remake maths playground
   3. Add images at larger screen sizes
   4. Make a project talking about the algorithms from the SimonDev project
   5. Do a small svelte-cubed project
   6. Show off an API
5. Make use of icons? https://github.com/antfu/unplugin-icons
6. Stylelint for Postcss? https://youtu.be/WhCXiEwdU1A?t=46

## Not gonna happen

- Make a background like this one https://slinkity.dev/
- Try out some nice <a href:external href="https://www.youtube.com/watch?v=lPJVi797Uy0">curves</a>

# Tips for using tailwindcss

- Start from a mobile design, then add media queries `sm:`, `md:`, etc... to target larger screen sizes https://tailwindcss.com/docs/responsive-design#mobile-first
- easiest way to apply style to specific elements https://tailwindcss.com/docs/adding-base-styles#using-css
- child element `hover` or other state change can be done using groups https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover
- combing responsive utilities is a thing https://tailwindcss.com/docs/hover-focus-and-other-states#combining-with-responsive-prefixes

# Deploying svelte.kit builds to github-pages

I followed a couple of googled options but ended up with:

- keeping it all in one repo
- using the `@sveltejs/adapter-static` adapter
- add `appDir: 'app'` to `svelte.config.js`
- run `pnpm run build`
- rename the `build` folder to `docs`
- vs-code find-and-replace all `__layout` to `layout` within the docs folder
- go-to repo Settings > Pages > then change to serve `docs` folder instead of default `root`
