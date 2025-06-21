import { startTransition, useEffect, useState } from "react";

export function useCustomDeferredValue(value) {
  const [state, setState] = useState(value);

  useEffect(() => {
    startTransition(() => setState(value));
  }, [value]);

  return state;
}
