<script>
	import { Mesh } from 'threlte';
	import { PlaneBufferGeometry, DoubleSide, MeshStandardMaterial, BufferAttribute, Float32BufferAttribute } from 'three';
	import simplex from 'simplex-noise';

	export let seed = 123456789;
	export let exponentiation = 7.5;
	export let height = 800;
	export let lacunarity = 1.6;
	export let octaves = 10;
	export let persistence = 0.5;
	export let scale = 1800;

	export let planeWidth = 100;
	export let planeheight = 100;

	let noise = new simplex(seed);
	let geometry = new PlaneBufferGeometry(planeWidth, planeheight, planeWidth, planeheight);;

	const vertices = geometry.attributes.position.array
	for ( let i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
		vertices[ j + 2 ] = calc2DNoise(vertices[j], vertices[j+1]);
	}
	geometry.computeVertexNormals()

	function calc2DNoise(x, y) {
		const G = Math.pow(2, -persistence);
		const xs = x / scale;
		const ys = y / scale;

		let amplitude = 1.0;
		let frequency = 1.0;
		let normalization = 0;
		let total = 0;
		for (let o = 0; o < octaves; o++) {
			const noiseValue = noise.noise2D(xs * frequency, ys * frequency) * 0.5 + 0.5;

			total += noiseValue * amplitude;
			normalization += amplitude;
			amplitude *= G;
			frequency *= lacunarity;
		}
		total /= normalization;
		return Math.pow(total, exponentiation) * height;
	}
</script>

<Mesh
	interactive
	on:click
	on:contextmenu
	receiveShadow
	rotation={{ x: -90 * (Math.PI / 180) }}
	{geometry}
	material={new MeshStandardMaterial({ side: DoubleSide, color: 'grey' })} />
