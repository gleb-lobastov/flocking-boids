import { SPAWN_SPOT_PATTERNS, SPAWN_SPEED_PATTERNS } from "../utils/spawn";

export default {
  forces: {
    alignment: {
      distance: 0.01,
      strength: 0.3
    },
    avoidance: {
      distance: 0.0001,
      strength: 0.5
    },
    cohesion: {
      distance: 0.02,
      strength: 0.15
    },
    predatorAvoidance: {
      distance: 0.03,
      strength: 2
    },
    roosting: {
      distance: 0.2 ,
      strength: 0.1
    },
    predatorToPrey: {
      strength: 0.1
    }
  },
  characteristics: {
    roost: {
      position: { x: 0.5, y: 0.5, z: 0 }
    },
    predators: {
      spawnPattern: {
        spotPattern: SPAWN_SPOT_PATTERNS.EDGE,
        speedPattern: SPAWN_SPEED_PATTERNS.TO_CENTER
      },
      count: 1,
      speedRatio: 0.005
    },
    flockingBoids: {
      spawnPattern: {
        spotPattern: SPAWN_SPOT_PATTERNS.CIRCLE,
        spotVariance: 0.1,
        speedPattern: SPAWN_SPEED_PATTERNS.FROM_CENTER,
        speedRotation: 45,
        maxShrinkPerTick: 5,
        maxGrowthPerTick: 100
      },
      count: 1000,
      speedRatio: 0.004
    },
    manualPredator: null
  }
};
