import settings from "../../settings";
import * as vectorImmutable from "../../utils/vectorImmutable";

export default function calcRoostForceFactor(flockingBoid) {
  const roostPosition = settings.characteristics.roost.position;
  const flockingBoidPosition = flockingBoid.position;

  const isOutOfRoost =
    vectorImmutable.squareDistance(flockingBoidPosition, roostPosition) >
    settings.forces.roosting.distance;

  if (!isOutOfRoost) {
    return null;
  }

  return {
    force: {
      x: roostPosition.x - flockingBoidPosition.x,
      y: roostPosition.y - flockingBoidPosition.y,
      z: 0
    },
    strength: settings.forces.roosting.strength
  };
}
