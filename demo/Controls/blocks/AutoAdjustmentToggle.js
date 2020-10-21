import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFpsAdjustment } from "../context/FpsContext";

export default function AutoAdjustmentToggle() {
  const {
    isInAutoAdjustmentMode,
    setIsInAutoAdjustmentMode
  } = useFpsAdjustment();

  const switchNode = (
    <Switch
      checked={isInAutoAdjustmentMode}
      onChange={(event, checked) => setIsInAutoAdjustmentMode(checked)}
    />
  );

  return (
    <FormControlLabel control={switchNode} label="Adjust boids count by fps" />
  );
}
