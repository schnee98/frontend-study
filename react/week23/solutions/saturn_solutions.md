1. 렌더링
2. 리액트는 기본적으로 다른 컴포넌트의 DOM 노드에 접근하는 것을 허용하지 않음.(자식 컴포넌트도 예외 아님)
3. `myRef.current`는 렌더링 중에 읽히고 있음. React는 `ref.current`가 언제 변하는지 추적하지 않기 때문에, 컴포넌트의 동작이 예측 불가능해질 수 있음.

```
import React, { useRef, useState, useEffect } from 'react';

function MyComponent() {
  const [element, setElement] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      setElement(myRef.current);
    }
  }, []);

  if (element) {
    console.log('Element exists:', element);
  }

  return <div ref={myRef}>Hello World</div>;
}

```
