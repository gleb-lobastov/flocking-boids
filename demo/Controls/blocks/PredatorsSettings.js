import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ForceSettings from "./ForceSettings";
import SpawnSettings from "./SpawnSettings";

const useStyles = makeStyles(theme => ({
  block: {
    "&:not(:first-child)": {
      marginTop: theme.spacing(1)
    }
  }
}));

export default function PredatorsSettings({ value, onClick }) {
  const classes = useStyles();
  return (
    <>
      <ForceSettings
        className={classes.block}
        forceName="predatorToPrey"
        isDistanceRegulated={false}
      />
      <SpawnSettings
        onlyPopulation={true}
        className={classes.block}
        boidsType="predators"
        minPopulation={0}
        maxPopulation={5}
      />
    </>
  );
}
