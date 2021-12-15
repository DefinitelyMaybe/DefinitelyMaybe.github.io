<script>
  export let anchor
  export let A11anchortext
  export let disabled = false
</script>

<div on:click {disabled}
	class="rounded-md text-center shadow-lg border-[1px] pb-1
	dark:shadow-[#2d333b] dark:shadow-md dark:border-[1px] dark:border-[#2d333b]">
  <a href="{anchor}" class="hidden">{A11anchortext}</a>
	<div class="px-2 py-2">
		<slot />
	</div>
</div>
