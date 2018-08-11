class Sprite {
  constructor(speed, animation, physical_body) {
    this.physical_body = physical_body;
    this.animation = animation;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    image(
      this.animation[this.index % this.len],
      this.physical_body.pos.x,
      this.physical_body.pos.y
    );
  }

  animate() {
    this.physical_body.update();
    this.index += this.speed;
  }
}
