<script>
	import Header from '$lib/Header.svelte';
	import leadSrc from '$lib/assets/images/010-falling.jpg';
	import '../app.css';
</script>

<svelte:head>
	<meta property="og:title" content="Aaron Dekker - Developer" />
	<meta property="og:image" content={leadSrc} />
	<meta
		property="og:description"
		content="@DefinitelyMaybe | BSc Graduate | Open-Source Contributor" />
	<meta property="og:url" content="https://definitelymaybe.github.io/" />

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<main class="mx-auto flex grow flex-col pt-20 sm:max-w-screen-sm bg-blend-">
	<Header />
	<div class="p-2">
		<slot />
	</div>
</main>
