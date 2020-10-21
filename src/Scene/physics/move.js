export default function move(boids, speedRatio) {
  for (let i = 0; i < boids.length; i += 1) {
    boids[i].position.x =
      (boids[i].position.x + speedRatio * boids[i].speed.x + 1) % 1;
    boids[i].position.y =
      (boids[i].position.y + speedRatio * boids[i].speed.y + 1) % 1;
    boids[i].sway();
  }
}
