<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	let alt; // export
	let shape; // export
</script>

<div class="{shape} rounded-md text-center">
	<img {src} {alt} class="w-full rounded-md" />
	<slot />
</div>

<!-- <style>
  div {
    @apply text-base;
  }
</style> -->
