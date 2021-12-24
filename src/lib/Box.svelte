<script>
	import { goto } from '$app/navigation';
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	export let href;
</script>

<div
	on:click={goto(href)}
	class="flex flex-col justify-start rounded-md text-center shadow-lg border-[1px] pb-1
	dark:shadow-[#2d333b] dark:shadow-md dark:border-[1px] dark:border-[#2d333b]
		hover:cursor-pointer"
>
	<img {src} {alt} class="rounded-md w-full" />
	<div class="px-2 py-2">
		<slot name="desc" />
	</div>
	<div class="px-2 py-2">
		<slot name="link" />
	</div>
</div>
