import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

declare global {
  interface Window {
    __HYDRATED__: boolean;
  }
}

export function useActionState<State, Payload>(
  action: (state: State, payload: Payload) => Promise<State>,
  initialState: State,
  permalink?: string
): [State, (payload: Payload) => void, boolean] {
  const [state, setState] = useState(initialState);
  const [isPending, setIsPending] = useState(false);
  const isHydrated = useHydration();

  const formAction = async (payload: Payload) => {
    flushSync(() => {
      setIsPending(true);
    });

    let data: State = initialState;

    try {
      if (isHydrated() && permalink) {
        window.location.href = permalink;
      }

      data = await action(state, payload);
    } catch (error) {
      setState(initialState);
      throw error;
    } finally {
      setState(data);
      setIsPending(false);
    }
  };

  return [state, formAction, isPending];
}

function useHydration() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__HYDRATED__ = true;
    }
  }, []);

  return () => typeof window !== "undefined" && window.__HYDRATED__ !== true;
}
