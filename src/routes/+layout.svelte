<script>
	import '../app.css';
	import leadSrc from '$lib/assets/images/010-falling.jpg';
</script>

<svelte:head>
	<meta name="description" content="Aaron Dekker | Portfolio" />
	<meta property="og:title" content="Aaron Dekker | @DefinitelyMaybe" />
	<meta property="og:image" content={leadSrc} />
	<meta
		property="og:description"
		content="Javascript Developer | BSc Graduate | Open-Source Contributor" />
	<meta property="og:url" content="https://definitelymaybe.github.io/" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<slot />
