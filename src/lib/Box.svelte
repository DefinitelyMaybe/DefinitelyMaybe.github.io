<script>
	import { goto } from '$app/navigation';
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	export let href;
	export let title = '';
	export let action ='';
	export let type = '';
	export let additions = '';
	// TODO-DefinitelyMaybe: Instead of literal tailwindcss additions, maybe make some classes like: big, medium, long, wide etc...
</script>

<div
	on:click={goto(href)}
	class="card bg-base-300 shadow-xl image-full cursor-pointer {type} {additions}">
	<figure><img {src} {alt} class="w-full" /></figure>
	<div class="card-body">
		<h1 class="card-title text-2xl">{title}</h1>
		<div class="text-base">
			<slot name="desc" />
		</div>
		<div class="card-actions justify-end">
			<button class="btn glass">{action}</button>
		</div>
	</div>
</div>
