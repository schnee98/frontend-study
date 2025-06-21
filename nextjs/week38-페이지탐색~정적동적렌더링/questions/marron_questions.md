# nextjs 5 - 8

1. seeding에 대해 설명해주세요.

2. 병렬 데이터 요청에서 하나의 요청이 다른 모든 요청보다 느리다면 어떻게 되나요?

```ts
const data = await Promise.all([
  invoiceCountPromise,
  customerCountPromise,
  invoiceStatusPromise,
]);
```

3. 정적 렌더링과 동적 렌더링에 대해 설명해주세요.
