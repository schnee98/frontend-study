1. `useState` 는 어떻게 구현 되어 있나요?

답:

- state와 setter가 배열로 저장되어 있고, state와 setter를 구별하는 cursor 가 숫자로 리액트 안에 저장되어있다.
- `useState` 함수를 호출할 때 마다 cursor를 1씩 증가시키며 state와 setter를 배열 구조 분해로 반환한다.
- setter는 `useState` 를 호출할 때 마다 생성되는데, 생성될 때, 그 시점의 cursor를 참조한 클로저 setter 함수를 반환한다.
- 코드 참조 : https://gist.githubusercontent.com/ryardley/e83bad1985740ab33b18fc578ec1957a/raw/6f1c18e82aba632ab86a5f76c13ea449b4b9b057/hooks-state-pseudocode.js

2. 리액트에서 개발할 때 `strict mode` 를 사용하는 이유는 무엇일까요?

답: 각 컴포넌트들을 두 번 호출하여 컴포넌트를 순수한 함수로 작성하였는지 확인하기 위해

3. React 에서 `setState(state + 1)` 함수를 세 번 발동하면 `state + 3` 이 아닌 `state + 1` 이 됩니다. 그 이유는 무엇일까요?

답:

- state 변수를 설정하여도 이미 가지고 있는 state 변수는 변경되지 않고 리렌더링이 발동된다.
- 리렌더링 할때 이전 UI의 스냅샷을 이용하여 이전 state와 새로운 state를 비교하여 이를 참조하는 컴포넌트들을 리렌더링한다.
