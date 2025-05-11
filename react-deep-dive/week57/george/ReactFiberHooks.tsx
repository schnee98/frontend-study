import { useEffect, useState } from "react";
import * as Scheduler from "scheduler";

type TimeoutConfig = { timeoutMs: number };
type ConfigType = TimeoutConfig | void | null;

export interface Dispatcher {
  useDeferredValue<T>(value: T, config: ConfigType): T;
}

export function mountDeferredValue<T>(value: T, config: ConfigType): T {
  // 소스코드에서 mountState, mountEffect 사용
  const [prevValue, setValue] = useState(value);
  useEffect(() => {
    Scheduler.unstable_next(() => {
      setValue(value);
    });
  }, [value, config]);
  return prevValue;
}

export function updateDeferredValue<T>(value: T, config: ConfigType): T {
  // 소스코드에서 updateState, updateEffect 사용
  const [prevValue, setValue] = useState(value);
  useEffect(() => {
    Scheduler.unstable_next(() => {
      setValue(value);
    });
  }, [value, config]);
  return prevValue;
}

export const HooksDispatcherOnMount: Dispatcher = {
  useDeferredValue: mountDeferredValue,
};

export const HooksDispatcherOnUpdate: Dispatcher = {
  useDeferredValue: updateDeferredValue,
};
