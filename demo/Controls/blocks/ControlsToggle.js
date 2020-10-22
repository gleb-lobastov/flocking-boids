import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import CachedIcon from "@material-ui/icons/Cached";
import GithubIcon from "@material-ui/icons/Github";
import IconButton from "@material-ui/core/IconButton";
import useRespawn from "../hooks/useRespawn";

const useStyles = makeStyles(theme => ({
  container: {
    position: "fixed",
    padding: "4px",
    margin: "8px",
    backgroundColor: fade(theme.palette.primary.dark, 0.4),
    borderRadius: "4px"
  },
  git: {
    left: "0",
    bottom: "0"
  },
  controls: {
    right: "0",
    bottom: "0"
  }
}));

export default function ControlsToggle({ value, onClick }) {
  const classes = useStyles();
  const respawn = useRespawn();

  return (
    <>
      <div className={`${classes.container} ${classes.git}`}>
        <IconButton
          className={classes.button}
          color="secondary"
          onClick={() =>
            window.open(
              "https://github.com/gleb-lobastov/flocking-boids",
              "_blank",
              "noopener"
            )
          }
        >
          <GithubIcon />
        </IconButton>
      </div>
      <div className={`${classes.container} ${classes.controls}`}>
        <IconButton
          className={classes.button}
          color="secondary"
          onClick={onClick}
        >
          <ToggleOffIcon />
        </IconButton>
        <IconButton
          className={classes.button}
          color="secondary"
          onClick={respawn}
        >
          <CachedIcon />
        </IconButton>
      </div>
    </>
  );
}
