import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import renderPropName from "../../../utils/renderPropName";

const useStyles = makeStyles({
  container: {
    width: "100%"
  }
});

export default function SelectPattern({
  selectName,
  options,
  value,
  onChange
}) {
  const classes = useStyles();

  return (
    <Select
      className={classes.container}
      labelId={`select-label-${selectName}`}
      id={`select-${selectName}`}
      value={value}
      onChange={onChange}
      autoWidth
    >
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={value}>
          {renderPropName(key)}
        </MenuItem>
      ))}
    </Select>
  );
}
