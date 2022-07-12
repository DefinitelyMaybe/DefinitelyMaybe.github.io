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
	const circleRadius = 192

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
	<meta name="description" content="Aaron Dekker | Portfolio">
	<meta property="og:title" content="Aaron Dekker | @DefinitelyMaybe" />
	<meta property="og:image" content={leadSrc} />
	<meta
		property="og:description"
		content="Javascript Developer | BSc Graduate | Open-Source Contributor" />
	<meta property="og:url" content="https://definitelymaybe.github.io/" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<svelte:window on:scroll="{()=> {
	scrolledY = window.scrollY
	if (window.innerWidth <= 640) {
		if (screen) {
			if (scrolledY == 0) {
				updateBlobs({x:192,y:0})
			} else {
				updateBlobs({x:192,y:screen.height/2})
			}
		} else {
			// updateBlobs({x:0,y:screen.height/2})	
		}
	}
}}"/>

<svelte:body
	on:click={(event) => {
		const { x, y } = event;
		updateBlobs({ x, y });
	}}
	on:mousemove={(event) => {
		const { x, y } = event;
		if (window.innerWidth > 640) {
			updateBlobs({ x, y });	
		}
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
	style:top={`${$posRedY - circleRadius}px`}
	style:left={`${$posRedX - circleRadius}px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-green-600/10 blur"
	style:top={`${$posGreenY - circleRadius}px`}
	style:left={`${$posGreenX - circleRadius}px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur"
	style:top={`${$posBlueY - circleRadius}px`}
	style:left={`${$posBlueX - circleRadius}px`} />
