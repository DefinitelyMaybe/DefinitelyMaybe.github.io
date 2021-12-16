<script>
	import WriteUp from '$lib/WriteUp.svelte';
</script>

<WriteUp>
	<h1 class="text-center">The Remake</h1>
	<p>
		This project started taking shape really quickly. <a href="https://kit.svelte.dev/"
			>Svelte.kit</a
		>
		and <a href="https://tailwindcss.com/">Tailwindcss</a> have been the best dev tool choices I've made
		to date. I didn't think I had the greatest skill with html, css and javascript but it's only taken
		me two weeks to get here. That includes messing around with configs for a couple of days, merging
		old projects that used global scripts, responsive image sizing and plenty more. I'm kinda of in shock
		about it.
	</p>
	<p>
		First couple of days was making sure the crucial pieces would work. Sveltekit has a static
		adapter that'll output the entire site for github pages <i>but</i> one does not simply deploy to
		github pages. A short version of it is that I've kept everything in the same repo and configured
		github to serve the <code>docs</code> folder instead of the default.
	</p>
	<p>
		I let go of most of the old projects. At least in there original form. Reveal.js was basically
		clever styling for 2013 however css has moved on since then. More to the point, because I was
		watching a couple of tailwindcss's <a
			href="https://www.youtube.com/channel/UCOe-8z68tgw9ioqVvYM4ddQ">youtube videos</a
		>, I'd just so happened to come across videos of them talking about how to implement the same
		features, the kicker being it was simpler.
	</p>
	<p>Svelte.kit and Tailwindcss, you guys are the real mvp's.</p>
</WriteUp>
