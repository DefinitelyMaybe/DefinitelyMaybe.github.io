import {
  Body,
  Box,
  BoxGeometry,
  BufferGeometry,
  Clock,
  Color,
  DirectionalLight,
  HemisphereLight,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshStandardMaterial,
  NaiveBroadphase,
  PerspectiveCamera,
  Plane,
  PlaneBufferGeometry,
  Quaternion,
  Scene,
  Vec3,
  Vector2,
  Vector3,
  WebGLRenderer,
  World,
} from "./deps.js";
import { PlayerControls } from "./PlayerControls.js";
import { spawnCubes } from "./helpers.js"

// state
export const state = {
  running: false,
  displayRestart: false,
}

// time
export const clock = new Clock(true);

// physics
export const world = new World();
world.gravity.set(0, -24, 0);
world.broadphase = new NaiveBroadphase();

// renderer
export const renderer = new WebGLRenderer({canvas:document.querySelector("canvas"), logarithmicDepthBuffer:true});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);

// scene
export const scene = new Scene();
scene.background = new Color(0xaaaaaa);

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

// const directionalLightHelper = new DirectionalLightHelper(directionalLight);
// scene.add(directionalLightHelper);

const hemisphereLight = new HemisphereLight(0xaaaaaa, 0xaaaaaa, 0.7);
scene.add(hemisphereLight);

// camera
export const camera = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);
camera.position.set(10, 10, 10);
scene.add(camera);

// flat world
const plane = new PlaneBufferGeometry(100, 100, 1, 1);
plane.rotateX(-Math.PI / 2);
let material = new MeshStandardMaterial({ color: 0xff0000 });
const floor = new Mesh(plane, material);
floor.name = "floor";
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
box.name = "player"
scene.add(box);

const cube = new Box(new Vec3(1, 1, 1));
export const cubeBody = new Body({ mass: 10 });
cubeBody.position.set(0, 10, 0);
cubeBody.addShape(cube);
world.addBody(cubeBody);

// controls
export const controls = new PlayerControls(cubeBody, camera, renderer.domElement);

// raycasting for fun
const geo = new BufferGeometry();
const mat = new LineBasicMaterial({ color: 0xff00ff });
const prevRay = new Line(geo, mat);
scene.add(prevRay);

// data structures
export const redCubesArray = [];

// UI & Events
const dead = document.querySelector("h1#dead")
const restart = document.querySelector("h1#restart")

window.addEventListener("visibilitychange", () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
  if (document.visibilityState === "hidden") {
    state.running = false;
    clock.stop();
  } else {
    // get ready to run again
    clock.start();
    state.running = true;
  }
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

document.addEventListener("player", (e) => {
  const object = e.detail.object
  const color = object.material.color

  if (object.name === "floor") {
    // restart
    dead.style.display = "block"
    setTimeout(() => {
      restart.style.display = "block"
    }, 3000 );
    // document.dispatchEvent(new Event("lose"))
  } else if (object.name === "randomCube") {
    // make the cube start falling through the ground
    if (color.r > 0.5) {
      object.material = new MeshStandardMaterial({color:0x333333})
    }
  }
  
})

// game loop
function animate() {
  requestAnimationFrame(animate);

  if (state.running) {
    const delta = clock.getDelta();

    // make a physics step
    world.step(delta);

    // update rendered positions
    if (controls.canMove) {
      box.position.x = cubeBody.position.x
      box.position.y = cubeBody.position.y
      box.position.z = cubeBody.position.z
    } else {
      if (box.position.y > -2) {
        box.position.y -= 0.01 
      }
    }
    
    box.quaternion.x = cubeBody.quaternion.x
    box.quaternion.y = cubeBody.quaternion.y
    box.quaternion.z = cubeBody.quaternion.z
    box.quaternion.w = cubeBody.quaternion.w

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
        } else {
          cPos.y -= 0.01
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

// finially start renderering
state.running = true
spawnCubes();
// also create a cube underneath the player when the game begins
material = new MeshStandardMaterial({ color: 0xaaaaaa });
const underBox = new Mesh(geometry, material);
underBox.position.y += 1
underBox.castShadow = true;
underBox.receiveShadow = true;
underBox.name = "randomCube"
scene.add(underBox);
const undercube = new Box(new Vec3(1, 1, 1));
const undercubeBody = new Body({ mass: 0 });
undercubeBody.position.set(0, 1, 0);
undercubeBody.addShape(undercube);
world.addBody(undercubeBody);
underBox.userData.physics = undercubeBody

redCubesArray.push(underBox)

animate();
// state.running = false

