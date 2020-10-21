import { useState, useEffect, useCallback } from "react";

export default function useSetting(
  settings,
  path,
  { initialValue, defaultValue } = {}
) {
  const attrs = path.split(".");
  const lastAttr = attrs.pop();
  const settingObj = attrs.reduce((settings, attr) => settings[attr], settings);
  const [settingState, setSettingState] = useState(() => {
    if (initialValue !== undefined) {
      return initialValue;
    } else if (
      defaultValue !== undefined &&
      settingObj[lastAttr] === undefined
    ) {
      return defaultValue;
    }
    return settingObj[lastAttr];
  });
  const realValue = settingObj[lastAttr];

  const setSetting = useCallback(
    value => {
      settingObj[lastAttr] = value;
      setSettingState(value);
    },
    [settingObj, lastAttr]
  );

  useEffect(() => {
    if (realValue !== settingState) {
      setSetting(realValue);
    }
  }, [realValue, settingState]);

  return [settingState, setSetting];
}
