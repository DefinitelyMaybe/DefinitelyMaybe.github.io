<script context="module">
	import { writable } from 'svelte/store';
	export const theme = writable();
</script>

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ghLogo from '$lib/assets/images/GitHub-Mark-32px.png';
	import ghLogoLight from '$lib/assets/images/GitHub-Mark-Light-32px.png';

	let ghLogoSrc = ghLogo;

	theme.subscribe((val) => {
		ghLogoSrc = ghLogo;
		if (val == 'dark') {
			ghLogoSrc = ghLogoLight;
		}
	});

	$: if ($theme) {
		document.body.className = $theme;
	}

	function toggleTheme() {
		if ($theme === 'light') {
			theme.set('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			theme.set('light');
			localStorage.setItem('theme', 'light');
		}
	}

	onMount(() => {
		// If no localStorage.theme has been set then set one
		if (localStorage.getItem('theme') == undefined) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				theme.set('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
			}
		} else {
			theme.set(localStorage.getItem('theme'));
		}
	});
</script>

<header
	class="flex flex-col bg-[#f1f3f5] border-b-[1px]
	dark:bg-[#2d333b] dark:border-gray-700"
>
	<h1 class="text-center font-bold">Aaron Dekker</h1>
	<div class="flex flex-row justify-between items-center px-2 py-2">
		<input type="checkbox" on:click={toggleTheme} checked={$theme === 'dark'} />

		<nav>
			<ul class="flex flex-row space-x-5 text-2xl font-bold">
				<li class:active={$page.path === '/'}>
					<a sveltekit:prefetch href="/">Projects</a>
				</li>
				<li class:active={$page.path === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</nav>

		<div class="corner">
			<a href="https://github.com/DefinitelyMaybe">
				<img src={ghLogoSrc} alt="Github Icon" />
			</a>
		</div>
	</div>
</header>
