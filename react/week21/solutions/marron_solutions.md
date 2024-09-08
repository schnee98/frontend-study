# State를 사용해 Input 다루기, State 구조 선택하기, 컴포넌트 간 State 공유하기

1. 단일 다중 state 변수 중 단일 state 변수로 통합해야하는 경우는 어떤 경우일까요?

```
두 개의 state 변수가 항상 함께 변경될 때
```

2. 여기서 color state 변수는 messageColor prop로 초기화됩니다.
   이 경우에 어떤 문제가 발생하는지 설명해주세요.

```js
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
```

```
부모 컴포넌트가 나중에 다른 값의 messageColor를 전달한다면 (예를 들어, 'blue' 대신 'red'), color state 변수 가 업데이트되지 않습니다! State는 첫 번째 렌더링 중에만 초기화됩니다.
그 때문에 state 변수의 일부 prop를 “미러링”하면 혼란이 발생할 수 있습니다.
```

3. 선언형 프로그래밍의 의미를 설명해주세요

```
UI를 세밀하게 직접 조작하는 것(명령형)이 아니라 각각의 시각적 state로 UI를 묘사하는 것
```
