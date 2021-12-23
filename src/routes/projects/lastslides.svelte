<script>
	import Slide from "$lib/Slide.svelte";
</script>

<svelte:head>
	<title>University Lessons</title>
	<meta name="description" content="A wild deck of slides appears" />
	<meta name="author" content="Aaron Dekker" />
</svelte:head>

<div class="flex grow snap-x overflow-x-scroll snap-mandatory">
	<Slide>
		<p class="text-xs">to</p>
		<h1 class="font-bold">Sir Ken Robinson</h1>
		<p>without whom we'd still be thinking we could standardize our way into the future</p>
	</Slide>
	<Slide id="contents">
		<h1>Contents:</h1>
		<ol class="py-4">
			<li><a href="#predict">Predictability</a></li>
			<li><a href="#education">Problems within education</a></li>
			<li><a href="#conflicts">Unresolvable Conflicts</a></li>
		</ol>
	</Slide>
	<Slide id="predict">
		<h1>Predictability</h1>
		<a href="contents">contents</a>
	</Slide>
	<Slide>
		<p>As with many things, giving an initial low resolution picture or metaphor is best however because this is the end of 2021, we can go a bit deeper</p>
		<p>Covid was and will still be a big deal going forward. Did anyone predict that before 2019? The answer is yes and no.</p>
		<p>To my knowledge, Bill Gates has been worried about this sort of crisis for quite some time.</p>
		<p>I'm not surprised that we've ended up in this situation.</p>
	</Slide>
	<Slide id="education">
		<h1>Problems within education</h1>
	</Slide>
	<Slide></Slide>
	<Slide id="conflicts">
		<h1>Unresolvable Conflicts</h1>
	</Slide>
	<Slide>
		<p>Crying is all right in its way while it lasts. But you have to stop sooner or later, and then you still have to decide what to do.</p>
		<p>- C.S Lewis, The Silver Chair</p>
	</Slide>
	<Slide>
		Lessons from my Ted talks
	</Slide>
	<Slide>
		Lessons from tiktok
	</Slide>
	<!-- <Slide>
		<p>Sir Ken Robinson <a href="https://www.youtube.com/watch?v=iG9CE55wbtY&t=1s">video</a> </p>
	</Slide>
	<Slide>
		<p>Ron Finely & Simon Sinek <a href="https://youtu.be/eQ0A-4DhBeA">video</a></p>
	</Slide> -->
</div>

<!-- https://existentialcomics.com/ -->
<!-- https://xkcd.com/ -->

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>