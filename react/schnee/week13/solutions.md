1. `useContext`가 상태 관리 라이브러리가 될 수 없는 이유를 설명해주세요.

답:
- 어떠한 상태를 기반으로 다른 상태를 만들 수 있어야 한다.
- 필요에 따라 이러한 상태 변화를 최적화할 수 있어야 한다.
-> `useContext`는 단순히 props 값을 하위로 내려주기 때문에 Context의 상태가 바뀌면 Context를 사용하고 있는 전체가 리렌더링 된다.

2. `useState`와 `useReducer`의 차이점을 설명해주세요.

- `useReducer`는 setter에서 state를 바꾸는 로직과 이를 관리하는 비즈니스 로직을 분리한다. (dispatch)
- `useReducer`는 dispatch를 통해 state를 바꾸는 시나리오를 제한한다.
- `useReducer`는 세번째 인수로 함수를 받아 초기화를 지연시킬 수 있다.

3. 리액트 훅은 컴포넌트의 최상위 스코프에서만 호출해야합니다. 그 이유를 설명해주세요.

답:
- 훅을 최상위 스코프에서만 호출해야 렌더링 할 때마다 훅들의 실행 순서가 보장된다.
-> 리액트는 훅에 대한 정보를 따로 저장하고 있는데, 이 정보들의 구조가 링크드 리스트와 비슷하고 인덱스를 저장하고 있다.
-> 훅들이 실행된 순서가 위 정보와 다르면 리액트는 에러를 발생시킨다.
