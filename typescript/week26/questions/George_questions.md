### 1. 아래 코드의 문제점을 설명하고 리펙토링 해보세요.
```ts
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}
```

### 2. 아래 코드를 실행했을 때 console.log(result)는 어떤 값을 출력할까요? 왜 그런 결과가 나오는지 설명하세요.

```ts
function asNumber(val: number | string): number {
    return val as number;
}

const result = asNumber("1");
console.log(result);
```

### 3. 아래 코드는 타입 에러가 발생하지 않습니다. calculateLength 함수가 2D 벡터를 받도록 선언되었음에도 3D 벡터를 받는데 문제가 없었습니다. 이 현상을 덕 타이핑(Duck Typing)의 개념을 기반으로 설명하세요.
```ts
interface Vector2D {
    x: number;
    y: number;
}

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y)
}

function normalize(v: Vector3D) {
    const length = calculateLength(v)
    return length
}

const result = normalize({x:3, y:4, z: 5})
console.log(result)
```