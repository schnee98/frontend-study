import { useState, useEffect } from 'react';

export function useCustomDeferredValue<T>(value: T, delay: number = 300, initialValue?: T): T {
  const [deferredValue, setDeferredValue] = useState(initialValue ?? value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeferredValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return deferredValue;
}

