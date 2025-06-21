import { useState, useTransition } from "react";

function useMarronActionState<State>(
  action: (prevState: State, formData: FormData) => State | Promise<State>,
  initialState: State
): [State, (formData: FormData) => void, boolean] {
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  const dispatch = (formData: FormData) => {
    startTransition(async () => {
      const newState = await action(state, formData);
      setState(newState);
    });
  };

  return [state, dispatch, isPending];
}
