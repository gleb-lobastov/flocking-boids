import * as vectorImmutable from "../utils/vectorImmutable";
import * as vectorMutable from "../utils/vectorMutable";
import { spawnPosition, spawnSpeed } from "../utils/spawn";

const RAD = Math.PI / 180;
const SWAY_DIRECTION = { CLOCKWISE: -1, COUNTERCLOCKWISE: 1 };

export default class Boid {
  size = 1;

  color = "#000";

  swayFlapAngle = 0;

  constructor({ spawnPattern }, scene) {
    this.scene = scene;
    this.spawn(spawnPattern);
  }

  spawn(spawnPattern) {
    this.position = spawnPosition(spawnPattern, this.scene);
    this.speed = spawnSpeed(this.position, spawnPattern);
    this.swayAngle = Math.floor(Math.random() * 30) - 15;
    this.swayDirection =
      Math.random() > 0.5
        ? SWAY_DIRECTION.CLOCKWISE
        : SWAY_DIRECTION.COUNTERCLOCKWISE;
  }

  sway() {
    this.swayAngle += (this.swayDirection * this.swayFlapAngle) / 2;
    if (this.swayAngle > this.swayFlapAngle) {
      this.swayDirection = SWAY_DIRECTION.CLOCKWISE;
    } else if (this.swayAngle < -this.swayFlapAngle) {
      this.swayDirection = SWAY_DIRECTION.COUNTERCLOCKWISE;
    }
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
    const directionAngleRad = (Math.PI / 2 - Math.acos(this.speed.x)) / 1.5;
    context.rotate(Math.PI / 2 - directionAngleRad + this.swayAngle * RAD);
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
