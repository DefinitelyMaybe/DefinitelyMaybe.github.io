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
	<!-- <section class="py-2 md:columns-2 lg:columns-3">
    
	</section> -->
	<p>Structure will set you free</p>
	<ul class="list-inside list-disc text-gray-400">
		<li>Why</li>
    <li>How</li>
    <li>What</li>
	</ul>
  <p>...</p>
</WriteUp>
