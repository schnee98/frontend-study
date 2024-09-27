## 타입 단언보다는 타입 선언을 사용하기

## 객체 래퍼 타입 피하기

## 잉여 속성 체크의 한계 인지하기

## 함수 표현식에 타입 적용하기

## 타입과 인터페이스의 차이점 알기

## 타입 연산과 제네릭 사용으로 반복 줄이기

1. 타입 선언과 타입 단언의 차이에 대해 설명해주세요.

```ts
interface Person {
  name: string;
}

const marron: Person = { name: "marron" };
const crong: { name: "crong" } as Person ;
```

_답_

```ts
marron 타입 선언
crong 타입 단언

타입 선언은 할당되는 값이 해당 인터페이스를 만족하는지 검사한다.

타입 단언은 강제로 타입을 지정.
타입 체커에게 오류를 무시하라고 하는 것과 같다.

속성을 추가하는 경우에도 선언에서는 알려진 속성만 지정할 수 있다고 오류,
단언에서는 오류가 발생하지 않는다.

{} as Person
const crong = <Person>{} // 같은 의미

ts는 DOM에 접근할 수 없어서 DOM 타입의 경우에는 단언문을 쓰는 것이 타당하다.

const el = document.getElememtById("foo");
// HTMLElement | null
const el = document.getElememtById("foo")!;
// HTMLElement
// ! 사용으로 단언. null이 아니라고 확신의 의미
```

2. 함수 표현식을 사용하여 리팩토링해주세요.
<details>
  <summary>힌트</summary>
  함수 타입 만들기
</details>

</br>

```ts
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
```

_답_

```ts
type BinaryFn = (a: number, b: number) => number;

const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```

3. Pick, Partial 타입에 대해 간단하게 설명해주세요.

_답_

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type PickedUser = Pick<User, "id" | "name">;

type PartialUser = Partial<User>;
// PartialUser는 { id?: number; name?: string; age?: number; }

Pick<T, K>: 타입 T에서 특정 속성 K만 선택하여 새로운 타입을 만든다.
Partial<T>: 타입 T의 모든 속성을 선택적으로 바꾼다.
```
