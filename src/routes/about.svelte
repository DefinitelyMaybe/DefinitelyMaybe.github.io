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
	<h2 class="text-center">
		<a href="https://github.com/DefinitelyMaybe">@DefinitelyMaybe</a> |
		<a
			href="https://www.auckland.ac.nz/en/for/current-students/cs-academic-information/cs-graduation-information/cs-graduation-search-and-confirmation.html"
			>BSc Graduate</a
		>
		<!--| <a href="https://www.youtube.com/watch?v=a3ww0gwEszo">Seeker of the Longest Path</a> -->
	</h2>

	<h3>Hi there!</h3>

	<p>
		You've found my website! It's simply a place to show the projects that I've worked on. My
		interests tend towards the web, graphics, maths and games but not exclusively.
	</p>

	<p>
		If you'd like to get in contact, there's <a href="https://twitter.com/0Rawr">twitter</a> or my
		<a href="mailto:aaron.dekker01@gmail.com">email</a>.
	</p>
</section>
