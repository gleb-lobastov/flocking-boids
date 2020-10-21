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
      strength: 1
    },
    roosting: {
      distance: 0.2,
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
        spotPattern: SPAWN_SPOT_PATTERNS.NEAR,
        spotVariance: 0.1,
        speedPattern: SPAWN_SPEED_PATTERNS.RANDOM,
        speedRotation: 45,
        maxShrinkPerTick: 5,
        maxGrowthPerTick: Infinity
      },
      count: 600,
      speedRatio: 0.004
    },
    manualPredator: null
  }
};
