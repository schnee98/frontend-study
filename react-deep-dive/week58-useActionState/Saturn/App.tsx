import { useMyActionState } from "./useMyActionState";

async function increment(previousState, formData) {
  return previousState + 1;
}

export default function App() {
  const [state, formRef, formAction] = useMyActionState(increment, 0);

  return (
    <form ref={formRef} onSubmit={formAction}>
      {state}
      <input name="username" defaultValue="bingsoo" />
      <button type="submit">Increment</button>
    </form>
  );
}
