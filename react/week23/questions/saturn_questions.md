### [Reducer와 Context로 앱 확장하기](https://ko.react.dev/learn/scaling-up-with-reducer-and-context)

### [Ref로 값 참조하기](https://ko.react.dev/learn/referencing-values-with-refs)

### [Context를 사용해 데이터를 깊게 전달하기](https://ko.react.dev/learn/passing-data-deeply-with-context)

---

1. 컴포넌트가 일부 정보를 기억하게 하고 싶지만, 해당 정보가 (\_\_\_)을 유발하지 않도록 하려면 ref를 사용한다.
2. 컴포넌트가 다른 컴포넌의 ref를 받기 위해서는 어떤 API를 사용해야 하나요?
3. 아래 예시가 잘못된 이유는 무엇일까요? 어떻게 수정하면 좋을지 간단하게 설명해주세요.

```
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  if (myRef.current) {
    console.log('Ref exists:', myRef.current);
  }

  return <div ref={myRef}>Hello World</div>;
}

```
