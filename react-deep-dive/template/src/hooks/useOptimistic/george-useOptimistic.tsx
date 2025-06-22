import { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

function useCustomOptimistic<S, A>(
  baseState: S,
  reducer: (state: S, action: A) => S
): [S, (action: A) => void] {
  const [optimisticState, setOptimisticState] = useState<S>(baseState);

  useEffect(() => {
    setOptimisticState(baseState);
  }, [baseState]);

  const addOptimistic = useCallback((action: A) => {
    flushSync(() => {
      setOptimisticState((prev) => reducer(prev, action));
    });
  }, [reducer]);

  return [optimisticState, addOptimistic];
}

export default useCustomOptimistic;
