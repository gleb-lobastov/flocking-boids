import settings from "../../settings";
import * as vectorImmutable from "../../utils/vectorImmutable";

export default function calcRoostForceFactor(flockingBoid) {
  const carelessnessRatio = flockingBoid.carelessnessRatio || 1;
  const {
    characteristics: { manualPredator }
  } = settings;

  if (!manualPredator) {
    return null;
  }

  if (
    !checkIsCloseEnough(
      flockingBoid,
      manualPredator,
      settings.forces.predatorAvoidance.distance / carelessnessRatio ** 2
    )
  ) {
    return null;
  }

  return {
    force: vectorImmutable.subtract(
      flockingBoid.position,
      manualPredator.position
    ),
    strength: settings.forces.predatorAvoidance.strength / carelessnessRatio
  };
}

function checkIsCloseEnough(boidA, boidB, distance) {
  return (
    vectorImmutable.squareDistance(boidA.position, boidB.position) < distance
  );
}
