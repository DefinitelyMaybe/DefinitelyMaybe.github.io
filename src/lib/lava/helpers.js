import { MeshStandardMaterial, Box, BoxGeometry, Body, Mesh, Vec3 } from "./deps.js";
// import { castRayElement } from "./debug.js";

export function spawnCubes(scene, world, redCubesArray) {
  // spawn red cubes somewhere within the current floor
  const material = new MeshStandardMaterial({ color: 0xaaaaaa });
  const geometry = new BoxGeometry(2, 2, 2);
  for (let i = 0; i < 100; i++) {
    const cube = new Mesh(geometry, material);
    const scalar = 50;
    const Xsign = Math.random() < 0.5 ? -1 : 1;
    const Zsign = Math.random() < 0.5 ? -1 : 1;
    const posX = Xsign * Math.random() * scalar;
    const posY = 1;
    const posZ = Zsign * Math.random() * scalar;
    cube.position.set(
      posX,
      posY,
      posZ,
    );
    cube.name = "randomCube";
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
    // cannon.js
    const redCube = new Box(new Vec3(1, 1, 1));
    const redCubeBody = new Body({ mass: 0 });
    redCubeBody.position.set(posX, posY, posZ);
    redCubeBody.addShape(redCube);
    world.addBody(redCubeBody);
    cube.userData.physics = redCubeBody;

    redCubesArray.push(cube);
  }
}

export function moveGreenCube(cube) {
  const scalar = 50;
  const Xsign = Math.random() < 0.5 ? -1 : 1;
  const Zsign = Math.random() < 0.5 ? -1 : 1;
  cube.position.set(
    Xsign * Math.random() * scalar,
    30,
    Zsign * Math.random() * scalar,
  );
}

export function castRay(e) {
  if (castRayElement.checked) {
    console.log("casting ray");
    // throw out a ray and find a random object
    const rayCaster = new Raycaster();
    rayCaster.setFromCamera(
      new Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ),
      camera,
    );
    const intersection = rayCaster.intersectObject(scene, true);

    // draw the line that was raycasted
    const direction = rayCaster.ray.direction.multiplyScalar(50);
    const p0 = rayCaster.ray.origin;
    const p1 = new Vector3(p0.x, p0.y, p0.z).add(direction);
    const p2 = new Vector3(p1.x, p1.y, p1.z).add(direction);

    const points = [];
    points.push(p0);
    points.push(p1);
    points.push(p2);
    prevRay.geometry.setFromPoints(points);

    //check intersection
    if (intersection.length > 0) {
      const obj = intersection[0].object;
      console.log(`intersected with ${intersection.length} objects`);

      if (changeOrbitElement.checked) {
        console.log(`controls changed to ${obj.name}`);
        // controls.target = obj.position;
      }
    }
  }
}