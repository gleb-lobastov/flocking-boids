import * as vectorMutable from "./vectorMutable";

export const SPAWN_SPOT_PATTERNS = {
  RANDOM: "RANDOM",
  CENTER: "CENTER",
  CIRCLE: "CIRCLE",
  EDGE: "EDGE",
  SIDE: "SIDE",
  NEAR: "NEAR"
};

export const SPAWN_SPEED_PATTERNS = {
  RANDOM: "RANDOM",
  IDLE: "IDLE",
  TO_CENTER: "TO_CENTER",
  FROM_CENTER: "FROM_CENTER",
  STRAIGHT: "STRAIGHT"
};

const DEFAULT_CIRCLE_RADIUS = 0.4;
export function spawnPosition(spawnConfig = {}, scene) {
  const {
    spotPattern = SPAWN_SPOT_PATTERNS.RANDOM,
    spotVariance
  } = spawnConfig;

  let spotPosition;
  switch (spotPattern) {
    case SPAWN_SPOT_PATTERNS.CENTER:
      spotPosition = {
        x: 0.5,
        y: 0.5,
        z: 0
      };
      break;
    case SPAWN_SPOT_PATTERNS.CIRCLE:
      const { circleRadius = DEFAULT_CIRCLE_RADIUS } = spawnConfig;
      const x = 2 * circleRadius * (Math.random() - 0.5);
      const y =
        Math.sign(Math.random() - 0.5) * Math.sqrt(circleRadius ** 2 - x ** 2);
      spotPosition = {
        x: x + 0.5 + (Math.random() - 0.5) * 0.05,
        y: y + 0.5 + (Math.random() - 0.5) * 0.05,
        z: 0
      };
      break;
    case SPAWN_SPOT_PATTERNS.EDGE:
      spotPosition = {
        x: Math.ceil(Math.random() - 0.5),
        y: Math.ceil(Math.random() - 0.5),
        z: 0
      };
      break;
    case SPAWN_SPOT_PATTERNS.SIDE:
      spotPosition = sideSpotPosition();
      break;
    case SPAWN_SPOT_PATTERNS.NEAR:
      const buddy =
        scene.instances.flockingBoids[
          Math.floor(Math.random() * scene.instances.flockingBoids.length)
        ];
      spotPosition = buddy ? { ...buddy.position } : randomSpotPosition();
      break;
    case SPAWN_SPOT_PATTERNS.RANDOM:
    default:
      spotPosition = randomSpotPosition();
  }
  if (spotVariance) {
    spotPosition.x += (Math.random() - 0.5) * spotVariance;
    spotPosition.y += (Math.random() - 0.5) * spotVariance;
  }
  spotPosition.x = Math.abs(spotPosition.x % 1);
  spotPosition.y = Math.abs(spotPosition.y % 1);
  return spotPosition;
}

export function spawnSpeed(position, spawnConfig = {}) {
  const {
    speedPattern = SPAWN_SPEED_PATTERNS.RANDOM,
    speedRotation
  } = spawnConfig;
  let speed;
  switch (speedPattern) {
    case SPAWN_SPEED_PATTERNS.IDLE:
      return { x: 0, y: 0, z: 0 };
    case SPAWN_SPEED_PATTERNS.STRAIGHT:
      speed = { x: 1, y: 0, z: 0 };
      break;
    case SPAWN_SPEED_PATTERNS.TO_CENTER:
      speed = vectorMutable.normalize({
        x: 0.5 - position.x,
        y: 0.5 - position.y,
        z: 0
      });
      break;
    case SPAWN_SPEED_PATTERNS.FROM_CENTER:
      speed = vectorMutable.normalize({
        x: position.x - 0.5,
        y: position.y - 0.5,
        z: 0
      });
      break;
    case SPAWN_SPEED_PATTERNS.RANDOM:
    default:
      speed = vectorMutable.normalize({
        x: Math.random(),
        y: Math.random(),
        z: 0
      });
  }
  vectorMutable.normalize(speed);
  if (speedRotation) {
    vectorMutable.rotate(speed, (speedRotation / 180) * Math.PI);
  }
  return speed;
}

function sideSpotPosition() {
  const rnd = Math.random();
  switch (Math.floor(Math.random() * 4)) {
    case 1:
      return { x: rnd, y: 0, z: 0 };
    case 2:
      return { x: rnd, y: 1, z: 0 };
    case 3:
      return { x: 0, y: rnd, z: 0 };
    case 4:
    default:
      return { x: 1, y: rnd, z: 0 };
  }
}

function randomSpotPosition() {
  return {
    x: Math.random(),
    y: Math.random(),
    z: 0
  };
}
