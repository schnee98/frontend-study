import { useCallback, useEffect, useState } from "react";

// export function useOptimistic<State>(
//   passthrough: State
// ): [State, (action: State | ((pendingState: State) => State)) => void];

// export function useOptimistic<State, Action>(
//   passthrough: State,
//   reducer: (state: State, action: Action) => State
// ): [State, (action: Action) => void];

export function useCustomOptimistic<State, Action>(
  passthrough: State,
  reducer?: (state: State, action: Action) => State
): [State, (action: Action) => void] {
  const [state, setState] = useState(passthrough);
  useEffect(() => setState(passthrough), [passthrough]);

  const dispatch = useCallback(
    (action: any) => {
      if (reducer) {
        setState((prev) => reducer(prev, action));
      } else {
        setState((prev) =>
          typeof action === "function" ? action(prev) : action
        );
      }
    },
    [reducer]
  );
  return [state, dispatch];
}
