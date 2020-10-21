import React, { useContext } from "react";

const SettingsContext = React.createContext(null);

export function SettingsContextProvider({ children, settings }) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
