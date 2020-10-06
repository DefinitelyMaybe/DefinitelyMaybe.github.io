/// <reference lib="dom" />
import { Euler, Quaternion, Raycaster, Spherical, Vector3, } from "./deps.js";
class PlayerControls {
    constructor(object, camera, domElement) {
        // values
        this.PI_2 = Math.PI / 2;
        this.twoPI = Math.PI * 2;
        this.downAxis = new Vector3(0, -1, 0);
        this.object = object;
        this.camera = camera;
        this.domElement = domElement;
        this.offset = new Vector3();
        this.cameraQuat = new Quaternion().setFromUnitVectors(camera.up, new Vector3(0, 1, 0));
        this.cameraQuatInv = this.cameraQuat.inverse();
        this.spherical = new Spherical();
        this.sphericalDelta = new Spherical();
        this.minDistance = 0;
        this.maxDistance = 20;
        this.distanceStepSize = 1;
        this.currentDistance = 6;
        this.distanceTheshold = 5;
        this.isLocked = false;
        this.isGrounded = false;
        this.move = {
            left: 0,
            right: 0,
            up: 0,
            down: 0,
            forward: 0,
            backward: 0,
        };
        this.acceleration = 10;
        this.domElement.addEventListener("mousedown", async () => {
            this.onMouseDown();
        });
        this.domElement.addEventListener("contextmenu", async (e) => {
            e.preventDefault();
            this.onMouseDown();
        });
        document.addEventListener("pointerlockchange", async () => {
            this.onPointerLockChange();
        });
        this.domElement.addEventListener("mousemove", async (e) => {
            this.onMouseMove(e);
        });
        // this.domElement.addEventListener("mousedown", this.mousedown);
        // this.domElement.addEventListener("mouseup", this.mouseup);
        document.addEventListener("keydown", async (e) => {
            this.onKeyDown(e);
        });
        document.addEventListener("keyup", async (e) => {
            this.onKeyUp(e);
        });
        this.domElement.addEventListener("wheel", async (e) => {
            this.onWheel(e);
        });
        // intialize the camera properly
        this.isLocked = true;
        this.onMouseMove(new MouseEvent("mousemove", { movementX: 0, movementY: 0 }));
        this.isLocked = false;
    }
    onMouseMove(event) {
        if (this.isLocked === false) {
            return;
        }
        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;
        const objPosition = new Vector3().copy(this.object.position);
        // left/right
        this.sphericalDelta.theta = this.twoPI * movementX /
            this.domElement.clientHeight;
        // up/down
        this.sphericalDelta.phi = this.twoPI * movementY /
            this.domElement.clientHeight;
        this.offset.copy(this.camera.position).sub(objPosition);
        // rotate offset to "y-axis-is-up" space
        this.offset.applyQuaternion(this.cameraQuat);
        // angle from z-axis around y-axis
        this.spherical.setFromVector3(this.offset);
        // this is where you could creating the boolean setting to invert the orbital controls
        this.spherical.theta -= this.sphericalDelta.theta;
        this.spherical.phi -= this.sphericalDelta.phi;
        // restrict phi to be between desired limits
        this.spherical.phi = Math.max(0, Math.min(Math.PI, this.spherical.phi));
        this.spherical.makeSafe();
        // set radius to player setting
        this.spherical.radius = this.currentDistance;
        this.offset.setFromSpherical(this.spherical);
        // rotate offset back to "camera-up-vector-is-up" space
        this.offset.applyQuaternion(this.cameraQuatInv);
        // update the position
        this.update();
    }
    onMouseDown() {
        if (!this.isLocked) {
            this.domElement.requestPointerLock();
        }
    }
    onPointerLockChange() {
        // console.log("change");
        if (document.pointerLockElement === this.domElement) {
            this.isLocked = true;
        }
        else {
            this.isLocked = false;
        }
    }
    onKeyDown(event) {
        switch (event.key) {
            case "a":
                this.move.left = 1;
                break;
            case "d":
                this.move.right = 1;
                break;
            case "w":
                this.move.forward = 1;
                break;
            case "s":
                this.move.backward = 1;
                break;
            case " ":
                if (this.isGrounded) {
                    this.move.up = 1;
                }
                break;
            case "e":
                this.spawnCube();
                break;
            default:
                // console.log(`Didn't handle keydown for: ${event.key}`);
                break;
        }
    }
    onKeyUp(event) {
        switch (event.key) {
            case "a":
                this.move.left = 0;
                // this.object.velocity.x = 10;
                break;
            case "d":
                this.move.right = 0;
                // this.object.velocity.x = -10;
                break;
            case "w":
                this.move.forward = 0;
                // this.object.velocity.z = 10;
                break;
            case "s":
                this.move.backward = 0;
                // this.object.velocity.z = -10;
                break;
            case " ":
                this.move.up = 0;
                // this.object.velocity.y = 10;
                break;
            default:
                // console.log(`Didn't handle keydown for: ${event.key}`);
                break;
        }
    }
    onWheel(event) {
        const wheelDelta = event.deltaY > 0
            ? this.distanceStepSize
            : -this.distanceStepSize;
        // restrict radius to be between desired limits
        if (this.currentDistance >= this.minDistance - wheelDelta &&
            this.currentDistance <= this.maxDistance - wheelDelta) {
            this.currentDistance += wheelDelta;
        }
        this.onMouseMove(new MouseEvent("mousemove", { movementX: 0, movementY: 0 }));
    }
    getPlayerDirection() {
        return new Vector3(-this.move.left + this.move.right, 0, -this.move.forward + this.move.backward).normalize();
    }
    update() {
        // update obj velocity
        const velVec = this.getPlayerDirection().applyQuaternion(this.object.quaternion).multiplyScalar(this.acceleration);
        this.object.velocity.set(velVec.x, this.object.velocity.y, velVec.z);
        if (this.move.up && this.isGrounded) {
            this.object.velocity.y = 10;
        }
        else if (this.isGrounded) {
            this.object.velocity.y = 0;
        }
        // update camera position
        const objPosition = new Vector3().copy(this.object.position);
        this.camera.position.copy(objPosition).add(this.offset);
        this.camera.lookAt(objPosition);
        // cast a small ray to update whether the player is grounded or not
        try {
            const ray = new Raycaster(objPosition, this.downAxis, 0, 1.1)
                .intersectObject(this.camera.parent, true);
            if (ray.length > 0) {
                this.isGrounded = true;
            }
            else {
                this.isGrounded = false;
            }
        }
        catch (error) {
        }
        // update obj rotation
        const camEuler = new Euler().setFromQuaternion(this.camera.quaternion);
        camEuler.reorder("YXZ");
        camEuler.x = 0;
        const camQuat = new Quaternion().setFromEuler(camEuler);
        this.object.quaternion.set(camQuat.x, camQuat.y, camQuat.z, camQuat.w);
    }
    spawnCube() {
        console.log("hello world");
    }
}
export { PlayerControls };
//# sourceMappingURL=compiled.js.map