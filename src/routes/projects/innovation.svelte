<script>
	import { theme } from '$lib/Header.svelte';
	import WriteUp from '$lib/WriteUp.svelte';

	theme.subscribe((val) => {
		// if (val === 'light') {
		// 	threeSrc = threejswhiteImg;
		// } else {
		// 	threeSrc = threejsdarkImg;
		// }
	});
</script>

<svelte:head>
	<title>Innovation</title>
</svelte:head>

<WriteUp>
	<p>Structure will set you free</p>
	<ul class="list-inside list-disc text-gray-400">
		<li>Why</li>
		<li>How</li>
		<li>What</li>
	</ul>
	<p>...</p>
	<section class="py-2 md:columns-2 lg:columns-3">
		<p>
			We all know innovation is important, it's the guantlet by which all new ideas must pass before
			becoming a reality. Which is a bit of a shame as most people figure out - making even the
			smallest idea come to life requires so much upfront investment that mostly it's better not to
			try. Just go to work, pick up that pay check and if you've got anything left, find something
			to do that means something.
		</p>
		<p>
			Much like trying to innovate, sitting down for a cup of tea (or coffee) isn't going to get you
			anywhere but is also the only way to get anywhere. I'll explain. Firstly, other people are a
			multiplier propertional to how well you connect with each other. If you're running the
			guantlet, there is not better aid than a friend who believes in you. Secondly, a cup of tea in
			isolation isn't important. What's important is the cummulation of cup's of tea over time. For
			the guantlet, someone standing with you the whole way is worth more than a thosand people
			cheering you on during the highlights.
		</p>
		<p>
			<i
				>[I will stress these two points by refering to a book about success called <a
					href="https://www.gladwellbooks.com/titles/malcolm-gladwell/outliers/9780316040341/"
					>Outliers</a
				>. I thoroughly enjoyed it as an audio book]</i>
		</p>
		<p>
			Lots of people run into these two issues. Either they need it because change has great
			potential or, they're afraid of the consequences of the wrong change. It's a slow, painful,
			costly experience which equates to flipping the innovation coin once. Which end of the stick
			you getIt's two sides of the same coin. No really.
		</p>
		<p>IFC.js</p>
		<p>
			the amount of investment you made in making it a thing in the first place. You want other
			people, perspectives, ideas, methods, something, anything. You need innovation. You have a
			complex question encapsulated within an environment who's details aren't making sense. For the
			rest of us, well, the work I want to do with my pay check is build the something which enables
			you to build/test/try-out your idea.
		</p>
	</section>
</WriteUp>
