1. 다음 `paraoh` 변수의 타입이 무엇인가요?

```typescript
declare let hasDates: boolean;
const nameTitle = { name: "Khufu", title: "Paraoh" };
const paraoh = {
  ...nameTitle,
  ...(hasDates ? { start: -2589, end: -2566 } : {}),
};
```

2. 함수에 동기적인 동작과 비동기적인 동작을 섞으면 안되는 이유를 설명하고, 섞게 될 수 밖에 없다면 어떻게 해야 하는지 말해주세요.

3. 다음 함수 선언이 잘못된 이유를 말해주세요.

```js
const fn = (a, b) => {
  console.log(a + b);
};
```
