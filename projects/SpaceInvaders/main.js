/*jshint esversion: 6*/
var ctx = document.querySelector("canvas").getContext("2d");

// The game state
var state = {
  view: "playing",
  dt: 0,
  fpsCount: 0,
  inittime: 0,
  totaltime: 0,
  player: {
    x: ctx.canvas.width/2,
    y: ctx.canvas.height/2,
    size: 10,
    colour: "#0080ff",
    shoot: function () {
      console.log("out of ammo :(");
      // create the box
      // set to the correct location
      // make the box move
    }
  },
  objects: [],
  objectcounts: {
    asteroid: 0
  },
  objectmaxcounts: {
    asteroid: 0
  },
  freeindices: []
};

function init() {
  state.inittime = Date.now();
}

function update() {
  // update delta time
  var now = Date.now();
  state.dt = now - state.inittime;
  state.totaltime += state.dt;
  state.inittime = now;

  // move all of the asteroids down
  for (var i = 0; i < state.objects.length; i++) {
    var element = state.objects[i];
    if (element) {
      element.y += Math.random()*state.dt*0.2;
      // check if they're off the canvas
      if (outofcanvas(element)) {
        state.objectcounts.asteroid -= 1;
        delete state.objects[i];
        state.freeindices.push(i);
      } 
    }
  }
  
  // Check collisions
  for (let j = 0; j < state.objects.length; j++) {
    const element = state.objects[j];
    if (element) {
      if (distance(state.player, element) < state.player.size + element.size - 5) {
        // the -5 is an error term for fun
        state.view = "stop";
      }
    }
  }

  // keep creating asteroids
  if (state.objectcounts.asteroid < state.objectmaxcounts.asteroid) {
    newasteroids = state.objectmaxcounts.asteroid - state.objectcounts.asteroid;
    for (var j = 0; j < newasteroids; j++) {
      var asteroid = createRandomAsteroid();
      createobject(asteroid);
    }
  }

  // Update the GUI
  var timetext = window.document.getElementById("time");
  var seconds = Math.floor(state.totaltime/1000);
  var minutes = Math.floor(seconds / 60);
  seconds -= 60 * minutes;
  timertext = `${minutes}:${seconds}`;
  var fpstext = window.document.getElementById("fps");
  if (timertext == timetext.innerText) {
    state.fpsCount += 1;
  } else {
    fpstext.innerText = state.fpsCount.toString();
    state.fpsCount = 0;
  }
  timetext.innerText = timertext;

  // Add more asteroids over time
  state.objectmaxcounts.asteroid = Math.floor(simpleExp(0.001, Math.floor(state.totaltime/2000), 1));
}

function draw() {
  if (state.view == "playing") {
    requestAnimationFrame(draw); 
  }
  update();
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;
  // clear the screen
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,w,h);

  // draw the background

  // draw the objects
  for (var i = 0; i < state.objects.length; i++) {
    var element = state.objects[i];
    if (element) {
      ctx.beginPath();
      ctx.fillStyle = element.colour;
      ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2 * element.size);
      ctx.fill();
    }
  }
  // draw the player
  ctx.beginPath();
  ctx.fillStyle = state.player.colour;
  ctx.arc(state.player.x, state.player.y, state.player.size, 0, Math.PI * 2 * state.player.size);
  ctx.fill();
}

function createRandomAsteroid() {
  //position
  // start at the top edge of the screen
  a = {
    x: Math.random() * ctx.canvas.width,
    y:-20,
    colour: "#aaaaaa",
    size: 20
  };
  // can randomize size but must be approximately square-ish
  return a;
}

function createobject(object) {
  if (state.freeindices.length > 0) {
    var index = state.freeindices.pop();
    state.objects[index] = object;
    state.objectcounts.asteroid += 1;
  } else {
    state.objects.push(object);
    state.objectcounts.asteroid += 1;
  }
}

function outofcanvas(object) {
  if (object.y > ctx.canvas.height) {
    return true;
  }
  return false;
}

function distance(obj1, obj2) {
  // assumes that each object has an x and y component
  return Math.sqrt(Math.pow(obj1.x - obj2.x, 2)+Math.pow(obj1.y - obj2.y, 2));
}

function simpleExp(multiplier, constant, variable) {
  return multiplier * Math.exp(variable) + constant;
}

// Events
window.onkeydown = function(event) {
  //console.log(event);
  if (state.view == "playing") {
    if (event.key == "w") {
      state.player.y -= 10;
    }
    if (event.key == "s") {
      state.player.y += 10;
    }
    if (event.key == "a") {
      state.player.x -= 10;
    }
    if (event.key == "d") {
      state.player.x += 10;
    }
    if (event.key == " ") {
      event.preventDefault();
      this.state.player.shoot();
    }
  }
};

// GUI stuff
function buttonclicked() {
  console.log(state);
}

function gamestart() {
  state.view = "playing";
  state.inittime = Date.now();
  draw();
}

function gamestop() {
  state.view = "stop";
}

function gamereset() {
  state = {
    view: "playing",
    dt: 0,
    fpsCount: 0,
    inittime: 0,
    totaltime: 0,
    player: {
      x: ctx.canvas.width/2,
      y: ctx.canvas.height/2,
      size: 10,
      colour: "#0080ff",
      shoot: function () {
        console.log("out of ammo :(");
        // create the box
        // set to the correct location
        // make the box move
      }
    },
    objects: [],
    objectcounts: {
      asteroid: 0
    },
    objectmaxcounts: {
      asteroid: 0
    },
    freeindices: []
  };

  state.view = "stop";
  state.inittime = Date.now();

  draw();
  state.view = "playing";
  draw();
}

init();
draw();