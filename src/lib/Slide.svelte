<script>
	export let id = '';
</script>

<div
	{id}
	class="mx-8 flex min-w-full snap-center snap-always flex-col justify-center p-4
  shadow-lg dark:border-[1px] dark:border-[#2d333b] dark:shadow-md dark:shadow-[#2d333b]">
	<slot />
</div>
