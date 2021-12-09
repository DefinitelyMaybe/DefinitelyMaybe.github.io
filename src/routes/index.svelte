<script context="module">
	export const prerender = true;
</script>

<script>
	// import Counter from '$lib/Counter.svelte';
	import Box from '$lib/Box.svelte';
	import simonImg from '$lib/assets/images/simondev.png';
</script>

<svelte:head>
	<title>Aaron Dekker - Projects</title>
	<meta property="og:title" content="Aaron Dekker - Developer" />
	<meta property="og:image" content="https://definitelymaybe.github.io/images/lead-bg.jpg" />
	<meta
		property="og:description"
		content="Code Wrangler | BSc Graduate | Open-Source Contributor"
	/>
	<meta property="og:url" content="https://definitelymaybe.github.io/" />
</svelte:head>

<section>
	<ul class="grid grid-cols-1 gap-2">
		<Box src={simonImg} alt="Simon Dev thumbnail">
			<p slot="text">hello world</p>
		</Box>
		<Box
			src="https://images.unsplash.com/photo-1634919872856-8da426d5540a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
		/>
		<Box
			src="https://images.unsplash.com/photo-1630152389714-46b8c393f555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=70"
		/>
		<Box
			src="https://images.unsplash.com/photo-1633119277160-9e6b3204ca56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=70"
		/>
		<Box
			src="https://images.unsplash.com/photo-1622960748104-094380e1d892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=70"
		/>
		<Box
			src="https://images.unsplash.com/photo-1638809264876-63bf0a05f4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
		/>
		<Box
			src="https://images.unsplash.com/photo-1590598016954-bc7ff4ad05d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
		/>
		<Box
			src="https://images.unsplash.com/photo-1638862457124-12c14e5fbd11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
		/>
		<!-- <Box></Box> -->
	</ul>
</section>
