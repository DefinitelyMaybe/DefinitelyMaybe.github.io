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
- Make a background like this one https://slinkity.dev/
- Make use of icons? https://github.com/antfu/unplugin-icons
- Stylelint for Postcss? https://youtu.be/WhCXiEwdU1A?t=46
- Make a project talking about the algorithms from the SimonDev project

# Using tailwindcss

- Start from a mobile design, then add media queries `sm:`, `md:`, etc... to target larger screen sizes https://tailwindcss.com/docs/responsive-design#mobile-first
- child element `hover` or other state change can be done using groups https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover
- `checked:` is can be made available https://tailwindcss.com/docs/hover-focus-and-other-states#checked
- combing responsive utilities is a thing https://tailwindcss.com/docs/hover-focus-and-other-states#combining-with-responsive-prefixes
- dark mode! https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

# Deploying svelte.kit builds to github-pages

I followed a couple of googled options but ended up with:

- keeping it all in one repo
- using the `@sveltejs/adapter-static` adapter
- add `appDir: 'app'` to `svelte.config.js`
- run `pnpm run build`
- rename the `build` folder to `docs`
- vs-code find-and-replace all `__layout` to `layout` within the docs folder
- go-to repo Settings > Pages > then change to serve `docs` folder instead of default `root`
