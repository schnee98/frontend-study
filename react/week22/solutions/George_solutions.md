## 1. 아래 코드는 체크 박스를 선택하거나 선택 해제할 때 카운터 state는 초기화되지 않습니다. 그 이유를 설명하고, 각 컴포넌트가 독립적인 state를 유지할 수 있도록 수정하세요.
```
import { useState } from "react";

export default function App() {
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <div>
                    <Counter isFancy={true} />
                </div>
            ) : (
                <div>
                    <Counter isFancy={false} />
                </div>
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={(e) => {
                        setIsFancy(e.target.checked);
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }
    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    );
}

```

- isFancy가 true이든 false이든 `<Counter />`는 같은 자리에 있다. React는 컴포넌트가 UI 트리에서 그 자리에 렌더링되는 한 state를 유지기 때문에 state가 공유된다.

## 2. ”Prop drilling”을 설명하세요.
- "Prop drilling"은 React 애플리케이션에서 데이터(상태나 함수 등)를 부모 컴포넌트에서 자식 컴포넌트로, 그리고 필요하다면 더 하위의 자식 컴포넌트로 전달하는 과정을 의미한다. 이 과정에서 여러 계층의 컴포넌트를 거쳐 데이터를 전달해야 할 때, 필요한 데이터가 직접적으로 사용되지 않는 중간 계층의 컴포넌트들도 그 데이터를 props로 받아 전달해야 하는 상황을 의미한다.
  
## 3. 리엑트에서는 키값으로 배열의 인덱스 사용을 지양하고 있습니다. 그 이유를 설명하세요.
- 배열의 요소들이 추가, 삭제, 이동되면 인덱스 값이 변경될 수 있다. 인덱스를 key로 사용하면, 요소의 순서가 바뀔 때 React는 각 요소를 올바르게 식별하지 못하고, 기존 요소를 재사용하지 않거나 잘못된 요소를 업데이트할 수 있다. 이는 불필요한 DOM 조작과 리렌더링을 초래할 수 있다.

- 예를 들어, 요소들이 [a, b, c]에서 [b, c, a]로 순서가 바뀔 때, 인덱스를 key로 사용하면 React는 모든 요소가 변경되었다고 판단하여 모든 요소를 새로 렌더링한다. 반면, 고유한 key가 있다면, React는 순서만 변경된 것을 인식하고 최소한의 변경만 처리할 수 있디.

- 컴포넌트가 재사용되면서 내부 상태를 가지고 있을 때, 인덱스를 key로 사용하면 요소가 재배열될 때 상태가 올바르게 유지되지 않을 수 있다. React는 key를 기반으로 상태를 관리하기 때문에, key가 변경되면 상태도 새롭게 초기화된다.

- 예를 들어, 리스트 아이템이 재정렬되면서 인덱스 기반 key가 변경되면, React는 새로운 아이템이 추가되었다고 간주하고, 이전 상태를 잃어버리게 된다