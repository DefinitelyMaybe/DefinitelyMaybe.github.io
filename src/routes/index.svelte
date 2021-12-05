<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Aaron Dekker - Developer</title>
	<meta property="og:title" content="Aaron Dekker - DefinitelyMaybe - Developer" />
	<meta property="og:image" content="https://definitelymaybe.github.io/images/lead-bg.jpg" />
	<meta property="og:description" content="Code Wrangler | Developer | Mades it work" />
	<meta property="og:url" content="https://definitelymaybe.github.io/" />
</svelte:head>

<section>
	<h1>Aaron Dekker</h1>
	<h2>
		Header page <br />
		Code Wrangler | BSc Graduate | Seeker of the Longest Path <br />
		? interests -> three.js, Deno, svelte, svelte.kit, svelte-cubed ? about section
	</h2>

	<h2>- A grid of Projects and things I'd like to show off</h2>
	<h2>- A light-dark theme switch (use of cookies and local storage)</h2>
	<h2>- A project about how I made the website</h2>
	<h2>- Use defer scripts if needed</h2>
	<h2>
		- Try out <a href:external href="https://www.npmjs.com/package/seolint">seolint</a>
	</h2>
	<h2>- Do a small svelte-cubed project</h2>
	<h2>
		- Try out some nice <a href:external href="https://www.youtube.com/watch?v=lPJVi797Uy0"
			>curves</a
		>
	</h2>
	<h2>- Image sizing for different viewports</h2>
	<h2>- Show off an API</h2>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
