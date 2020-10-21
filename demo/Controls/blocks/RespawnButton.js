import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CachedIcon from "@material-ui/icons/Cached";
import useRespawn from "../hooks/useRespawn";

export default function RespawnButton({ color }) {
  const respawn = useRespawn();

  return (
    <IconButton color={color} onClick={respawn}>
      <CachedIcon />
    </IconButton>
  );
}
