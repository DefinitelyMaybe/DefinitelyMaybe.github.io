<script>
	import Slide from '$lib/Slide.svelte';

	let slides;

	function handleBack(params) {
		slides.scrollBy({ left: -1, top: 0, behavior: 'smooth' });
	}

	function handleForward(params) {
		slides.scrollBy({ left: 1, top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>University Lessons</title>
	<meta name="description" content="A wild deck of slides appears" />
	<meta name="author" content="Aaron Dekker" />
</svelte:head>

<div class="relative flex grow">
	<button
		on:click={handleBack}
		class="absolute bottom-0 left-0 font-mono text-8xl opacity-20 sm:hover:opacity-100">&lt</button>
	<button
		on:click={handleForward}
		class="absolute bottom-0 right-0 font-mono text-8xl opacity-20 sm:hover:opacity-100"
		>&gt</button>
	<div bind:this={slides} class="flex snap-x snap-mandatory overflow-x-scroll">
		<Slide>
			<p class="text-xs">to</p>
			<h1 class="font-bold">Sir Ken Robinson</h1>
			<p>without whom we'd still be thinking we could standardize our way into the future</p>
			<a class="text-sx" href="https://www.youtube.com/watch?v=iG9CE55wbtY&t=1s">TED talk</a>
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
			<a href="#contents">contents</a>
		</Slide>
		<Slide>
			<p>
				Covid was and will still be a big deal going forward. Did anyone predict that before 2019?
				The answer is yes and no.
			</p>
			<p>
				To my knowledge, Bill Gates has been worried about this sort of crisis for quite some time.
			</p>
			<p>
				Perhaps a practical option for the conundrum would be estimate the global impact and
				multiply by the likelyhood of it happening over a given peroid of time.
			</p>
			<p>...right?</p>
		</Slide>
		<Slide>
			<p>Yes and no.</p>
			<p>
				It'd work for known problems with known solutions. It doesn't work for things like climate
				change or existential threats.
			</p>
			<p>
				Climate change is a known problem and does have solutions but difficulty lies in the
				predictability of the weather. If no-one can measure the impact a particular solution has,
				how on earth would you know which one to pick?
			</p>
		</Slide>
		<Slide id="education">
			<h1>Problems within Education</h1>
			<a href="#contents">contents</a>
		</Slide>
		<Slide>
			<h2 class="py-2 text-center">- Killing creativity</h2>
			<h2 class="py-2 text-center">- Unpredictability</h2>
			<h2 class="py-2 text-center">- Children's capcity for innovation</h2>
		</Slide>
		<Slide>
			<h2>Killing Creativity</h2>
			<p>
				If kids don't know, they'll give it a go. Going through the process of education usually
				stops that.
			</p>
			<p>If you're not prepared to be wrong, you'll never come up with anything original.</p>
			<p>
				What is the product and service of education? University professors and academic ability.
			</p>
			<p>Public education was designed to meet the needs of industrialism.</p>
			<p>Degrees aren't worth much anymore.</p>
		</Slide>
		<Slide>
			<h2>Unpredictability</h2>
			<a href="#predict">see earlier slides</a>
		</Slide>
		<Slide>
			<h2>Children's capcity for innovation</h2>
			<p>We know 3 things about intellegence:</p>
			<p>1 - It's diverse. IQ is a one dimensional measurement of a multi-dimensional space.</p>
			<p>
				2 - It's dynamic. Having original idea's that have value prodominally come about through <a
					href="https://www.youtube.com/watch?v=MZ2GuvUWaP8">remixing</a
				>.
			</p>
			<p>
				3 - It's distinct. For some very intellegent people moving is thinking. Calling that a
				learning disorder and giving them medication to calm down is a cop-out.
			</p>
		</Slide>
		<Slide>
			<p>
				Adopting a new conception of human ecology where we reconstitue our conception of the
				richness of human capcity. Our current system of education has mined our minds in the same
				way we've strip mined the earth for a particular commodity. For the future, that system
				won't service. We need to rethink the fundamental principles upon which we educate our
				children.
			</p>
			<p>
				What's the job of education? It's educating the whole being of our children for a future we
				will never see so that they can make something of it.
			</p>
		</Slide>
		<Slide id="conflicts">
			<h1>Unresolvable Conflicts</h1>
			<a href="#contents">contents</a>
		</Slide>
		<Slide>
			<p>
				Crying is all right in its way while it lasts. But you have to stop sooner or later, and
				then you still have to decide what to do.
			</p>
			<p>- C.S Lewis, The Silver Chair</p>
		</Slide>
		<Slide>
			<p>
				Have you heard of women's delema with pockets? Most of women's clothing have impractical
				pockets (or none at all) and there is no lack of complaints about it.
			</p>
			<p>
				Fast forward a couple of conversations and I now only see those complaints by women as an
				unresolvable conflict.
			</p>
			<p>
				To bring it all together, we need only to watch the fabulous fairy god mother scene from <a
					href="https://www.imdb.com/title/tt10155932/">Cinderella (2021)</a
				>.
			</p>
			<p>
				When Cinderella meets her fairy god mother and is transformed into a princess, she then asks
				why the kneels are so umcomfortable and impossible to walk in.
			</p>
			<p>God Mother: "Women's shoes are as they are. Even magic has it's limits"</p>
		</Slide>
		<Slide>
			<p>Honestly, I think that's fashion saying to women we've had enough.</p>
			<p>
				While women want to look attractive to their partner, there are limits. You can conceal a
				pocket within womens clothing easily enough but putting anything in that pocket creates a
				bulge. Women are concious enough already about different bulges, so do you really think the
				most attractive clothing will allow you to create one? Are women willing to lose a battle in
				the war for their partners attention? Don't count on it.
			</p>
		</Slide>
	</div>
</div>

<!-- https://existentialcomics.com/ -->

<!-- https://xkcd.com/ -->
<style>
	::-webkit-scrollbar {
		display: none;
	}
	@media (min-width: 640px) {
		::-webkit-scrollbar {
			display: block;
		}
	}
</style>
