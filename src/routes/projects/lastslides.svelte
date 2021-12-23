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
	<Slide>
		<h1>Contents:</h1>
		<ol class="py-4">
			<li>Predictability</li>
			<li>Problems within education</li>
			<li>Unresolvable Conflicts</li>
		</ol>
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