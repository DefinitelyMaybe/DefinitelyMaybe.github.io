<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	let shape;
</script>

<div
	class="{shape} rounded-md text-center shadow-lg border-[1px] pb-1
	dark:shadow-gray-900 dark:shadow-md dark:border-[1px] dark:border-gray-900"
>
	<img {src} {alt} class="w-full rounded-md" />
	<div class="px-2">
		<slot />
	</div>
</div>
