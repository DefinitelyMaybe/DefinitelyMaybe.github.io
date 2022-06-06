<script context="module">
	import { theme } from '$lib/Header.svelte';
	export const prerender = true;
</script>

<script>
	import Box from '$lib/Box.svelte';
	import fallingImg from '$lib/assets/images/010-falling.jpg';
	import simonImg from '$lib/assets/images/simondev.png';
	import threejsdarkImg from '$lib/assets/images/threejslogodark.png';
	import threejswhiteImg from '$lib/assets/images/threejslogowhite.png';
	import lavaCubeImg from '$lib/assets/images/cubes.png';
	import tugImg from '$lib/assets/images/TUG/TUGconceptArtmini.jpg';
	import iahImg from '$lib/assets/images/I_AM_HOPE_LOGO_pink.webp';

	let threeSrc = threejswhiteImg;

	theme.subscribe((val) => {
		if (val === 'light') {
			threeSrc = threejswhiteImg;
		} else {
			threeSrc = threejsdarkImg;
		}
	});
</script>

<svelte:head>
	<title>Aaron Dekker - Projects</title>
</svelte:head>

<!-- ,
	// daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ['dark', 'light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }, -->

<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
	<Box src={iahImg} alt="I AM HOPE" href="https://kids.iamhope.org.nz/">
		<div slot="desc">
			<h2 class="font-bold">I AM HOPE</h2>
			<p>A mini zoo of animals for kids to engage with and learn about emotions. This project was made for the charity <a href="https://www.iamhope.org.nz/">I AM HOPE</a>.</p>
		</div>
		<a slot="link" class="font-bold" href="https://kids.iamhope.org.nz/" external>Visit the site.</a>
	</Box>
	<Box src={fallingImg} alt="Falling 0's and 1's" href="/projects/remake/">
		<div slot="desc">
			<h2 class="font-bold">Remixing the Old</h2>
			<p>A story about remaking this entire website.</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/remake/">Read the article.</a>
	</Box>
	<Box
		src={simonImg}
		alt="Simon Dev thumbnail"
		href="https://wonderful-stonebraker-0b161a.netlify.app/">
		<div slot="desc">
			<h2 class="font-bold">Simons World</h2>
			<p>
				A 5 week sprint refactoring a huge proportion of simondev's original <a
					href="https://github.com/simondevyoutube/Quick_3D_MMORPG">source code</a
				>. My remixed source code is
				<a href="https://github.com/DefinitelyMaybe/Not_So_Quick_3D_MMORPG_The_Remix">here</a>.
				Simon made a
				<a href="https://www.youtube.com/watch?v=IptkgFOoci0">
					great video explaining the project</a
				>.
			</p>
		</div>
		<div slot="link">
			<a class="font-bold" href="https://wonderful-stonebraker-0b161a.netlify.app/"
				>Serverless Deployment via Netlify</a>
			<p class="text-xs sm:hidden">(Not built for mobile)</p>
		</div>
	</Box>
	<Box src={threeSrc} alt="threejs logo" href="https://github.com/mrdoob/three.js/pull/22510">
		<div slot="desc">
			<h2 class="font-bold">Go Fetch!</h2>
			<p>
				Another good effort to bring three.js up to speed with modern javascript. specifically by
				implementing the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
					>fetch API</a> within the file loader. Previously it was using XMLHttpRequest which added complexity
				to the process.
			</p>
		</div>
		<a slot="link" class="font-bold" href="https://github.com/mrdoob/three.js/pull/22510"
			>Github Pull Request</a>
	</Box>
	<Box src={threeSrc} alt="threejs logo" href="https://github.com/mrdoob/three.js/issues/19986">
		<div slot="desc">
			<h2 class="font-bold">Styling with Class</h2>
			<p>
				This was a substantial multi-year effort to bring three.js into the future with modern
				javascript 🤵👏 I'm very pleased to have helped facilitate and be part of the movement.
			</p>
		</div>
		<a slot="link" class="font-bold" href="https://github.com/mrdoob/three.js/issues/19986"
			>Github Issue</a>
	</Box>
	<Box src={threeSrc} alt="threejs logo" href="/projects/parsingthreejs/">
		<div slot="desc">
			<h2 class="font-bold">Javascript and Three.js</h2>
			<p>One does not simply parse three.js 🤷‍♂️ Getting things wrong and keeping on going 🕵️‍♂️</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/parsingthreejs/">Read the Article</a>
	</Box>
	<Box
		alt="university lecture theatre"
		href="/projects/lastslides/"
		src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
		<div slot="desc">
			<h2 class="font-bold">University Lessons</h2>
			<p>Surely there'd be large scale studies showing the importance of education... right?</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/lastslides/">SlideShow</a>
	</Box>
	<Box src={tugImg} alt="TUG concept art of a golem" href="/projects/storyaboutTUG/">
		<div slot="desc">
			<h2 class="font-bold">The Untitled Game</h2>
			<p>
				A highly ambitious 3D sandbox game, aiming at being a better minecraft. It was a huge
				undertaking but fell apart in the end.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/storyaboutTUG/">Read the Article</a>
	</Box>
	<Box src={lavaCubeImg} alt="lava cube world" href="/projects/lavafloor/">
		<div slot="desc">
			<h2 class="font-bold">Death by Lava!</h2>
			<p>An age old game remade with three.js and cannon.js</p>
		</div>
		<div slot="link">
			<a class="font-bold" href="/projects/lavafloor/">Play Game</a>
			<p class="text-xs sm:hidden">(Not built for mobile)</p>
		</div>
	</Box>
</ul>
