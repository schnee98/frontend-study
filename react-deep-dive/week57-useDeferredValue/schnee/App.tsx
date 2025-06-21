import { useState } from "react";
import SlowList from "./SlowList";
import { useDeferredValue } from "./useDeferredValue";

export default function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
