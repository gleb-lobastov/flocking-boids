import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SettingsContextProvider } from "./context/SettingsContext";
import { FpsContextProvider } from "./context/FpsContext";
import ControlsPanel from "./blocks/ControlsPanel";
import ControlsToggle from "./blocks/ControlsToggle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#658fb2"
    },
    secondary: {
      main: "#ffc032"
    }
  }
});

export default function Controls({ settings }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SettingsContextProvider settings={settings}>
        <FpsContextProvider>
          {isPanelVisible ? (
            <ControlsPanel onClose={() => setIsPanelVisible(false)} />
          ) : (
            <ControlsToggle onClick={() => setIsPanelVisible(true)} />
          )}
        </FpsContextProvider>
      </SettingsContextProvider>
    </ThemeProvider>
  );
}
