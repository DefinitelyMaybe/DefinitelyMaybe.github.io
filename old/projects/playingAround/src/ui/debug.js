import { controls, scene, cubeBody } from '../main.js';
import { castRay, moveGreenCube, spawnCubes } from "../helpers.js";

// UI & Events
//file API
const downloader = document.querySelector("a");
const fileSaveBtn = document.getElementById("test4");
fileSaveBtn.innerText = "share";
fileSaveBtn.addEventListener("click", () => {
  const myblob = new Blob(["hello world"], { type: "text/plain" });
  const url = window.URL.createObjectURL(myblob);
  download(url, "test.txt");
});

//table
const velx = document.getElementById("velx");
const vely = document.getElementById("vely");
const velz = document.getElementById("velz");

const angvelx = document.getElementById("angvelx");
const angvely = document.getElementById("angvely");
const angvelz = document.getElementById("angvelz");

export function updateTable() {
  const x = `${Math.round(cubeBody.velocity.x * 1) / 1}`;
  const y = `${Math.round(cubeBody.velocity.y * 1) / 1}`;
  const z = `${Math.round(cubeBody.velocity.z * 1) / 1}`;

  velx.innerText = x;
  vely.innerText = y;
  velz.innerText = z;

  const angx = `${Math.round(cubeBody.angularVelocity.x * 1) / 1}`;
  const angy = `${Math.round(cubeBody.angularVelocity.y * 1) / 1}`;
  const angz = `${Math.round(cubeBody.angularVelocity.z * 1) / 1}`;

  angvelx.innerText = angx;
  angvely.innerText = angy;
  angvelz.innerText = angz;
}

//test button 1
const testButton = document.getElementById("test1");
testButton.innerText = "spawn red cubes";
testButton.onclick = (e) => {
  spawnCubes();
};

// // add red cubes
const test2Button = document.getElementById("test2");
test2Button.innerText = "log position";
test2Button.onclick = () => {
  const x = `${Math.round(cubeBody.position.x * 1) / 1}`;
  const y = `${Math.round(cubeBody.position.y * 1) / 1}`;
  const z = `${Math.round(cubeBody.position.z * 1) / 1}`;
  console.log(`${x}, ${y}, ${z}`);
};

const test3Button = document.getElementById("test3");
test3Button.innerText = "move green cube";
test3Button.onclick = (e) => {
  moveGreenCube();
};

const canvasElement = document.querySelector("canvas");
const changeOrbitElement = document.querySelector(
  "input#changeOrbit",
);
export const castRayElement = document.querySelector(
  "input#castRay",
);

canvasElement.onclick = (e) => {
  castRay(e);
};

const slider = document.getElementById("myRange");

slider.addEventListener("change", () => {
  controls.currentDistance = parseInt(slider.value);
  sliderNumber.innerText = `distance - ${slider.value}`;
  // to adjust the slider the pointer could not be locked
  // so to update the camera appropriately we must manually lock
  // and unlock
  controls.isLocked = true
  controls.onMouseMove(
    new MouseEvent("mousemove", { movementX: 0, movementY: 0 }),
  );
  controls.isLocked = false
});

const sliderNumber = document.getElementById(
  "myRangeNumber",
);

export function updateValueTrackers(delta) {
  const valueTracker = document.querySelector(
    "#valueTracker",
  );
  valueTracker.innerText = `dt: ${Math.round(delta * 100) / 100}`;
  const valueTracker2 = document.querySelector(
    "#valueTracker2",
  );
  valueTracker2.innerText = `#objects: ${scene.children.length}`;
}

function download(url, name) {
  downloader.href = url;
  downloader.setAttribute("download", name);
  downloader.click();
}

window.addEventListener("load", (e) => {
  slider.value = controls.currentDistance.toString();
  sliderNumber.innerText = `distance - ${controls.currentDistance}`;
})