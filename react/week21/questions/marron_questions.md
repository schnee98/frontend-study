# State를 사용해 Input 다루기, State 구조 선택하기, 컴포넌트 간 State 공유하기

1. 단일 다중 state 변수 중 단일 state 변수로 통합해야하는 경우는 어떤 경우일까요?

2. 여기서 color state 변수는 messageColor prop로 초기화됩니다.
   이 경우에 어떤 문제가 발생하는지 설명해주세요.

```js
function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
```

3. 선언형 프로그래밍의 의미를 설명해주세요
