# 아이템 19 - 22

1. 각 변수의 타입을 추론해주세요.

```ts
const x: string = "x";
const y = "y";
let z = "z";
```

2. 아래의 경우 유니온 타입 사용보다 별도의 변수를 도입하는 것이 낫습니다. 더 나은 이유를 설명해주세요.

```ts
// 유니온 타입
let id: string|number = "12-34-56";
fetchProduct(id);
id = 123456;
fetchProductBySerial(Number(id))

// 별도의 변수 도입
const id = "12-34-56":
fetchProduct(id);
const serial = 123456;
fetchProductBySerialNumber(serial);
```

3. as const를 붙이면 타입 넓히기가 동작하지 않습니다 (O, X)

```ts
const v3 = {
  x: 1,
  y: 2,
} as const;
```
