import { useState, useEffect, useCallback } from "react";
import { TICK_TIME } from "../../../src";
import debounce from "../utils/debounce";
import { useSettings } from "../context/SettingsContext";

const BOIDS_TYPES = ["flockingBoids", "predators"];
const debouncedDoRespawn = debounce(doRespawn);

export default function useRespawn() {
  const [respawnCounter, setRespawnCounter] = useState(0);
  const settings = useSettings();

  const respawn = useCallback(() => {
    setRespawnCounter(counter => counter + 1);
  }, []);

  useEffect(() => {
    if (respawnCounter > 0) {
      debouncedDoRespawn(settings);
    }
  }, [respawnCounter]);

  return respawn;
}

function doRespawn(settings) {
  const preserved = {};
  BOIDS_TYPES.forEach(boidsType => {
    const boidCharacteristics = settings.characteristics[boidsType];
    preserved[boidsType] = {
      count: boidCharacteristics.count,
      maxShrinkPerTick: boidCharacteristics.spawnPattern.maxShrinkPerTick
    };
    boidCharacteristics.count = 0;
    boidCharacteristics.spawnPattern.maxShrinkPerTick = Infinity;
  });
  const timerId = setTimeout(() => {
    BOIDS_TYPES.forEach(boidsType => {
      const boidCharacteristics = settings.characteristics[boidsType];
      boidCharacteristics.count = preserved[boidsType].count;
      boidCharacteristics.spawnPattern.maxShrinkPerTick =
        preserved[boidsType].maxShrinkPerTick;
    });
  }, TICK_TIME * 2);
}
