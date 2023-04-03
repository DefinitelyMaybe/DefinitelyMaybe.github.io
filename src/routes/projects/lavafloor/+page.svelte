<script>
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { start } from './states';

	$: console.log($start);
</script>

<div class="flex h-screen">
	<Canvas>
		<Scene />
	</Canvas>
</div>
<div class="absolute top-0 left-0 h-screen w-screen pointer-events-none">
	<div class="relative w-full h-full">
		<div class="absolute w-full h-full">
			<a class="btn m-4 pointer-events-auto" href="/">Home</a>
		</div>
		<div class="absolute w-full h-full transition-opacity {$start ? 'opacity-10' : 'opacity-100'}">
			<div class="flex flex-col items-center justify-center h-full">
				<h1 class="text-6xl font-bold text-white">The Floor is Lava!</h1>
				<p class="text-2xl text-white">A simple game using threlte.</p>
				<button
					class="btn pointer-events-auto"
					on:click={() => {
						$start = !$start;
					}}>start</button>
			</div>
		</div>
	</div>
</div>
