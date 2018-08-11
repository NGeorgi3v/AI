class Ball {
  constructor() {
    this.location = p5.Vector.random2D();
    this.velocity = createVector(0, 0);
    this.acceleartion = p5.Vector.random2D();
    this.acceleartion.mult(3);
    this.r = 24;
  }

  move() {
    this.velocity.add(this.acceleartion);
    this.location.add(this.velocity);
    this.velocity.mult(0);
  }

  bounce() {
    if (this.location.x > width - this.r || this.location.x < this.r) {
      this.velocity.x *= -1;
    }

    if (this.location.y > height - this.r || this.location.y < this.r) {
      this.velocity.y *= -1;
    }
  }

  edges() {
    if (this.location.x > width) {
      this.location.x = 0;
    }
    if (this.location.x < 0) {
      this.location.x = width;
    }
    if (this.location.y > height) {
      this.location.y = 0;
    }
    if (this.location.y < 0) {
      this.location.y = height;
    }
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x, this.location.y, this.r * 2, this.r * 2);
  }
}
let b;
function setup() {
  const cnv = createCanvas(600, 400);
  cnv.parent("myCanvas");
  b = new Ball();
  createCanvas(400, 300);
}

function draw() {
  background(255);
  b.edges();
  b.move();
  b.show();
}
