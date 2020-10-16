/* eslint-disable */
import settings from "../settings";
import * as vectorImmutable from "../utils/vectorImmutable";

export default function acceleratePredators(predators, flockingBoids) {
  for (let i = 0; i < predators.length; i += 1) {
    const targetBoid = findTargetBoid(predators[i], flockingBoids);
    predators[i].accelerate([
      {
        force: vectorImmutable.subtract(
          flockingBoids[targetBoid].position,
          predators[i].position
        ),
        strength: settings.forces.predatorToPrey.strength
      }
    ]);
  }
}

function findTargetBoid(predator, flockingBoids) {
  let min = Infinity;
  let targetBoid = 0;
  for (let i = 0; i < flockingBoids.length; i += 1) {
    const current = vectorImmutable.squareDistance(
      predator.position,
      flockingBoids[i].position
    );
    if (current < min) {
      min = current;
      targetBoid = i;
    }
  }
  return targetBoid;
}
