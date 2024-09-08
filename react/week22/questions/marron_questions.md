# State를 보존하고 초기화하기, state 로직을 reducer로 작성하기, Context를 사용해 데이터를 깊게 전달하기

1. key가 변경되면 React는 DOM 노드를 새로 다시 만듭니다. (O, X)

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

3. useState와 useReducer 비교했을 때, useReducer를 권장하는 경우 한가지를 얘기해주세요.
