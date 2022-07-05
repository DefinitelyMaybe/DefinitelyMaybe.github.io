<script>
	import {
		CircleBufferGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		DoubleSide,
		FrontSide,
		CapsuleBufferGeometry
	} from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Group,
		Mesh,
		OrbitControls,
		PerspectiveCamera
	} from 'threlte';
	import { spring } from 'svelte/motion';
	import { useThrelte, useFrame } from 'threlte';

	const scale = spring(1);
	let camera;
</script>

<div class="absolute flex flex-col items-center justify-center">
	<p>scale - {Math.round($scale)}</p>
	{#if camera}
		<p>camera - {camera.position}</p>
	{/if}
	<button
		class="btn"
		on:click={() => {
			console.log('hello world');
		}}>test</button>
</div>

<div class="flex grow">
	<Canvas>
		<PerspectiveCamera bind:camera position={{ x: 0, y: 10, z: 10 }} fov={90}>
			<OrbitControls maxPolarAngle={DEG2RAD * 80} target={{ y: 0.5 }} />
		</PerspectiveCamera>

		<DirectionalLight shadow={{ mapSize: [2048, 2048] }} position={{ x: 10, y: 10, z: 10 }} />
		<AmbientLight intensity={0.2} />

		<Group scale={$scale}>
			<Mesh
				position={{ y: 2 }}
				receiveShadow
				castShadow
				geometry={new CapsuleBufferGeometry(1, 3, 2, 10)}
				material={new MeshStandardMaterial({ color: '#333333' })} />
		</Group>

		<Group>
			<Mesh
				interactive
				on:click={(event) => {
					console.log(event.detail.point);
				}}
				receiveShadow
				rotation={{ x: -90 * (Math.PI / 180) }}
				geometry={new CircleBufferGeometry(10, 72)}
				material={new MeshStandardMaterial({ side: DoubleSide, color: 'white' })} />
			<Mesh
				castShadow
				receiveShadow
				position={{ x: 7, y: 0.5, z: 5 }}
				geometry={new BoxBufferGeometry(1, 1, 1)}
				material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
			<Mesh
				castShadow
				receiveShadow
				position={{ x: 0, y: 0.5, z: -8 }}
				geometry={new BoxBufferGeometry(1, 1, 1)}
				material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
			<Group position={{ x: 6, y: 0.5, z: -5 }} castShadow receiveShadow>
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 0.5, y: 0, z: -1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 1, y: 0, z: 1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: -1, y: 0, z: -0.5 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
			</Group>
			<Group position={{ x: -7, y: 0.5, z: -2 }} castShadow receiveShadow>
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 0.5, y: 0, z: -1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 1, y: 0, z: 1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: -1, y: 0, z: -0.5 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
			</Group>
			<Group position={{ x: -6, y: 0.5, z: 6 }} castShadow receiveShadow>
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 0.5, y: 0, z: -1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: 1, y: 0, z: 1 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
				<Mesh
					castShadow
					receiveShadow
					position={{ x: -1, y: 0, z: -0.5 }}
					geometry={new BoxBufferGeometry(1, 1, 1)}
					material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
			</Group>
		</Group>
	</Canvas>
</div>
