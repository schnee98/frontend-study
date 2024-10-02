# 아이템 19 - 22

1. 각 변수의 타입을 추론해주세요.

```ts
const x: string = "x"; // 타입은 string
const y = "y"; // 타입은 "y"
let z = "z"; // 타입은 string
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

_답_

```
- 변수명을 더 구체적으로 지을 수 있음
- 타입 추론 향상, 타입 간결, 타입 구문 불필요해짐
- const로 선언하여 코드가 간결해지고 타입 체커가 추론하기에도 좋음
```

3. as const를 붙이면 타입 넓히기가 동작하지 않습니다 (O, X)

```ts
const v3 = {
  x: 1,
  y: 2,
} as const;
```

_답_

```
O, 
readonly로 처리되어 값 변경 불가능, 타입 추론 시 리터럴 타입으로 고정, 속성들은 읽기 전용
```
