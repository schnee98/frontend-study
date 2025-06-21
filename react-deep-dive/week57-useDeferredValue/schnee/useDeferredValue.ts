import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

const scheduler = {
  cache: new Set<() => void>(),
  schedule(fn: () => void) {
    this.cache.clear();
    this.cache.add(fn);

    setTimeout(() => {
      this.flush();
    }, 1000);
  },
  flush() {
    this.cache.forEach((fn) => fn());
    this.cache.clear();
  },
};

function flush(fn: () => void) {
  setTimeout(() => {
    flushSync(() => {
      fn();
    });
  });
}

export function useDeferredValue<T>(value: T, _initialValue?: T) {
  const [initialValue, setInitialValue] = useState(_initialValue ?? value);
  const [deferredValue, setDeferredValue] = useState(initialValue ?? value);

  useEffect(() => {
    flush(() => {
      setDeferredValue(initialValue);
    });

    scheduler.schedule(() => {
      setDeferredValue(value);
      setInitialValue(value);
    });
  }, [value, initialValue]);

  return deferredValue;
}
