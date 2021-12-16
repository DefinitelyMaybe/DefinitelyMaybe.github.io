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
	import revealjsImg from '$lib/assets/images/revealjs.png';
	import mathsImg from '$lib/assets/images/mathsplayground.png';
	import tugImg from '$lib/assets/images/TUG/TUGconceptArtmini.jpg';

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

<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
	<Box src={fallingImg} alt="Falling 0's and 1's">
		<div slot="desc">
			<h2 class="font-bold">Remaking the Portfolio</h2>
			<p>A quick story about remaking this entire website.</p>
			<p>Side note: It's not finished.</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/remake"> Read about how I did it.</a>
	</Box>
	<Box src={mathsImg} alt="maths playground, graph of squarewave">
		<div slot="desc">
			<h2 class="font-bold">Maths and a UI</h2>
			<p>
				If you've ever heard of wolframalpha or matlab, those inspired this project. It's like a
				graphics calculator but for your mobile.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/mathsplay">View Project</a>
	</Box>
	<Box src={simonImg} alt="Simon Dev thumbnail">
		<div slot="desc">
			<h2 class="font-bold">Simons World - The Remix</h2>
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
		<a slot="link" class="font-bold" href="https://wonderful-stonebraker-0b161a.netlify.app/"
			>View the Remix</a
		>
		<p class="text-xs">(Not recommended for mobile)</p>
	</Box>
	<Box src={threeSrc} alt="threejs logo">
		<div slot="desc">
			<h2 class="font-bold">Now with more fetch!</h2>
			<p>
				Another good effort to bring three.js up to speed with modern javascript. specifically by
				implementing the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
					>fetch API</a
				> within the file loader. Previously it was using XMLHttpRequest which added complexity to the
				process.
			</p>
		</div>
		<a slot="link" class="font-bold" href="https://github.com/mrdoob/three.js/pull/22510"
			>Github PR</a
		>
	</Box>
	<Box src={threeSrc} alt="threejs logo">
		<div slot="desc">
			<h2 class="font-bold">We're doing it with class</h2>
			<p>
				This was a substantial multi-year effort to bring three.js into the future with modern
				javascript 🤵👏 I'm very pleased to have helped facilitate and be part of the movement.
			</p>
		</div>
		<a slot="link" class="font-bold" href="https://github.com/mrdoob/three.js/issues/19986"
			>Github Issue</a
		>
	</Box>
	<Box src={lavaCubeImg} alt="lava cube world">
		<div slot="desc">
			<h2 class="font-bold">The Floor is Lava!</h2>
			<p>An age old game remade with three.js and cannon.js</p>
		</div>
		<div slot="link">
			<a class="font-bold" href="/projects/lavafloor">Play Game</a>
			<p class="text-xs">(Not built for mobile)</p>
		</div>
	</Box>
	<Box src={threeSrc} alt="threejs logo">
		<div slot="desc">
			<h2 class="font-bold">Parsing Three.js</h2>
			<p>One does not simply parse three.js 🤷‍♂️ Getting things wrong and keeping on going 🕵️‍♂️</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/parsingthreejs">Read the write-up</a>
	</Box>
	<Box src={revealjsImg} alt="revealjs">
		<div slot="desc">
			<h2 class="font-bold">The Last Slides</h2>
			<p>
				When university lecture notes meet the web. Fair warning, tertairy material can be rather
				dry and tedious.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/lastslides">View the slide deck</a>
	</Box>
	<Box src={tugImg} alt="TUG concept art of a golem">
		<div slot="desc">
			<h2 class="font-bold">TUG mod development</h2>
			<p>
				A highly ambitious 3D sandbox game, aiming at being a better minecraft. It was a huge
				undertaking but fell apart in the end.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/storyaboutTUG">Read the Write-up</a>
	</Box>
	<!-- <Box></Box> -->
	<!-- Images from unsplash
		lava face - https://images.unsplash.com/photo-1634919872856-8da426d5540a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80
		space man - https://images.unsplash.com/photo-1630152389714-46b8c393f555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=70
		mountain car light stream - https://images.unsplash.com/photo-1622960748104-094380e1d892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=70
		mountain snow - https://images.unsplash.com/photo-1638809264876-63bf0a05f4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
		red texture - https://images.unsplash.com/photo-1590598016954-bc7ff4ad05d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
		nice unfocused lights - https://images.unsplash.com/photo-1638862457124-12c14e5fbd11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
		-->
</ul>
