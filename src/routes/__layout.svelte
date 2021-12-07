<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<a href="https://github.com/DefinitelyMaybe" target="_blank">
		<i class="fa fa-github" aria-hidden="true">github</i>
	</a>
	<a href="mailto:aaron.dekker01@gmail.com" target="_blank">
		<i class="fa fa-envelope" aria-hidden="true">Email</i>
	</a>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
