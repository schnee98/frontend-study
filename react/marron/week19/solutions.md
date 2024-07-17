# State: 컴포넌트의 기억 저장소, 렌더링 그리고 커밋, 스냅샷으로서의 State

1. React 앱의 모든 화면 업데이트는 세 단계로 이루어집니다. 이 단계를 설명해주세요.

_답_

```
트리거: 렌더링이 일어나기 위한 조건 발동
렌더링: React에서 컴포넌트를 호출하는 것
커밋: 변경사항 적용
```

2. 버튼을 처음 누르면 값이 어떻게 변화하는지, 왜 그렇게 변화하는지 설명해주세요.

```js
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
```

_답_

```
1로 변화.
state를 설정하면 다음 렌더링에 대해서만 변경됩니다.
생성된 렌더링 시점의 state 값을 갖기 때문에 마지막에 호출된 number + 1이 적용.

```

3. 주석과 같이 alert 위치를 setWalk 위로 이동한다면 결과가 어떻게 되는지 알려주세요.

```js
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    //  alert(walk ? "Stop is next" : "Walk is next");
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
```

_답_

```
결과 같음
리액트에서 상태를 업데이트할 때 비동기적으로 처리하기 때문에
상태가 즉시 변경되지 않고 다음 렌더링 시점에 반영된다.
```
