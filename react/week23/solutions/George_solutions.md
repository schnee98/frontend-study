## 1. useRef와 useState의 차이점을 설명하세요.

| **Refs**                               | **State**                                                           |
|----------------------------------------|---------------------------------------------------------------------|
| `useRef(initialValue)`는 `{ current: initialValue }`을 반환합니다. | `useState(initialValue)`는 state 변수의 현재 값과 setter 함수 `[value, setValue]`를 반환합니다. |
| state를 바꿔도 리렌더 되지 않습니다.         | state를 바꾸면 리렌더 됩니다.                                             |
| **Mutable** - 렌더링 프로세스 외부에서 `current` 값을 수정 및 업데이트할 수 있습니다. | **Immutable** - state를 수정하기 위해서는 반드시 state 설정 함수를 사용하여 리렌더 대기열에 넣어야 합니다. |
| 렌더링 중에는 `current` 값을 읽거나 쓰면 안 됩니다.      | 언제든지 state를 읽을 수 있습니다. 그러나 각 렌더마다 변경되지 않는 자체적인 state의 스냅샷이 있습니다. |


## 2. useRef는 React 내부적으로 useState를 사용하여 구현될 수 있습니다. 아래 코드에서 useState의 setter 함수가 사용되지 않는 이유를 설명하세요.

```
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
```

- useState는 기본적으로 상태를 변경하고 리렌더링을 트리거하기 위해 setter 함수를 제공합니다. 하지만 useRef는 리렌더링을 유발하지 않기 위해 setter 함수가 필요하지 않습니다. 리렌더링을 트리거하지 않고, 단순히 값만 유지해야 하므로 상태의 setter를 호출할 필요가 없습니다.
- useRef가 반환하는 값은 객체({ current: initialValue })로, 이 객체는 **가변성(mutable)**을 가지고 있기 때문에, current 값을 직접 수정할 수 있습니다. 이 과정에서 React는 값 변경을 감지하지 않으므로 setter 없이도 값이 변경될 수 있습니다.

