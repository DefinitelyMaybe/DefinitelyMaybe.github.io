<script>
	export let checked = false;
</script>

<div
	class="flex bg-white border-2 border-black w-6 h-4 rounded-lg
  dark:bg-black dark:border-white dark:flex-row-reverse"
	on:click
>
	<input type="checkbox" {checked} class="appearance-none" />
	<div
		class="w-3 h-3 bg-black rounded-lg
    dark:bg-white"
	/>
</div>
