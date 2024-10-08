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

3. Pick, Partial 타입에 대해 설명해주세요.
