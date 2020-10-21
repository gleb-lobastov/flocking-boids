import { useEffect } from "react";
import fpsAdjustmentLoop from "../utils/fpsAdjustmentLoop";
import throttle from "../utils/throttle";

const MEASURE_DELAY = 2000;

export default function useFpsAdjustmentLoop(callback, isEnabled) {
  useEffect(() => {
    if (isEnabled) {
      const stopLoop = fpsAdjustmentLoop(throttle(callback, MEASURE_DELAY));
      return stopLoop;
    }
  }, [isEnabled]);
}
