import * as vectorImmutable from "../utils/vectorImmutable";
import * as vectorMutable from "../utils/vectorMutable";
import { spawnPosition, spawnSpeed } from "../utils/spawn";

export default class Boid {
  size = 1;

  color = "#000";

  constructor({ spawnPattern }) {
    this.spawn(spawnPattern);
  }

  spawn(spawnPattern) {
    this.position = spawnPosition(spawnPattern);
    this.speed = spawnSpeed(this.position, spawnPattern);
  }

  accelerate(factors) {
    this.speed = vectorMutable.normalize(
      factors.reduce((acc, factor) => {
        if (!factor) {
          return acc;
        }
        const { force, strength } = factor;
        return vectorMutable.add(
          acc,
          vectorMutable.multiply(vectorImmutable.normalize(force), strength)
        );
      }, this.speed)
    );
  }

  render(context) {
    context.save();
    context.translate(
      this.position.x * context.canvas.width,
      this.position.y * context.canvas.height
    );
    context.rotate(Math.PI / 2 - (Math.PI / 2 - Math.acos(this.speed.x)) / 1.5);
    // eslint-disable-next-line no-param-reassign
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(-3 * this.size, 12 * this.size);
    context.lineTo(3 * this.size, 0);
    context.lineTo(-3 * this.size, -12 * this.size);
    context.closePath();
    context.fill();
    context.restore();
  }
}
