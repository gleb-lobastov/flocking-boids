import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFpsAdjustment } from "../context/FpsContext";
import ForceSettings from "./ForceSettings";
import SpawnSettings from "./SpawnSettings";
import AutoAdjustmentToggle from "./AutoAdjustmentToggle";

const useStyles = makeStyles(theme => ({
  block: {
    "&:not(:first-child)": {
      marginTop: theme.spacing(1)
    }
  }
}));

export default function FlockingBoidsSettings({ value, onClick }) {
  const classes = useStyles();
  const { isInAutoAdjustmentMode, fps } = useFpsAdjustment();

  return (
    <>
      <ForceSettings className={classes.block} forceName="alignment" />
      <ForceSettings className={classes.block} forceName="avoidance" />
      <ForceSettings className={classes.block} forceName="cohesion" />
      <ForceSettings className={classes.block} forceName="predatorAvoidance" />
      <ForceSettings className={classes.block} forceName="roosting" />
      <SpawnSettings
        className={classes.block}
        boidsType="flockingBoids"
        isPopulationReadonly={isInAutoAdjustmentMode}
        boidsInfo={isInAutoAdjustmentMode ? `fps: ${fps}` : null}
        minPopulation={200}
        maxPopulation={1500}
      >
        <AutoAdjustmentToggle />
      </SpawnSettings>
    </>
  );
}
