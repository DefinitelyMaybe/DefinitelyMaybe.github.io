<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<svelte:body class="h-full"></svelte:body>

<Header />

<main class="dark:bg-black dark:text-white h-full">
	<slot />
</main>
