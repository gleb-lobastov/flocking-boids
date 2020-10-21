import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useRespawn from "../hooks/useRespawn";
import FlockingBoidsSettings from "./FlockingBoidsSettings";
import PredatorsSettings from "./PredatorsSettings";
import RespawnButton from "./RespawnButton";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: "0",
    bottom: "0",
    top: "0",
    width: "300px"
  },
  title: {
    flexGrow: 1
  },
  content: {
    opacity: "0.7",
    padding: "16px",
    flexGrow: 1,
    overflow: "auto"
  },
  "@media (max-width: 720px)": {
    container: {
      position: "static",
      marginTop: "-72px",
      width: "100%"
    }
  }
});

export default function ControlsPanel({ onClose }) {
  const classes = useStyles();
  const respawn = useRespawn();
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            Controls
          </Typography>
          <RespawnButton color="inherit" />
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper className={classes.content} square>
        <Box>
          <Typography variant="h4">Flocking Boids</Typography>
          <FlockingBoidsSettings />
        </Box>
        <Box mt={4}>
          <Typography variant="h4">Predators</Typography>
          <PredatorsSettings />
        </Box>
      </Paper>
    </div>
  );
}
