<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta property="og:title" content="Aaron Dekker - Developer" />
	<meta property="og:image" content="https://definitelymaybe.github.io/images/lead-bg.jpg" />
	<meta
		property="og:description"
		content="@DefinitelyMaybe | BSc Graduate | Open-Source Contributor"
	/>
	<meta property="og:url" content="https://definitelymaybe.github.io/" />

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<Header />

<main>
	<slot />
</main>
