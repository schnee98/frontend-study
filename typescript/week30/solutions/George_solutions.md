## 1. 가려지는 변수와 재사용되는 변수의 차이점을 설명하세요.
- 가려지는 변수: 동일한 이름으로 새로운 스코프에서 다시 선언되는 변수,
- 재사용되는 변수: 동일한 스코프 내에서 값이 변경되는 변수

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

- 에러 발생 이유:
  - let으로 선언되어 재할당이 가능하다고 판단해 string으로 추론됩니다.
  - string 타입은 "x" | "y" | "z" 타입에 할당이 불가능하므로 오류가 발생합니다.
- 개선 방법:
  - "x"를 const로 선언하여 타입을 좁힙니다.
  - const로 "x"를 선언하면 재할당될 수 없으므로 타입스크립트는 좁은 타입인 "x"로 추론합니다.

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

- as const를 사용하면 타입스크립트는 값을 최대한 좁은 타입(가장 구체적인 타입)으로 추론하며, 객체나 배열의 경우 모든 프로퍼티나 요소를 읽기 전용으로 만듭니다.

```ts
{
    x: 1;
    y: number;
}

{
    readonly x: 1;
    readonly y: 2;
}

number[]

readonly [1, 2, 3]
```