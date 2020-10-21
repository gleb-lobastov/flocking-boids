import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import RespawnButton from "./RespawnButton";

const useStyles = makeStyles({
  container: {
    position: "fixed",
    right: "0",
    bottom: "0",
    maxHeight: "200px",
    padding: "16px"
  }
});

export default function ControlsToggle({ value, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RespawnButton />
      <IconButton onClick={onClick}>
        <ToggleOffIcon />
      </IconButton>
    </div>
  );
}
