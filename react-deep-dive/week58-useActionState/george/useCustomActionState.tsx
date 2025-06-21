import { useState, useTransition } from "react";

const useCustomActionState = (
  action: (state: any, formData: FormData) => any,
  initialState: any,
  permalink?: string
) => {
  const [state, setState] = useState(initialState);
  const [isPending, startTransition] = useTransition();

  const dispatchActionState = (formData: FormData) => {
    startTransition(async () => {
      const result = await action(state, formData);
      setState(result);

      if (permalink) {
        window.location.href = permalink;
      }
    })

  };

  return [state, dispatchActionState, isPending];
};

export default useCustomActionState;
