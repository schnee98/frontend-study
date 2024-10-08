1. useEffect를 사용할 때 주의할 점과 그 이유를 설명해주세요.

답:
- eslint-disable-line react-hooks/exhaustive-deps 주석을 자제한다
  - useEffect 콜백 함수에서 참조하는 변수들과 의존성 배열 안의 변수들이 일치하지 않으면 useEffect의 흐름과 컴포넌트의 렌더링 흐름이 맞지 않을 수 있다.
  - 의존성 배열과 콜백의 참조 변수들이 일치하지 않게 구현을 해야 원하는 동작대로 흘러간다면, useEffect가 아니라 다른 방법으로 구현을 해야 할 수도 있다.
- useEffect의 콜백 함수에 함수명을 부여하라
  - 콜백 함수의 복잡도가 높아질 수록 함수명을 부여해야 해당 함수의 동작을 이해하기 더 쉽다
- 거대한 useEffect를 만들지 마라
  - useEffect의 크기가 커질수록 성능에 악영향을 미치고, useEffect가 언제 실행되었는지 추적하기 어렵다.
- 불필요한 외부 함수를 만들지 마라
  - 불필요한 외부 함수는 불필요한 연산이나 의존성을 야기할 수 있고 가독성에도 영향을 미친다.

2. useMemo로 useCallback을 구현해주세요.

답:
```
function useCallback(callback, args) {
  return useMemo(() => callback, args);
}
```

3. useRef의 특징을 나열해주세요.

답:
- ref로 지정한 객체에 접근을 할 수 있다. 예) DOM 노드
- useState와 같이 값을 변경할 수 있다.
- useRef의 값이 변경되도 리렌더링 되지 않는다.