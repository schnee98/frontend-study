## 1. 가려지는 변수와 재사용되는 변수의 차이점을 설명하세요.

## 2. 다음 코드에서 타입 에러가 발생하는 이유를 설명하고 개선해보세요.
```ts
interface Vector3 {
    x: number;
    y: number;
    z: number;
}

let x = 'x';
let vec = {x: 10, y: 20, z: 30};

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
}

getComponent (vec, x);
// "string" 형식의 인수는 "x" | "y" | "z" 형식의 매게 변수에 할당될 수 없습니다.
```

## 3. 값 뒤에 as const를 붙이면 타입스크립트는 어떤 타입으로 추론하는지 설명하고, 아래 코드에서 각 변수가 어떤 타입으로 추론되는지 작성하세요.

```ts
const v1 = {
    x: 1 as const,
    y: 2,
}

const v2 = {
    x: 1,
    y: 2,
} as const

const a1 = [1,2,3]
const a2 = [1,2,3] as const

```