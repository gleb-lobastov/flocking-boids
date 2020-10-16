/* eslint-disable no-param-reassign */
import FlockingBoid from '../../objects/FlockingBoid';
import calcRoostForceFactor from './calcRoostForceFactor';
import calcAvoidHumanForceFactor from './calcAvoidHumanForceFactor';
import calcAvoidPredatorsFactor from './calcAvoidPredatorsFactor';

export default function accelerateFlockingBoids(flockingBoids, predators) {
  FlockingBoid.calcFlockingForces(flockingBoids, function applyForces(
    flockingBoid,
  ) {
    flockingBoid.accelerate([
      ...flockingBoid.resolveFlockingForceFactors(),
      calcAvoidPredatorsFactor(flockingBoid, predators),
      calcRoostForceFactor(flockingBoid),
      calcAvoidHumanForceFactor(flockingBoid),
    ]);
  });
}
