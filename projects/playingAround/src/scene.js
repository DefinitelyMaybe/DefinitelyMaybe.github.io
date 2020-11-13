import { Scene } from "./deps.js";
import { world } from "./main.js";

class MyScene extends Scene {
  constructor(){
    super()
  }

  add(obj){
    if (obj.userdata.physics) {
      super.add(obj)
      world.addBody(obj.userdata.physics.body);
    } else {
      console.error("My Scene tried to add an object without physics obj attached")
    }
  }
}