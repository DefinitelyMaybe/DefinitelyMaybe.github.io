import { BoxGeometry, Box, Body } from "../deps.js"

export class Cube extends BoxGeometry {
  constructor(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments,
  ){
    // super creates the BoxGeometry
    super(
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments,
    )
    
    // I simply add the physics
    const cube = new Box(new Vec3(width, height, depth));
    this.body = new Body({ mass: 1 });
    this.body.addShape(cube);
    
    // this.userData.physics.body = cubeBody
    
  }
}