1. Object.entires 와 reduce를 사용해서 null과 undefined를 제거하는 코드를 작성해주세요.

```typescript
const person = {
  name: "schnee",
  address: null,
  phoneNumber: undefined,
};

const info = {}; // ?

console.log(info);
```

2. 리액트의 JSX.Element 에는 다음 이벤트 핸들러들을 전달할 수 있습니다. 각 이벤트 핸들러의 알맞은 input 타입을 알려주세요.

- onTouchStart
- onWheel
- onClick
- onKeyDown

3. 타입스크립트 코드를 컴파일하면 여러 브라우저 환경을 지원하기 위해 디버깅이 어려워지는 코드가 작성될 때가 많습니다. 이 문제를 해결하는 기능은 무엇인가요?
