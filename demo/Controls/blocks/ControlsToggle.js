import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import CachedIcon from "@material-ui/icons/Cached";
import IconButton from "@material-ui/core/IconButton";
import useRespawn from "../hooks/useRespawn";

const useStyles = makeStyles(theme => ({
  container: {
    position: "fixed",
    right: "0",
    bottom: "0",
    maxHeight: "200px",
    padding: "4px",
    margin: "8px",
    backgroundColor: fade(theme.palette.primary.dark, 0.4),
    borderRadius: "4px"
  }
}));

export default function ControlsToggle({ value, onClick }) {
  const classes = useStyles();
  const respawn = useRespawn();

  return (
    <div className={classes.container}>
      <IconButton
        className={classes.button}
        color="secondary"
        onClick={respawn}
      >
        <CachedIcon />
      </IconButton>
      <IconButton
        className={classes.button}
        color="secondary"
        onClick={onClick}
      >
        <ToggleOffIcon />
      </IconButton>
    </div>
  );
}
