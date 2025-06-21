## 1. TypeScript에서 인덱스 시그니처와 Record 타입의 차이점을 설명하고, 각 타입이 어떤 상황에서 유용한지 설명하세요.

- 인덱스 시그니처
  - 유연한 객체 타입을 정의할 떄 사용
  - 런타임에 객체의 구조가 동적으로 결정될 때
  - 키의 이름을 미리 알 수 없는 경우(예: CSV 파일 파싱)

- Record
  - 키의 타입을 제한할 수 있음
  - 구체적인 엄격한 타입 정의 가능
  - 키의 집합을 미리 알고 있을 때 사용

## 2. readonly와 const의 차이점에 대해 설명하세요.
- const는 변수 자체의 재할당을 방지하지만, 객체의 내부 속성 변경은 허용합니다.
- readonly는 속성의 재할당을 방지하며, 객체나 배열에 사용될 때 해당 요소의 변경을 방지합니다.
- const는 값 자체에 대한 것이고, readonly는 타입 시스템에서 사용됩니다.

## 3. 아래와 같은 인터페이스가 있을 때, 인터페이스의 모든 속성을 읽기 전용으로 만드는 매핑된 타입을 작성해 주세요.

```ts
interface User {
  name: string;
  age: number;
  email: string;
}
```

- 답:
```ts
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

```ts
type ReadonlyUser = Readonly<User>;
```