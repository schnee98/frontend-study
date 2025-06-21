# State를 보존하고 초기화하기, state 로직을 reducer로 작성하기, Context를 사용해 데이터를 깊게 전달하기

1. key가 변경되면 React는 DOM 노드를 새로 다시 만듭니다. (O, X)

_답_

```
O 마자용
key가 변경되면 React는 해당 요소를 새로운 요소로 인식하고, 기존의 DOM 노드를 제거하고 새로 생성하게 됩니다.
이 과정에서 React는 key가 변경된 요소의 이전 상태를 버리고 새로운 상태로 교체합니다.
```

2. dispatch를 구현하려면 무엇을 해야 할까요?
   reducer 함수는 두 개의 인수인 현재 state와 action 객체를 입력받고 다음 state를 반환한다는 것을 떠올려보세요.

```js
export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    // ???
  }

  return [state, dispatch];
}
```

_답_

```js
function dispatch(action) {
  const nextState = reducer(state, action);
  setState(nextState);
}
```

3. useState와 useReducer 비교했을 때, useReducer를 권장하는 경우 한가지를 얘기해주세요.

_답_

```
코드 크기: 여러 이벤트 핸들러에서 비슷한 방식으로 state를 업데이트하는 경우, useReducer를 사용하면 코드의 양을 줄이는 데 도움이 될 수 있습니다.

가독성: 복잡한 구조의 state를 다루게 되면 컴포넌트의 코드 양이 더 많아져 한눈에 읽기 어려워질 수 있습니다. 이 경우 useReducer를 사용하면 업데이트 로직이 어떻게 동작하는지와 이벤트 핸들러를 통해서 무엇이 발생했는지 구현한 부분을 명확하게 구분할 수 있습니다.

디버깅: useState를 사용하며 버그를 발견했을 때, 왜, 어디서 state가 잘못 설정됐는지 찾기 어려울 수 있습니다. useReducer를 사용하면, 콘솔 로그를 reducer에 추가하여 state가 업데이트되는 모든 부분과 왜 해당 버그가 발생했는지(어떤 action으로 인한 것인지)를 확인할 수 있습니다. 각 action이 올바르게 작성되어 있다면, 버그를 발생시킨 부분이 reducer 로직 자체에 있다는 것을 알 수 있을 것입니다. 그렇지만 useState를 사용하는 경우보다 더 많은 코드를 단계별로 실행해서 디버깅 해야 하는 점이 있기도 합니다.

테스팅: reducer는 컴포넌트에 의존하지 않는 순수 함수입니다. 이는 reducer를 독립적으로 분리해서 내보내거나 테스트할 수 있다는 것을 의미합니다. 일반적으로 더 현실적인 환경에서 컴포넌트를 테스트하는 것이 좋지만, 복잡한 state를 업데이트하는 로직의 경우 reducer가 특정 초기 state 및 action에 대해 특정 state를 반환한다고 생각하고 테스트하는 것이 유용할 수 있습니다.
```
