<script>
	import Box from '$lib/Box.svelte';
	import fallingImg from '$lib/assets/images/010-falling.jpg';
	import simonImg from '$lib/assets/images/simondev.png';
	import threejsdarkImg from '$lib/assets/images/threejslogodark.png';
	import lavaCubeImg from '$lib/assets/images/cubes.png';
	import tugImg from '$lib/assets/images/TUG/TUGconceptArtmini.jpg';
	import iahImg from '$lib/assets/images/I_AM_HOPE_LOGO_pink.webp';
	import zooImg from '$lib/assets/images/Zoo.png';
	import EditorImg from '$lib/assets/images/Editor.png';
	// import CapImg from '$lib/assets/images/cap.png';
	// import CodeImg from "$lib/assets/images/code.jpg";

	let threeSrc = threejsdarkImg;
</script>

<svelte:head>
	<title>Aaron Dekker - Projects</title>
</svelte:head>

<!-- <Box
		src={CapImg}
		alt="The Story"
		href="/projects/innovation/"
		type="medium"
		additions="md:col-start-2">
		<div slot="desc">
			<h2 class="font-bold">The heART of Innovation</h2>
			<p>
				Why minecraft missed what tiktok is.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/innovation/"
			>Read the article.</a>
	</Box> -->
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
<!-- <Box src={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/typed_arrays.png"} alt="My Editor" href="/projects/TypedArrays">
		<div slot="desc">
			<h2 class="font-bold">Sorting out the Basics</h2>
			<p>
				Because learning about typed arrays and types of numbers is hard enough.
			</p>
		</div>
		<a slot="link" class="font-bold" href="/projects/TypedArrays" external
			>Playground</a>
	</Box> -->
<!-- <Box src={EditorImg} alt="My Editor" href="https://three-editor-remake.vercel.app/">
		<div slot="desc">
			<h2 class="font-bold">Web Editor</h2>
			<p>
				A re-creation of the three.js web editor using svelte (Work in progress).
			</p>
		</div>
		<a slot="link" class="font-bold" href="https://three-editor-remake.vercel.app/" external
			>Visit the site</a>
	</Box> -->
<Box
	title={'Hope Zoo'}
	action={'Visit the site'}
	src={zooImg}
	alt="I AM HOPE"
	href="https://kids.iamhope.org.nz/"
	type="col-span-2">
	<p slot="desc">
		A mini zoo of animals for kids to engage with and learn about emotions. This project was made
		for the charity <a class="link link-primary" href="https://www.iamhope.org.nz/"
			>I AM HOPE <img class="inline w-6" src={iahImg} alt="I AM HOPE Logo" /></a>
		in collaboration with <a class="link link-primary" href="https://euclidean.co.nz/">Euclidean</a>
		and
		<a class="link link-primary" href="https://www.valerism.com/">Valerie</a>.
	</p>
</Box>
<Box
	title={'Remixing the Old'}
	action={'Read the article'}
	src={fallingImg}
	alt="Falling 0's and 1's"
	href="/projects/remake/">
	<p slot="desc">A story about remaking this entire website.</p>
</Box>
<Box
	title={'Simons World'}
	action={'Visit the site'}
	src={simonImg}
	alt="Simon Dev thumbnail"
	href="https://wonderful-stonebraker-0b161a.netlify.app/">
	<p slot="desc">
		A 5 week sprint refactoring a huge proportion of simondev's original <a
			class="link link-primary"
			href="https://github.com/simondevyoutube/Quick_3D_MMORPG">source code</a
		>. My remixed source code is
		<a
			class="link link-primary"
			href="https://github.com/DefinitelyMaybe/Not_So_Quick_3D_MMORPG_The_Remix">here</a
		>. Simon made a
		<a class="link link-primary" href="https://www.youtube.com/watch?v=IptkgFOoci0">
			great video explaining the project</a
		>.
	</p>
</Box>
<Box
	title={'Go Fetch!'}
	action={'Github Pull Request'}
	src={threeSrc}
	alt="threejs logo"
	href="https://github.com/mrdoob/three.js/pull/22510">
	<p slot="desc">
		Another good effort to bring three.js up to speed with modern javascript. specifically by
		implementing the <a
			class="link link-primary"
			href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch API</a> within the file
		loader. Previously it was using XMLHttpRequest which added complexity to the process.
	</p>
</Box>
<Box
	title={'Styling with Class'}
	action={'Github Issue'}
	src={threeSrc}
	alt="threejs logo"
	href="https://github.com/mrdoob/three.js/issues/19986">
	<p slot="desc">
		This was a substantial multi-year effort to bring three.js into the future with modern
		javascript 🤵👏 I'm very pleased to have helped facilitate and be part of the movement.
	</p>
</Box>
<Box
	title={'Javascript and Three.js'}
	action={'Read the Article'}
	src={threeSrc}
	alt="threejs logo"
	href="/projects/parsingthreejs/">
	<p slot="desc">
		One does not simply parse three.js 🤷‍♂️ Getting things wrong and keeping on going 🕵️‍♂️
	</p>
</Box>
<Box
	title={'University Lessons'}
	action={'SlideShow'}
	alt="university lecture theatre"
	href="/projects/lastslides/"
	src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
	additions="">
	<p slot="desc">
		Surely there'd be large scale studies showing the importance of education... right?
	</p>
</Box>
<Box
	title={'The Untitled Game'}
	action={'Read the Article'}
	src={tugImg}
	alt="TUG concept art of a golem"
	href="/projects/storyaboutTUG/"
	type="">
	<p slot="desc">
		A highly ambitious 3D sandbox game, aiming at being a better minecraft. It was a huge
		undertaking but fell apart in the end.
	</p>
</Box>
<Box
	title={'Death by Lava!'}
	action={'Visit the site'}
	src={lavaCubeImg}
	alt="lava cube world"
	href="/projects/lavafloor/">
	<p slot="desc">An age old game remade with three.js and cannon.js</p>
</Box>
