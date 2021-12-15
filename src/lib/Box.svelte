<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	let shape;
</script>

<div
	class="{shape} rounded-md text-center shadow-lg border-[1px] pb-1
	dark:shadow-[#2d333b] dark:shadow-md dark:border-[1px] dark:border-[#2d333b]"
>
	<img {src} {alt} class="w-full rounded-md" />
	<div class="px-2 pb-1">
		<slot />
	</div>
</div>
