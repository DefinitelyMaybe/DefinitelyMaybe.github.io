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
	<title>About</title>
</svelte:head>

<section class="content">

	<h1>
		Code Wrangler | BSc Graduate | Seeker of the Longest Path
	</h1>

	<h1>Hi there!</h1>

	<p>
		You've found my website! It's simply a place to show
		the projects that I've worked on. My
		interests tend towards the web, graphics, maths
		and games but not exclusively.
	</p>

	<p>
		Current interests: three.js, Deno, svelte, svelte-cubed
	</p>
</section>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
