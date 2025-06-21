import { useState } from "react";
import SlowList from "./SlowList";
import { useCustomDeferredValue } from "./useCustomDeferredValue";

export default function App() {
  const [text, setText] = useState("");
  const deferredText = useCustomDeferredValue(text);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
