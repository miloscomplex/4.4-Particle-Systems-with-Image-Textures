let emitters = [];
let img; 

function preload() {
  img = loadImage("imageTexture.png")
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  background(100);
  createCanvas(500, 500);
}


function draw() {
  clear();
  //noLoop();
  background(0);
  blendMode(ADD);

  for (let emitter of emitters) {

    let force = createVector(0, -0.2);
    emitter.applyForce(force);

    let wind = createVector(random(-0.1,0.1), 0);
    emitter.applyForce(wind);

    emitter.emit(2);
    emitter.show();
    emitter.update();
  }
}