let spritesheet,
  spriteData,
  animation = [],
  dragon,
  dragonBody;

function preload() {
  spriteData = loadJSON("./js/data.json");
  spritesheet = loadImage("./img/dragon_flying.png");
}

function setup() {
  createCanvas(600, 600);
  let frames = spriteData.frames;
  frames.forEach(frame => {
    let pos = frame.position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  });
  dragonBody = new PhysicalBody(0, 0);
  dragon = new Sprite(1, animation, dragonBody);
}

function draw() {
  background(0);
  dragon.show();
  if (frameCount % 5 == 0) {
    dragon.animate();
  }
  dragonBody.applyGravity();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dragonBody.move("up");
  } else if (keyCode == DOWN_ARROW) {
    dragonBody.move("down");
  } else if (keyCode == LEFT_ARROW) {
    dragonBody.move("left");
  } else if (keyCode == RIGHT_ARROW) {
    dragonBody.move("right");
  } else if (keyCode == 32) {
    dragonBody.move("jump");
  }
}
