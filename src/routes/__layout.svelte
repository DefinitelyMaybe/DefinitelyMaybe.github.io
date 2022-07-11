<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import leadSrc from '$lib/assets/images/010-falling.jpg';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';

	const posRedX = tweened(0, { duration: 10000, easing: quintOut });
	const posRedY = tweened(0, { duration: 10000, easing: quintOut });

	const posGreenX = tweened(0, { duration: 20000, easing: quintOut });
	const posGreenY = tweened(0, { duration: 20000, easing: quintOut });

	const posBlueX = tweened(0, { duration: 40000, easing: quintOut });
	const posBlueY = tweened(0, { duration: 40000, easing: quintOut });

	let scrolledY = 0

	function updateBlobs(params) {
		let { x, y } = params;
		y += scrolledY
		$posRedX = x;
		$posRedY = y;

		$posGreenX = x;
		$posGreenY = y;

		$posBlueX = x;
		$posBlueY = y;
	}
</script>

<svelte:head>
	<meta property="og:title" content="Aaron Dekker" />
	<meta property="og:image" content={leadSrc} />
	<meta
		property="og:description"
		content="@DefinitelyMaybe | Javascript Developer | BSc Graduate | Open-Source Contributor" />
	<meta property="og:url" content="https://definitelymaybe.github.io/" />

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<svelte:window on:scroll="{()=> {
	scrolledY = window.scrollY
}}"/>

<svelte:body
	on:click={(event) => {
		const { x, y } = event;
		updateBlobs({ x, y });
	}}
	on:mousemove={(event) => {
		const { x, y } = event;
		updateBlobs({ x, y });
	}} />

<main
	class="mx-auto flex grow flex-col pt-20 text-lg font-medium sm:max-w-screen-sm">
	<Header />
	<div class="flex flex-col gap-4 p-2">
		<slot />
	</div>
</main>
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-red-600/10 blur"
	style:top={$posRedY - 192 + `px`}
	style:left={$posRedX - 192 + `px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-green-600/10 blur"
	style:top={$posGreenY - 192 + `px`}
	style:left={$posGreenX - 192 + `px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur"
	style:top={$posBlueY - 192 + `px`}
	style:left={$posBlueX - 192 + `px`} />
