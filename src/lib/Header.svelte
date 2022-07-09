<script>
	import { page } from '$app/stores';
	import ghLogo from '$lib/assets/images/GitHub-Mark-Light-32px.png';
	import avatarUrl from '$lib/assets/images/avatar.png';

	let ghLogoSrc = ghLogo;
</script>

<!-- <header
	class="flex flex-col border-b-[1px] bg-[#f1f3f5]
	dark:border-gray-700 dark:bg-[#2d333b]">
	<h1 class="text-center font-bold">Aaron Dekker</h1>
	<div class="flex flex-row items-center justify-between px-2 py-2">
		<Toggle on:click={toggleTheme} />

		<nav>
			<ul class="flex flex-row space-x-5 text-2xl font-bold">
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Projects</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about/">About</a>
				</li>
			</ul>
		</nav>

		<div class="corner">
			<a href="https://github.com/DefinitelyMaybe">
				<img src={ghLogoSrc} alt="Github Icon" class="aspect-square" />
			</a>
		</div>
	</div>
</header> -->
<!-- <div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
				<li><a sveltekit:prefetch href="/">Projects</a></li>
				<li><a sveltekit:prefetch href="/about/">About</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl normal-case">Aaron Dekker</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a sveltekit:prefetch href="/">Projects</a></li>
			<li><a sveltekit:prefetch href="/about/">About</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<label tabindex="0" class="avatar btn btn-ghost btn-circle">
			<div class="w-10 rounded-full">
				<a href="https://github.com/DefinitelyMaybe" external><img src={ghLogoSrc} /></a>
			</div>
		</label>
	</div>
</div> -->
<div class="flex">
	<div class="avatar px-2 pl-10">
		<div class="w-24 rounded-full">
			<img src={avatarUrl} alt="avatar" />
		</div>
	</div>
	<div class="flex flex-col justify-center p-2">
		<span class="text-xl">Aaron Dekker</span>
		<span>Javascript Developer </span>
	</div>
</div>
<div class="p-4">
	Welcome! Here you'll find some of my projects - usually centered around web graphics, maths and
	games.
</div>
<div class="flex pb-10">
	<a class="link link-primary p-2" href="https://github.com/DefinitelyMaybe">@DefinitelyMaybe</a>
	<a class="link link-secondary p-2" href="https://twitter.com/0Rawr">twitter</a>
	<a
		class="link link-accent p-2"
		href="https://www.auckland.ac.nz/en/for/current-students/cs-academic-information/cs-graduation-information/cs-graduation-search-and-confirmation.html"
		>Bachelor of Science Graduate</a>
</div>
