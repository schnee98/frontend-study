import { useState } from 'react';
import { useCustomDeferredValue } from './useCustomDeferredValue';
import SlowList from './SlowList';

export default function App() {
  const [text, setText] = useState('');
  const deferredText = useCustomDeferredValue(text, 300); 

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
