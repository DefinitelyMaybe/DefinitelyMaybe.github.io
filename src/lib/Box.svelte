<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	export let href;
	export let title = '';
	export let action = '';
</script>

<a {href} class="card image-full cursor-pointer shadow-xl">
	<figure><img {src} {alt} class="w-full" /></figure>
	<div class="card-body">
		<h1 class="card-title text-2xl">{title}</h1>
		<div class="text-base">
			<slot name="desc" />
		</div>
		<div class="card-actions justify-end">
			<button class="glass btn">{action}</button>
		</div>
	</div>
</a>
