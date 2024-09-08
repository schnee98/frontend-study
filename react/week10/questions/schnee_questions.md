1. 클래스 컴포넌트 대신 함수 컴포넌트가 권장되는 이유를 설명해주세요.

2. 리액트에서 컴포넌트의 리렌더링을 발생시키는 원인들을 설명해주세요.

3. 다음 컴포넌트는 버튼을 클릭해도 브라우저에서 변화가 일어나지 않습니다. 그 이유를 설명해주세요.

```
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`카운트의 값은 ${count}입니다.`);
  }, [count]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(0)}>버튼</button>
    </div>
  );
}

export default Counter;
```