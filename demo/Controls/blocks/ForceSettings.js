import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { useSettings } from "../context/SettingsContext";
import useSetting from "../hooks/useSetting";
import renderPropName from "../utils/renderPropName";
import renderFloat from "../utils/renderFloat";

export default function ForceSettings({
  forceName,
  className,
  isDistanceRegulated = true
}) {
  const settings = useSettings();
  const forceSettings = settings.forces[forceName];
  const [distance, setDistance] = useSetting(forceSettings, "distance");
  const [strength, setStrength] = useSetting(forceSettings, "strength");

  return (
    <Grid className={className} container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">{renderPropName(forceName)} force</Typography>
      </Grid>
      {isDistanceRegulated && (
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            Distance {renderFloat(Math.sqrt(distance))}
          </Typography>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={Math.round(distance ** (1 / 4) * 100) / 100}
            onChange={(event, value) => setDistance(value ** 4)}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      )}
      <Grid item xs={12} sm={isDistanceRegulated ? 6 : 12}>
        <Typography variant="caption">
          Strength {renderFloat(strength)}
        </Typography>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={strength}
          onChange={(event, value) => setStrength(value)}
          aria-labelledby="continuous-slider"
        />
      </Grid>
    </Grid>
  );
}
