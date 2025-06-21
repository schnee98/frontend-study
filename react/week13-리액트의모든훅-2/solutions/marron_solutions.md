# 3장 리액트 훅 파헤치기

## usContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, 훅의 규칙

1. useReducer과 useState의 차이점을 설명하세요.

_답_

```
useReducer는 useState와 달리 2개에서 3개의 인수를 필요로 한다.

dispatcher state를 업데이트, state를 변경할 수 있는 action을 넘겨준다

```

2. 최상위에서만 훅을 호출해야한다. 반복문이나 조건문, 중첩된 함수내에서 훅을 실행할 수 없다는 규칙이 있다. 어떤 의미를 가지는지 설명하시오.

_답_

```
리액트 훅은 파이버 객체의 링크드 리스트 호출 순서에 따라 저장된다. 이렇게 고정된 순서에 의존해 이전 값에 대한 비교와 실행을 한다.
항상 훅은 실행 순서를 보장받을 수 있는 최상단에 선언되어 있어야 한다.
```