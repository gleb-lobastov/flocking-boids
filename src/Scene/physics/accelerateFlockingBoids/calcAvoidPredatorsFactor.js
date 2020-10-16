import settings from "../../settings";
import * as vectorImmutable from "../../utils/vectorImmutable";
import * as vectorMutable from "../../utils/vectorMutable";

export default function calcAvoidPredatorsFactor(flockingBoid, predators) {
  const carelessnessRatio = flockingBoid.carelessnessRatio || 1;
  const predatorAvoidanceForce = { x: 0, y: 0, z: 0 };
  const predatorAvoidanceDistance = settings.forces.predatorAvoidance.distance;
  const predatorAvoidanceDistancePerBoid =
    predatorAvoidanceDistance / carelessnessRatio;

  for (let i = 0; i < predators.length; i += 1) {
    const boidsDistance = vectorImmutable.squareDistance(
      flockingBoid.position,
      predators[i].position
    );

    if (boidsDistance < predatorAvoidanceDistancePerBoid) {
      vectorMutable.add(
        predatorAvoidanceForce,
        vectorMutable.multiply(
          vectorImmutable.subtract(
            flockingBoid.position,
            predators[i].position
          ),
          calcAvoidanceRatio(boidsDistance, predatorAvoidanceDistancePerBoid)
        )
      );
    }
  }
  return {
    force: predatorAvoidanceForce,
    strength: settings.forces.predatorAvoidance.strength / carelessnessRatio
  };
}

function calcAvoidanceRatio(boidsDistance, avoidanceDistance) {
  return (1 - boidsDistance / avoidanceDistance) ** 2;
}
