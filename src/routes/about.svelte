<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Aaron Dekker - About</title>
</svelte:head>

<section>

	<h1>Aaron Dekker</h1>
	<h2>
		<a href="https://github.com/DefinitelyMaybe">Code Wrangler</a> | <a href="https://www.auckland.ac.nz/en/for/current-students/cs-academic-information/cs-graduation-information/cs-graduation-search-and-confirmation.html">BSc Graduate</a> | <a href="https://www.youtube.com/watch?v=a3ww0gwEszo">Seeker of the Longest Path</a>
	</h2>

	<h2>Hi there!</h2>

	<p>
		You've found my website! It's simply a place to show
		the projects that I've worked on. My
		interests tend towards the web, graphics, maths
		and games but not exclusively.
	</p>

	<p>
		Have a quick look around my <a sveltekit:prefetch href="/">projects page</a>,
		or if you'd like to get in contact <a href="mailto:aaron.dekker01@gmail.com">email me</a>
	</p>
</section>
