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

## 2. ”Prop drilling”을 설명하세요.
  
## 3. 리엑트에서는 키값으로 배열의 인덱스 사용을 지양하고 있습니다. 그 이유를 설명하세요.