<script>
	import {
		CircleBufferGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		DoubleSide,
		FrontSide,
		CapsuleBufferGeometry,
		Vector2
	} from 'three';
	import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
	import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
	// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
	// import { PixelShader } from "three/examples/jsm/shaders/PixelShader.js";
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Group,
		Mesh,
		OrbitControls,
		PerspectiveCamera,
		Pass
	} from 'threlte';
	import { HTML } from 'threlte/extras';
	import { spring } from 'svelte/motion';

	import Boxes from '$lib/objects/Boxes.svelte';

	const scale = spring(1);
	const posX = spring(0);
	const posZ = spring(0);
	let camera, player;
	let displayInfo = false;
</script>

<!-- <div class="absolute flex flex-col items-center justify-center">
	<p>scale - {Math.round($scale)}</p>
	{#if camera}
		<p>camera - {camera.position}</p>
	{/if}
	<button
		class="btn"
		on:click={() => {
			console.log(camera.position);
		}}>test</button>
</div> -->

<div class="absolute h-full w-full">
	<Canvas>
		<PerspectiveCamera bind:camera position={{ x: 0, y: 20, z: 20 }} fov={90}>
			<OrbitControls maxPolarAngle={DEG2RAD * 80} target={{ y: 0.5 }} enablePan={false} />
		</PerspectiveCamera>

		<DirectionalLight
			shadow={{ mapSize: [2048, 2048], camera: { bottom: -10, left: -10, right: 10, top: 10 } }}
			position={{ x: 10, y: 10, z: 10 }} />
		<AmbientLight intensity={0.2} />
		<Pass pass={new UnrealBloomPass(new Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.698)}/>

		<Group scale={$scale}>
			<Mesh
				bind:mesh={player}
				interactive
				on:click={() => {
					displayInfo = true;
				}}
				on:contextmenu={() => {
					displayInfo = false
				}}
				receiveShadow
				castShadow
				geometry={new CapsuleBufferGeometry(1, 3, 2, 10)}
				material={new MeshStandardMaterial({ color: '#333333' })}
				position={{ x: $posX, y: 2, z: $posZ }}>
				<HTML position={{ x: $posX, y: 3, z: $posZ }}>
					<div class={displayInfo ? '' : 'hidden'}>
						<button
							class="btn"
							on:click={() => {
								console.log('world');
							}}>hello</button>
					</div>
				</HTML>
			</Mesh>
		</Group>

		<Group>
			<Mesh
				interactive
				on:click={(event) => {
					console.log(event.detail.point);
				}}
				on:contextmenu={(event) => {
					const { x, z } = event.detail.point;
					$posX = x;
					$posZ = z;
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
			<Boxes position={{ x: 6, y: 0.5, z: -5 }} />
			<Boxes position={{ x: -7, y: 0.5, z: -2 }} />
			<Boxes position={{ x: -6, y: 0.5, z: 6 }} />
		</Group>
	</Canvas>
</div>
