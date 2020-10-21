import settings from "../settings";
import * as vectorImmutable from "../utils/vectorImmutable";
import * as vectorMutable from "../utils/vectorMutable";
import Boid from "./Boid";

export default class FlockingBoid extends Boid {
  static calcFlockingForces(boids, callback) {
    const actualBoids = boids.sort(
      ({ position: { x: aX } }, { position: { x: bX } }) => {
        return aX - bX;
      }
    );
    const maxInfluenceDistance = Math.max(
      settings.forces.alignment.distance,
      settings.forces.avoidance.distance,
      settings.forces.cohesion.distance
    );
    let firstCloseEnoughBoidIndex = 0;
    const { length } = actualBoids;
    for (let i = 0; i < length; i += 1) {
      const currentBoid = actualBoids[i];
      currentBoid.resetFlockingForces();
      for (let j = firstCloseEnoughBoidIndex; j < i; j += 1) {
        const influencingBoid = actualBoids[j];
        if (
          currentBoid.position.x - influencingBoid.position.x <=
          maxInfluenceDistance
        ) {
          currentBoid.accumulateFlockingForces(influencingBoid);
        } else {
          firstCloseEnoughBoidIndex += 1;
        }
      }
      for (let j = i + 1; j < length; j += 1) {
        const influencingBoid = actualBoids[j];
        if (
          influencingBoid.position.x - currentBoid.position.x <=
          maxInfluenceDistance
        ) {
          currentBoid.accumulateFlockingForces(influencingBoid);
        } else {
          break;
        }
      }
      callback(actualBoids[i]);
    }
  }

  constructor(options, scene) {
    super(options, scene);
    this.resetFlockingForces();
    this.carelessnessRatio = 1 + Math.random();
    this.swayFlapAngle = 15;
  }

  resetFlockingForces() {
    this.flockingForces = {
      avoidance: { x: 0, y: 0, z: 0 },
      alignment: { x: 0, y: 0, z: 0 },
      cohesion: { x: 0, y: 0, z: 0 }
    };
  }

  accumulateFlockingForces(influencingBoid) {
    const {
      forces: {
        alignment: { distance: alignmentDistance },
        avoidance: { distance: avoidanceDistance },
        cohesion: { distance: cohesionDistance }
      }
    } = settings;

    const boidsDistance = vectorImmutable.squareDistance(
      this.position,
      influencingBoid.position
    );

    if (boidsDistance < avoidanceDistance) {
      vectorMutable.add(
        this.flockingForces.avoidance,
        vectorMutable.multiply(
          vectorImmutable.subtract(this.position, influencingBoid.position),
          calcAvoidanceRatio(boidsDistance, avoidanceDistance)
        )
      );
    }

    if (boidsDistance < alignmentDistance) {
      vectorMutable.add(this.flockingForces.alignment, influencingBoid.speed);
    }

    if (boidsDistance < cohesionDistance) {
      vectorMutable.add(
        this.flockingForces.cohesion,
        vectorImmutable.subtract(influencingBoid.position, this.position)
      );
    }
  }

  resolveFlockingForceFactors() {
    if (vectorImmutable.checkHasLength(this.flockingForces.avoidance)) {
      return [
        {
          force: this.flockingForces.avoidance,
          strength: settings.forces.avoidance.strength
        }
      ];
    }
    return [
      {
        force: this.flockingForces.alignment,
        strength: settings.forces.alignment.strength
      },
      {
        force: this.flockingForces.cohesion,
        strength: settings.forces.cohesion.strength
      }
    ];
  }
}

function calcAvoidanceRatio(boidsDistance, avoidanceDistance) {
  return (1 - boidsDistance / avoidanceDistance) ** 2;
}
