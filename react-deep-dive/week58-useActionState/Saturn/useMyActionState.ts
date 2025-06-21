import { useState, useRef } from "react";

export function useMyActionState(fn, initialState) {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(initialState); // prevState 유지용
  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const nextState = await fn(stateRef.current, formData);

    stateRef.current = nextState;
    setState(nextState);
  };

  return [state, formRef, formAction];
}
