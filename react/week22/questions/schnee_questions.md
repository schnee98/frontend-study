1. 다음은 컴포넌트를 잘못 정의한 예시입니다. 다음 예시가 잘못된 이유를 설명하고 컴포넌트가 올바르게 작동하도록 코드를 바꿔주세요.

```js
import { useState } from "react";

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}
```

2. `useReducer` 를 사용할 때 디버깅이 `useState` 를 사용했을 때 보다 더 용이한 이유를 설명해주세요.

3. [같은 컴포넌트에서 context를 사용하며 제공하기](https://ko.react.dev/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component) 에서의 예시 코드는 모든 `Section` 컴포넌트가 같은 변수 ( `LevelContext`의 `level` 변수 ) 를 참조하고 있는데 컴포넌트마다 다른 값을 가지면서 렌더링 되고 있습니다. 그 이유는 무엇일까요?
