const height = 600,
  width = 600;
class PhysicalBody {
  constructor(x, y) {
    this.w = 60;
    this.h = 60;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.gravity = createVector(0, 0.45);
    this.acc = this.gravity;
    this.jump = createVector(0, -10);
  }

  move(navigation) {
    switch (navigation) {
      case "left":
        this.acc.x -= 5;
        break;
      case "right":
        this.acc.x += 5;
        break;
      case "jump":
        this.acc.add(this.jump.mult(1.5));
        break;
      default:
        break;
    }
  }

  update() {
    this.vel.add(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (this.pos.y > height - this.h) {
      this.pos = createVector(this.pos.x, height - this.h);
      this.vel = createVector(this.vel.x, 0.5 * -this.vel.y);
      this.acc = createVector(this.acc.x, 0.5 * -this.acc.y);
    }
  }

  applyGravity() {
    if (this.pos.y > height - this.h) {
      this.pos = createVector(this.pos.x, height - this.h);
      this.vel = createVector(this.vel.x, 0.5 * -this.vel.y);
      this.acc = createVector(this.acc.x, 0.5 * -this.acc.y);
    } else if (this.pos.y < 0) {
      this.pos = createVector(this.pos.x, 0);
      this.vel = createVector(this.vel.x, 0.5 * -this.vel.y);
      this.acc = createVector(this.acc.x, 0.5 * -this.acc.y);
    } else {
      this.acc = this.acc.add(this.gravity);
    }
  }
}
