<script>
	import ghLogo from '$lib/assets/images/GitHub-Mark-Light-32px.png';
	import avatarUrl from '$lib/assets/images/avatar.png';
	import twitterLogo from "$lib/assets/images/2021 Twitter logo - blue.png";
</script>


<div class="flex">
	<div class="avatar px-2">
		<div class="w-24 rounded-full border-black outline outline-4 outline-base-200">
			<img src={avatarUrl} alt="avatar" />
		</div>
	</div>
	<div class="flex flex-col justify-center p-2">
		<span class="text-3xl">Aaron Dekker</span>
		<span class="text-info">Javascript Developer </span>
		<a
		class="text-accent text-sm"
		href="https://www.auckland.ac.nz/en/for/current-students/cs-academic-information/cs-graduation-information/cs-graduation-search-and-confirmation.html"
		>Bachelor of Science Graduate</a>
	</div>
</div>
<div class="p-4">
	Howdy! Here you'll find some of my projects - usually centered around web dev, graphics, maths and
	games.
</div>
<div class="flex pb-14 text-base items-center">
	<a class="flex flex-col link link-primary px-4" href="https://github.com/DefinitelyMaybe">
		<img src="{ghLogo}" alt="github logo" class="w-10">
	</a>
	<a class="link link-secondary px-4" href="https://twitter.com/0Rawr">
		<img src="{twitterLogo}" alt="github logo" class="w-10">
	</a>
</div>
