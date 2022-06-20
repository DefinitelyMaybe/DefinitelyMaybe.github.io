<script>
	import { theme } from '$lib/Header.svelte';
	import WriteUp from '$lib/WriteUp.svelte';

	theme.subscribe((val) => {
		// if (val === 'light') {
		// 	threeSrc = threejswhiteImg;
		// } else {
		// 	threeSrc = threejsdarkImg;
		// }
	});
</script>

<svelte:head>
	<title>Cap in hand</title>
</svelte:head>

<WriteUp>
	<section class="py-2 md:columns-2 lg:columns-3">
		<p>hello world</p>
	</section>
</WriteUp>
