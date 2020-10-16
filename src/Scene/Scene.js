import mutableFilter from "./utils/mutableFilter";
import Predator from "./objects/Predator";
import FlockingBoid from "./objects/FlockingBoid";
import accelerateFlockingBoids from "./physics/accelerateFlockingBoids";
import acceleratePredators from "./physics/acceleratePredators";
import move from "./physics/move";
import settings from "./settings";

export const BOID_TYPES = {
  FLOCKING_BOIDS: "flockingBoids",
  PREDATORS: "predators"
};

export default class Scene {
  constructor({ mouse }) {
    this.mouse = mouse;
    this.instances = {
      flockingBoids: [],
      predators: [],
      manualPredator: null
    };
  }

  tick() {
    const flockingBoids = this.instances.flockingBoids;
    const predators = this.instances.predators;

    this.resolveMousePredator();
    this.populate("flockingBoids", FlockingBoid);
    this.populate("predators", Predator);
    accelerateFlockingBoids(flockingBoids, predators);
    acceleratePredators(predators, flockingBoids);
    move(predators, settings.characteristics.predators.speedRatio);
    move(flockingBoids, settings.characteristics.flockingBoids.speedRatio);
  }

  resolveMousePredator() {
    settings.characteristics.manualPredator = this.mouse?.hasFocus
      ? { position: this.mouse.getPosition() }
      : null;
  }

  populate(boidType, BoidClass) {
    const instances = this.instances[boidType];
    const characteristic = settings.characteristics[boidType];
    const diff = characteristic.count - instances.length;
    if (!diff) {
      return;
    }

    const {
      spawnPattern: {
        maxGrowthPerTick = Infinity,
        maxShrinkPerTick = Infinity
      } = {}
    } = characteristic;

    const effect = Math.max(
      -maxShrinkPerTick,
      Math.min(diff, maxGrowthPerTick)
    );

    if (effect > 0) {
      for (let i = 0; i < effect; i += 1) {
        instances.push(new BoidClass(characteristic));
      }
    } else {
      const reduceEachOf = instances.length / effect;
      mutableFilter(instances, (_, i) => i % reduceEachOf);
    }
  }

  render(virtualContext) {
    const { flockingBoids, predators } = this.instances;
    for (let i = 0; i < predators.length; i += 1) {
      predators[i].render(virtualContext);
    }

    for (let i = 0; i < flockingBoids.length; i += 1) {
      flockingBoids[i].render(virtualContext);
    }
  }
}
