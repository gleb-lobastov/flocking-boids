import { useEffect, useRef } from "react";

export default function useDidUpdate(effect, deps) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      effect();
    }
  }, deps);
}
