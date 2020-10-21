const ADJUSTMENT_MODE = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  IDLE: "IDLE"
};
const MIN_FLOCKING_BOIDS = 200;
const MAX_FLOCKING_BOIDS = 1500;
const LOW_FPS_THRESHOLD = 50;
const HIGH_FPS_THRESHOLD = 59;

export default function adjustBoidsCount(fps) {
  const flockingBoids =
    flockingBoidsAnimation.settings.characteristics.flockingBoids;

  const diff = resolveDiffOfBoids(fps, flockingBoids.count);
  if (diff) {
    flockingBoids.count = Math.max(
      MIN_FLOCKING_BOIDS,
      Math.min(MAX_FLOCKING_BOIDS, flockingBoids.count + diff)
    );
  }
  return flockingBoids.count;
}

function resolveDiffOfBoids(fps, flockingBoidsCount) {
  switch (true) {
    case fps <= LOW_FPS_THRESHOLD && flockingBoidsCount > MIN_FLOCKING_BOIDS:
      return -Math.floor(flockingBoidsCount * 0.2);
    case fps >= HIGH_FPS_THRESHOLD && flockingBoidsCount < MAX_FLOCKING_BOIDS:
      return Math.floor(flockingBoidsCount * 0.1);
    default:
      return 0;
  }
}
