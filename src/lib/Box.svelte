<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	let alt; // export
	let shape; // export
</script>

<div class="{shape} bg-gray-800 rounded-md">
	<img {src} {alt} />
	<slot name="text" />
</div>

<!-- <style>
  div {
    @apply text-base;
  }
</style> -->
