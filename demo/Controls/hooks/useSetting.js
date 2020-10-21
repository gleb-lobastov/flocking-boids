import { useState, useEffect, useCallback } from "react";

export default function useSetting(
  settings,
  path,
  { initialValue, defaultValue } = {}
) {
  const attrs = path.split(".");
  const lastAttr = attrs.pop();
  const settingObj = attrs.reduce((settings, attr) => settings[attr], settings);
  const [settingState, setSettingState] = useState(settingObj[lastAttr]);
  const realValue = settingObj[lastAttr];

  const setSetting = useCallback(
    value => {
      settingObj[lastAttr] = value;
      setSettingState(value);
    },
    [settingObj, lastAttr]
  );

  useEffect(() => {
    if (initialValue !== undefined) {
      setSetting(initialValue);
    } else if (defaultValue !== undefined && settingState === undefined) {
      setSetting(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (realValue !== settingState) {
      setSetting(realValue);
    }
  }, [realValue, settingState]);

  return [settingState, setSetting];
}
