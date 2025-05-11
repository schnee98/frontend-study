import { useState, memo, useRef } from "react";
import {
  HooksDispatcherOnMount,
  HooksDispatcherOnUpdate,
} from "./ReactFiberHooks";
import { ReactSharedInternals } from "./ReactSharedInternals";
import { useDeferredValue } from "./useDeferredValue";

const renderWithHooks = () => {
  const isFirstRender = useRef(true);

  ReactSharedInternals.H = isFirstRender.current
    ? HooksDispatcherOnMount
    : HooksDispatcherOnUpdate;

  isFirstRender.current = false;
}

const SlowList = memo(function SlowList({ text }: { text: string }) {
  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li className="item">Text: {text}</li>;
}

export default function App() {
  renderWithHooks();
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}