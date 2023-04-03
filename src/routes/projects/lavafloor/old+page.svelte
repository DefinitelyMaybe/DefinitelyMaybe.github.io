<script>
	import {
		BoxGeometry,
		Clock,
		Color,
		DirectionalLight,
		HemisphereLight,
		Mesh,
		MeshStandardMaterial,
		PerspectiveCamera,
		Plane,
		PlaneBufferGeometry,
		Scene,
		Vector2,
		WebGLRenderer,
		Body,
		Box,
		NaiveBroadphase,
		Vec3,
		World,
		FogExp2
	} from 'src/routes/projects/lavafloor/deps.js';
	import { PlayerControls } from '$lib/lava/PlayerControls.js';
	import { spawnCubes } from '$lib/lava/helpers.js';
	import { onMount } from 'svelte';

	let score = 0;
	let highscore = 0;
	let running = false;
	let dead = false;
	let canvas;
	let renderer;
	let camera;
	let cubeBody;
	let controls;
	let redCubesArray = [];

	const clock = new Clock(true);

	const world = new World();
	world.gravity.set(0, -24, 0);
	world.broadphase = new NaiveBroadphase();

	const scene = new Scene();
	scene.background = new Color(0xaaaaaa);
	scene.fog = new FogExp2(0xaaaaaa, 0.04);

	// lighting
	const directionalLight = new DirectionalLight();
	const d = 100;
	directionalLight.position.set(d, d, d);
	directionalLight.castShadow = true;
	directionalLight.shadow.mapSize = new Vector2(2048, 2048);
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;
	scene.add(directionalLight);

	const hemisphereLight = new HemisphereLight(0xaaaaaa, 0xaaaaaa, 0.7);
	scene.add(hemisphereLight);

	// flat world
	const plane = new PlaneBufferGeometry(100, 100, 1, 1);
	plane.rotateX(-Math.PI / 2);
	let material = new MeshStandardMaterial({ color: 0xff0000 });
	const floor = new Mesh(plane, material);
	floor.name = 'floor';
	floor.receiveShadow = true;
	scene.add(floor);

	const groundPlane = new Plane();
	const groundBody = new Body({ mass: 0 });
	groundBody.addShape(groundPlane);
	groundBody.quaternion.setFromAxisAngle(new Vec3(1, 0, 0), -Math.PI / 2);
	world.addBody(groundBody);

	// player
	const geometry = new BoxGeometry(2, 2, 2);
	material = new MeshStandardMaterial({ color: 0x00ff00 });
	const box = new Mesh(geometry, material);
	box.castShadow = true;
	box.receiveShadow = true;
	box.name = 'player';
	scene.add(box);

	const cube = new Box(new Vec3(1, 1, 1));
	cubeBody = new Body({ mass: 10 });
	cubeBody.position.set(0, 10, 0);
	cubeBody.addShape(cube);
	world.addBody(cubeBody);

	// -----------------------------------------------------
	// functions
	function animate() {
		requestAnimationFrame(animate);

		if (running) {
			const delta = clock.getDelta();

			// make a physics step
			world.step(delta);

			// update rendered positions
			if (controls.canMove) {
				box.position.x = cubeBody.position.x;
				box.position.y = cubeBody.position.y;
				box.position.z = cubeBody.position.z;
			} else {
				if (box.position.y > -2) {
					box.position.y -= 0.01;
				}
			}

			box.quaternion.x = cubeBody.quaternion.x;
			box.quaternion.y = cubeBody.quaternion.y;
			box.quaternion.z = cubeBody.quaternion.z;
			box.quaternion.w = cubeBody.quaternion.w;

			redCubesArray.forEach((cube) => {
				const cPos = cube.userData.physics.position;
				cube.position.x = cPos.x;
				cube.position.y = cPos.y;
				cube.position.z = cPos.z;
				const cQuat = cube.userData.physics.quaternion;
				cube.quaternion.x = cQuat.x;
				cube.quaternion.y = cQuat.y;
				cube.quaternion.z = cQuat.z;
				cube.quaternion.w = cQuat.w;
				if (cube.material.color.r < 0.5) {
					if (cPos.y < -2) {
						// destory the cube
						scene.remove(cube);
					} else {
						cPos.y -= 0.01;
					}
				}
			});

			// camera position must be updated
			// velocity may move object position
			controls.update();

			renderer.render(scene, camera);

			// updateTable();
		}
	}

	function restart() {
		// start
		running = true;
		dead = false;
		controls.canMove = true;
		score = 0;
		redCubesArray.forEach((obj) => {
			world.removeBody(obj.userData.physics);
			scene.remove(obj);
		});
		cubeBody.position.set(0, 10, 0);
		spawnCubes(scene, world, redCubesArray);

		// also create a cube underneath the player when the game begins
		createUnderCube();

		// remove some ui if it was there
		// deadElement.style.display = "none"
		// restartElement.style.display = "none"

		// updateScore()
	}

	function createUnderCube() {
		material = new MeshStandardMaterial({ color: 0xaaaaaa });
		const underBox = new Mesh(geometry, material);
		underBox.position.y += 1;
		underBox.castShadow = true;
		underBox.receiveShadow = true;
		underBox.name = 'randomCube';
		scene.add(underBox);

		// under cube
		const undercube = new Box(new Vec3(1, 1, 1));
		const undercubeBody = new Body({ mass: 0 });
		undercubeBody.position.set(0, 1, 0);
		undercubeBody.addShape(undercube);
		world.addBody(undercubeBody);
		underBox.userData.physics = undercubeBody;

		redCubesArray.push(underBox);
	}

	function resizeCanvas() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function handlePlayerEvent(e) {
		const object = e.detail.object;
		const color = object.material.color;

		if (object.name === 'floor') {
			dead = true;
			if (score >= highscore) {
				localStorage.setItem('highscore', score);
				highscore = score;
			}
		} else if (object.name === 'randomCube') {
			// make the cube start falling through the ground
			if (color.r > 0.5) {
				// add to score
				score += 1;
				object.material = new MeshStandardMaterial({ color: 0x333333 });
			}
		}
	}

	onMount(() => {
		if (localStorage.getItem('highscore') == undefined) {
			localStorage.setItem('highscore', 0);
		} else {
			highscore = localStorage.getItem('highscore');
		}

		renderer = new WebGLRenderer({ canvas: canvas, antialias: true, logarithmicDepthBuffer: true });
		renderer.shadowMap.enabled = true;
		renderer.setSize(window.innerWidth, window.innerHeight);

		camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 1000);
		camera.position.set(10, 10, 10);
		scene.add(camera);

		controls = new PlayerControls(cubeBody, camera, renderer.domElement);

		document.addEventListener('player', handlePlayerEvent);

		restart();

		animate();

		return () => {
			document.removeEventListener('player', handlePlayerEvent);
			renderer.forceContextLoss();
			renderer.dispose();
		};
	});
