import React, { useContext, useState, useMemo } from "react";
import useFpsAdjustmentLoop from "../hooks/useFpsAdjustmentLoop";
import adjustBoidsCount from "../utils/adjustBoidsCount";

const FpsContext = React.createContext(null);

export function FpsContextProvider({ children, settings }) {
  const [isInAutoAdjustmentMode, setIsInAutoAdjustmentMode] = useState(true);
  const [{ fps = null, boidsCount = null }, setStats] = useState({});

  useFpsAdjustmentLoop(fps => {
    const boidsCount = adjustBoidsCount(fps);
    setStats({ fps, boidsCount });
  }, isInAutoAdjustmentMode);

  const ctx = useMemo(
    () => ({
      fps,
      boidsCount,
      isInAutoAdjustmentMode,
      setIsInAutoAdjustmentMode
    }),
    [fps, boidsCount, isInAutoAdjustmentMode]
  );

  return <FpsContext.Provider value={ctx}>{children}</FpsContext.Provider>;
}

export function useFpsAdjustment() {
  return useContext(FpsContext);
}
