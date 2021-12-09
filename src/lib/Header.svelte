<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Toggle from '$lib/Toggle.svelte';
	import ghLogo from '$lib/assets/images/GitHub-Mark-32px.png';
	import ghLogoLight from '$lib/assets/images/GitHub-Mark-Light-32px.png';
	// import svLogo from "./svelte-logo.svg";
	// import ghLogo from 'static/images/GitHub-Mark-32px.png';
	export let theme;

	function toggleTheme() {
		if (theme === 'light') {
			theme = 'dark';
			localStorage.setItem('theme', 'dark');
		} else {
			theme = 'light';
			localStorage.setItem('theme', 'light');
		}
		document.body.className = theme;
	}

	onMount(() => {
		// If no localStorage.theme has been set then set one
		if (localStorage.getItem('theme') == undefined) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				theme = 'dark';
				localStorage.setItem('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
			}
		} else {
			theme = localStorage.getItem('theme');
		}
		document.body.className = theme;
	});
</script>

<header
	class="flex flex-row justify-between px-2 pb-2
 dark:bg-black dark:text-white"
>
	<div>
		<label for="">dark</label>
		<Toggle checked={theme === 'dark'} on:click={toggleTheme} />
	</div>

	<nav>
		<ul class="flex flex-row space-x-5 text-2xl font-bold">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Projects</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>

	<div class="corner">
		{#if theme === 'light'}
			<a href="https://github.com/DefinitelyMaybe">
				<img src={ghLogo} alt="Github Icon" />
			</a>
		{:else}
			<a href="https://github.com/DefinitelyMaybe">
				<img src={ghLogoLight} alt="Github Icon" />
			</a>
		{/if}
	</div>
</header>

<style>
	ul {
		@apply px-0;
	}

	li {
		@apply px-2;
	}
</style>