</script>

<svelte:head>
	<title>The Floor is Lava!</title>
</svelte:head>

<svelte:window
	on:focus={() => {
		if (document.visibilityState === 'hidden') {
			running = false;
			clock.stop();
		} else {
			// get ready to run again
			clock.start();
			running = true;
		}
	}}
	on:resize={resizeCanvas}
	on:keypress={(e) => {
		if (e.key == 'r') {
			restart();
		}
	}} />

<canvas bind:this={canvas} />
<div class="absolute top-0 z-10 h-full w-full">
	<div class="flex h-full grow flex-col items-center pt-4">
		<h1 class="text-6xl">Highscore: {highscore}</h1>
		<h1 class="text-2xl">Score: {score}</h1>
	</div>
</div>
<div class="absolute top-0 z-10 h-full w-full">
	<div class="flex h-full grow items-center justify-center">
		{#if dead}
			<h1 class="text-6xl font-bold text-red-800">Dead.</h1>
		{/if}
	</div>
</div>
<div class="absolute top-0 z-10 h-full w-full">
	<div class="flex flex-col items-end pr-4 pt-4 text-gray-700">
		<p>Use the 'wasd' keys to move around</p>
		<p>Press space to jump</p>
		<p>Press 'r' to restart</p>
	</div>
</div>
