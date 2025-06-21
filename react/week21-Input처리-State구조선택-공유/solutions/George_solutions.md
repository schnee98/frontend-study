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

- useState의 초기값은 첫 렌더링 시에만 적용된다. `const [color, setColor] = useState(props.color);` 는 초기 렌러링 시에만 프롭스의 데이터로 초기화하고 그 뒤로는 부모의 state 바뀌어도 적용되지 않는다.

## 2. 첼린지 도전 3번 선택 사라짐 수정하기를 풀고 원래 코드가 동작하지 않는 이유를 설명하세요.
[문제](https://ko.react.dev/learn/choosing-the-state-structure)

- handleHover함수 파라미터로 letter 객체를 전달해 letters안에 있는 객체와 같은 메모리 주소를 참조하고 있지만, handleStar에서 새로운 객체를 만들어 letters를 업데이트해 highlightedLetter와 letters에 포함된 객체는 다른 메모리 주소를 참조한다. 
- 따라서, letter === highlightedLetter 는 false가 된다.

## 3. State 구조화 원칙을 설명하세요

- 연관된 state 그룹화하기.
- State의 모순 피하기.
- 불필요한 state 피하기. 
- State의 중복 피하기.
- 깊게 중첩된 state 피하기. 
