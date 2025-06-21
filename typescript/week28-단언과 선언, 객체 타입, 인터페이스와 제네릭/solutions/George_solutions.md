## 1. 아래 키워드들과 관련하여 타입과 인터페이스의 차이점을 설명하세요.
- 유니온 타입
- 튜플 타입
- 선언 병합
- 확장
- 복잡한 타입 연산

### 답
- 유니온 타입: 타입은 유니온 타입을 직접 정의할 수 있지만, 인터페이스는 불가
```ts
type ID = number | string;

// 인터페이스에서는 직접적인 유니온 정의 불가능
```
- 튜플 타입: 타입은 튜플을 정확히 표현할 수 있지만, 인터페이스로는 완벽한 튜플 표현이 어려움
```ts
// 타입
type Point = [number, number];

// 인터페이스
interface IPoint {
  0: number;
  1: number;
  length: 2;
}
// 이는 튜플과 유사하지만 정확히 같지 않음
```

- 튜플은 기본적으로 배열이므로 push, pop, concat 등의 배열 메서드를 사용할 수 있지만, 인터페이스로 정의한 구조에서는 이러한 메서드가 포함되자 않아 사용 불가
- 인덱스로 접근 시 튜플은 정의된 인덱스 외의 접근을 막지만, 인터페이스는 막지 않아 경고가 없음
```ts
type TuplePoint = [number, number];
interface IPoint { 0: number; 1: number; length: 2; }

const tuplePoint: TuplePoint = [1, 2];
const interfacePoint: IPoint = [1, 2];

// 배열 메서드 사용
tuplePoint.push(3); // 컴파일러 경고: 길이가 2를 초과합니다.
interfacePoint.push(3); // 오류: 'push' 속성이 'IPoint' 타입에 없습니다.

// 인덱스 접근
console.log(tuplePoint[2]); // undefined, 하지만 컴파일러 경고
console.log(interfacePoint[2]); // undefined, 경고 없음

```

- 선언 병학: 인터페이스는 선언 병합이 가능하지만, 타입은 불가능

```ts
// 인터페이스
interface User {
  name: string;
}
interface User {
  age: number;
}
// User는 name과 age 속성을 모두 가짐

// 타입
// 동일한 이름으로 재선언 불가능
```

- 확장: 인터페이스는 extends 키워드를 사용하여 확장 가능, 타입은 인터섹션을 사용

```ts
// 인터페이스
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}

// 타입
type Animal = {
  name: string;
};
type Dog = Animal & {
  bark(): void;
};
```

- 복잡한 타입 연산: 타입은 매핑된 타입, 조건부 타입 등 복잡한 타입 연산을 수행할 수 있지만, 인터페이스는 제한적
```ts
// 타입
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ConditionalType<T> = T extends string ? 'string' : 'not string';

// 인터페이스
// 이런 복잡한 타입 연산 불가능
```

## 2. Pick에 대해 설명하고, 아래 UserBasicInfo의 타입이 어떻게 정의되는지 설명하세요.

```
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
}

type UserBasicInfo = Pick<User, 'name' | 'email' | 'age'>;
```

- Pick은 TypeScript의 내장 유틸리티 타입 중 하나로, 특정 타입에서 원하는 속성만을 선택하여 새로운 타입을 생성합니다.

```
{
  name: string;
  email: string;
  age: number;
}
```

- Pick의 내부 구현
```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

## 3. Partial에 대해 설명하고, 아래 PartialUser의 타입이 어떻게 정의되는지 설명하세요.

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
```

- `Partial<T>`은 타입 T의 모든 속성을 선택적으로 만듭니다.
```ts
type PartialUser = {
    id?: number | undefined;
    name?: string | undefined;
    email?: string | undefined;
}
```

- Partial의 내부 구현
```ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```