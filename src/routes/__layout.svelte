<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import leadSrc from '$lib/assets/images/010-falling.jpg';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';
	import { onMount } from "svelte";

	const posRedX = tweened(0, { duration: 10000, easing: quintOut });
	const posRedY = tweened(0, { duration: 10000, easing: quintOut });

	const posGreenX = tweened(0, { duration: 20000, easing: quintOut });
	const posGreenY = tweened(0, { duration: 20000, easing: quintOut });

	const posBlueX = tweened(0, { duration: 40000, easing: quintOut });
	const posBlueY = tweened(0, { duration: 40000, easing: quintOut });

	let mainEl;
	let contentEl;

	function updateBlobs(params) {
		const { x, y } = params;
		$posRedX = x;
		$posRedY = y;

		$posGreenX = x;
		$posGreenY = y;

		$posBlueX = x;
		$posBlueY = y;
	}

	onMount(()=> {
		console.log(document.body.scrollTop);
		document.body.addEventListener("scroll", ()=>{
			console.log("hello world");
		})
	})
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

<svelte:body
	on:scroll={() => {
		console.log('yea!');
	}}
	on:click={(event) => {
		const { x, y } = event;
		updateBlobs({ x, y });
		console.log(mainEl.clientHeight);
		console.log(contentEl.scrollTop);
		console.log(document.body.scrollTop);
		// console.log(x,y);
		// console.log(test);
		// console.log(mainEl.clientHeight);
		// console.log(mainEl.scrollHeight);
		// console.log(test);
	}}
	on:mousemove={(event) => {
		const { x, y } = event;
		updateBlobs({ x, y });
		// console.log(x,y);
	}} />

<main
	class="mx-auto flex grow flex-col pt-20 text-lg font-medium sm:max-w-screen-sm"
	bind:this={mainEl}>
	<Header />
	<div class="flex flex-col gap-4 p-2" bind:this={contentEl}>
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
