# State: 컴포넌트의 기억 저장소, 렌더링 그리고 커밋, 스냅샷으로서의 State

1. React 앱의 모든 화면 업데이트는 세 단계로 이루어집니다. 이 단계를 설명해주세요.

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
