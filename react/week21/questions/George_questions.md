## 1. 이 Clock 컴포넌트는 color와 time 두 가지 props를 받습니다. 선택 창에서 다른 색상을 선택하면 Clock 컴포넌트는 부모 컴포넌트에서 다른 color prop을 받습니다. 그러나 어떤 이유에서인지 표시된 색상이 업데이트되지 않습니다. 그 이유를 설명하고 코드를 수정하세요.

```
import { useState } from 'react';

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}
```

## 2. 첼린지 도전 3번: 선택 사라짐 수정하기를 풀고 원래 코드가 동작하지 않는 이유를 설명하세요.
[문제](https://ko.react.dev/learn/choosing-the-state-structure)

## 3. State 구조화 원칙을 설명하세요