import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { SPAWN_SPEED_PATTERNS, SPAWN_SPOT_PATTERNS } from "../../../../src";
import { useSettings } from "../../context/SettingsContext";
import useSetting from "../../hooks/useSetting";
import useRespawn from "../../hooks/useRespawn";
import useDidUpdate from "../../hooks/useDidUpdate";
import SelectPattern from "./blocks/SelectPattern";

const SPAWN_GROWTH_PATTERNS = {
  SLOW: 1,
  NORMAL: 10,
  INSTANT: Infinity
};

const SPEED_ROTATION_PATTERNS = {
  RIGHT: 0,
  RIGHT_DOWN: 45,
  DOWN: 90,
  LEFT_DOWN: 135,
  LEFT: 180,
  LEFT_UP: 225,
  UP: 270,
  RIGHT_UP: 315
};

export default function SpawnSettings({
  onlyPopulation,
  boidsType,
  boidsInfo,
  className,
  minPopulation,
  maxPopulation,
  isPopulationReadonly,
  children
}) {
  const settings = useSettings();
  const boidCharacteristics = settings.characteristics[boidsType];
  const spawnPattern = boidCharacteristics.spawnPattern;
  const [population, setPopulation] = useSetting(boidCharacteristics, "count");
  const populationStep = maxPopulation - minPopulation > 100 ? 10 : 1;
  const [spotPattern, setSpotPattern] = useSetting(spawnPattern, "spotPattern");
  const [growthPattern, setGrowthPattern] = useSetting(
    spawnPattern,
    "maxGrowthPerTick",
    { defaultValue: SPAWN_GROWTH_PATTERNS.NORMAL }
  );
  const [speedPattern, setSpeedPattern] = useSetting(
    spawnPattern,
    "speedPattern"
  );
  const [speedRotation, setSpeedRotation] = useSetting(
    spawnPattern,
    "speedRotation",
    { defaultValue: 0 }
  );

  const respawn = useRespawn();
  useDidUpdate(onlyPopulation ? () => {} : respawn, [
    spotPattern,
    growthPattern,
    speedPattern,
    speedRotation
  ]);

  return (
    <Grid className={className} container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Spawn settings</Typography>
      </Grid>
      {children && (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography variant="caption">
          Count {population}
          {boidsInfo ? `, ${boidsInfo}` : ""}
        </Typography>
        <Slider
          min={minPopulation}
          max={maxPopulation}
          step={populationStep}
          value={population}
          disabled={isPopulationReadonly}
          onChange={(event, value) => setPopulation(value)}
          aria-labelledby="continuous-slider"
        />
      </Grid>
      {!onlyPopulation && (
        <>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Spot pattern</Typography>
            <SelectPattern
              value={spotPattern}
              onChange={event => setSpotPattern(event.target.value)}
              options={SPAWN_SPOT_PATTERNS}
              selectName="spotPattern"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Growth pattern</Typography>
            <SelectPattern
              value={growthPattern}
              onChange={event => setGrowthPattern(event.target.value)}
              options={SPAWN_GROWTH_PATTERNS}
              selectName="spotPattern"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Speed pattern</Typography>
            <SelectPattern
              value={speedPattern}
              onChange={event => setSpeedPattern(event.target.value)}
              options={SPAWN_SPEED_PATTERNS}
              selectName="speedPattern"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Speed rotation</Typography>
            <SelectPattern
              value={speedRotation}
              onChange={event => setSpeedRotation(event.target.value)}
              options={SPEED_ROTATION_PATTERNS}
              selectName="speedRotationPattern"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
