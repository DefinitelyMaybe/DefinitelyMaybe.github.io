<script>
	import Box from '$lib/Box.svelte';
	import Header from '$lib/Header.svelte';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';

	const posRedX = tweened(0, { duration: 10000, easing: quintOut });
	const posRedY = tweened(0, { duration: 10000, easing: quintOut });

	const posGreenX = tweened(0, { duration: 20000, easing: quintOut });
	const posGreenY = tweened(0, { duration: 20000, easing: quintOut });

	const posBlueX = tweened(0, { duration: 40000, easing: quintOut });
	const posBlueY = tweened(0, { duration: 40000, easing: quintOut });

	let scrolledY = 0;
	const circleRadius = 192;

	/**
	 * @param {{x:number,y:number}} params
	 */
	function updateBlobs(params) {
		let { x, y } = params;
		y += scrolledY;
		$posRedX = x;
		$posRedY = y;

		$posGreenX = x;
		$posGreenY = y;

		$posBlueX = x;
		$posBlueY = y;
	}
</script>

<svelte:head>
	<title>Aaron Dekker | Portfolio</title>
</svelte:head>

<svelte:window
	on:scroll={() => {
		scrolledY = window.scrollY;
		if (window.innerWidth <= 640) {
			if (screen) {
				if (scrolledY == 0) {
					updateBlobs({ x: 192, y: 0 });
				} else {
					updateBlobs({ x: 192, y: screen.height / 2 });
				}
			} else {
				// updateBlobs({x:0,y:screen.height/2})
			}
		}
	}} />

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

<main class="mx-auto flex grow flex-col pt-20 text-lg font-medium sm:max-w-screen-sm">
	<Header />
	<div class="flex flex-col gap-4 p-2">
		<Box
			title="Gumboot Friday"
			action="Visit the site"
			src="images/gumbootfriday.png"
			alt="gumbootfriday"
			href="https://help.gumbootfriday.org.nz/">
			<p slot="desc">
				<a class="link-primary link" href="https://www.iamhope.org.nz/"
					>I AM HOPE's <img
						class="inline w-6"
						src="images/I_AM_HOPE_LOGO_pink.webp"
						alt="I AM HOPE Logo" /></a>
				Gumboot Friday website is dedicated to providing support for children's mental health. I remade
				the search-for-practitioners website in collaboration with
				<a class="link-primary link" href="https://euclidean.co.nz/">Euclidean</a>.
			</p>
		</Box>
		<Box
			title={'Hope Zoo'}
			action={'Visit the site'}
			src="images/Zoo.png"
			alt="hope zoo"
			href="https://kids.iamhope.org.nz/">
			<p slot="desc">
				A mini zoo of animals for kids to engage with and learn about emotions. This project was
				made for the charity <a class="link-primary link" href="https://www.iamhope.org.nz/"
					>I AM HOPE <img
						class="inline w-6"
						src="images/I_AM_HOPE_LOGO_pink.webp"
						alt="I AM HOPE Logo" /></a>
				in collaboration with
				<a class="link-primary link" href="https://euclidean.co.nz/">Euclidean</a>
				and
				<a class="link-primary link" href="https://www.valerism.com/">Valerie</a>.
			</p>
		</Box>
		<!-- <Box src={"https://threlte.xyz/logo/threlte-logo.png"} alt="My Editor" href="/projects/threlte">
	<div slot="desc">
		<h2 class="font-bold">Trying out Threlte</h2>
		<p>
			Playing with declarative 3D programming for three.js
		</p>
	</div>
	<a slot="link" class="font-bold" href="/projects/threlte"
		>Tech Demo</a>
</Box> -->
		<!-- <Box
			title={'The Floor is Lava!'}
			action={'Visit the site'}
			src="images/cubes.png"
			alt="lava cube world"
			href="/projects/lavafloor/">
			<div slot="desc">
				An age old game
				<p class="italic md:invisible">Not mobile friendly :(</p>
			</div>
		</Box> -->
		<Box
			title={'Simons World'}
			action={'Visit the site'}
			src="images/simondev.png"
			alt="Simon Dev thumbnail"
			href="https://wonderful-stonebraker-0b161a.netlify.app/">
			<p slot="desc">
				A 5 week sprint refactoring a huge proportion of simondev's original <a
					class="link-primary link"
					href="https://github.com/simondevyoutube/Quick_3D_MMORPG">source code</a
				>. My remixed
				<a
					class="link-primary link"
					href="https://github.com/DefinitelyMaybe/Not_So_Quick_3D_MMORPG_The_Remix"
					>source code is here</a
				>. Simon made a
				<a class="link-primary link" href="https://www.youtube.com/watch?v=IptkgFOoci0">
					great video explaining the project</a
				>.
			</p>
		</Box>
		<Box
			title={'Go Fetch!'}
			action={'Github Pull Request'}
			src="images/threejslogodark.png"
			alt="threejs logo"
			href="https://github.com/mrdoob/three.js/pull/22510">
			<p slot="desc">
				Another good effort to bring three.js up to speed with modern javascript. specifically by
				implementing the <a
					class="link-primary link"
					href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch API</a> within the
				file loader. Previously it was using XMLHttpRequest which added complexity to the process.
			</p>
		</Box>
		<Box
			title={'Styling with Class'}
			action={'Github Issue'}
			src="images/threejslogodark.png"
			alt="threejs logo"
			href="https://github.com/mrdoob/three.js/issues/19986">
			<p slot="desc">
				This was a substantial multi-year effort to bring three.js into the future with modern
				javascript 🤵👏 I'm very pleased to have helped facilitate and be part of the movement.
			</p>
		</Box>
		<!-- <Box
title={'Javascript and Three.js'}
action={'Read the Article'}
src='images/threejslogodark.png'
alt="threejs logo"
href="/projects/parsingthreejs/">
<p slot="desc">
	One does not simply parse three.js 🤷‍♂️ Getting things wrong and keeping on going 🕵️‍♂️
</p>
</Box> -->
		<!-- <Box
title={'University Lessons'}
action={'SlideShow'}
alt="university lecture theatre"
href="/projects/lastslides/"
src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
<p slot="desc">
	Surely there'd be large scale studies showing the importance of education... right?
</p>
</Box> -->
		<!-- <Box
title={'The Untitled Game'}
action={'Read the Article'}
src={tugImg}
alt="TUG concept art of a golem"
href="/projects/storyaboutTUG/">
<p slot="desc">
	A highly ambitious 3D sandbox game, aiming at being a better minecraft. It was a huge
	undertaking but fell apart in the end.
</p>
</Box> -->
	</div>
</main>
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-red-600/30 blur"
	style:top={`${$posRedY - circleRadius}px`}
	style:left={`${$posRedX - circleRadius}px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-green-600/30 blur"
	style:top={`${$posGreenY - circleRadius}px`}
	style:left={`${$posGreenX - circleRadius}px`} />
<div
	class="absolute -z-10 h-96 w-96 rounded-full bg-blue-600/30 blur"
	style:top={`${$posBlueY - circleRadius}px`}
	style:left={`${$posBlueX - circleRadius}px`} />
