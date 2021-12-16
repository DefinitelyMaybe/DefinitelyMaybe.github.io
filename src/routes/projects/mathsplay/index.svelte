<script>
	import Box from '$lib/mathsplay/Box.svelte';
	import mathsIcon from '$lib/assets/images/maths-icon.png';
</script>

<svelte:head>
	<meta name="The Matrix" charset="utf-8" />
	<link rel="shortcut icon" href={mathsIcon} type="image/x-icon" />
	<title>Mathy Web Thing</title>
</svelte:head>

<ul class="grid grid-cols-2 gap-2 content-start">
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>Functions</h1>
		<p>- descriptions and naming</p>
		<p>- Financial</p>
		<p>- recursion</p>
		<p>- Programs</p>
	</Box>
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>Graphing</h1>
		<ul>
			<li>2D - (axis and phase spaces)</li>
			<li>3D</li>
		</ul>
	</Box>
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>Tables</h1>
		<p>- tabular data</p>
		<p>- statistics</p>
	</Box>
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>Matrices</h1>
		<h1>--</h1>
		<h1>Tensors</h1>
	</Box>
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>AI</h1>
		<p>As in send a photo through an AI or try out a chatbot</p>
		<p>More of an interface than having all of the models in-phone-memory</p>
	</Box>
	<Box anchor="/projects/mathsplay/functions" A11text="Functions">
		<h1>Save</h1>
		<h1>Load</h1>
		<h1>--</h1>
		<h1>Share</h1>
	</Box>
</ul>
