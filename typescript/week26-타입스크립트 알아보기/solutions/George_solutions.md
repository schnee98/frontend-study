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

- js로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거되어 버립니다.
- 따라서, instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임시점에 아무런 역할을 할 수 없습니다.

```ts
function calculateArea(shape: Shape) {
  if ("height" in shape) {
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
- as number 구문은 타입 단언으로, 컴파일 시간에만 영향을 미칩니다.
- TypeScript 컴파일러는 val as number를 보고 val을 number 타입으로 취급합니다.
- 이로 인해 함수가 number 타입을 반환한다는 타입 체크를 통과하게 됩니다.
- TypeScript 코드가 JavaScript로 컴파일될 때, 모든 타입 정보와 타입 단언은 제거됩니다.
- 결과적으로 다음과 같은 JavaScript 코드가 생성됩니다.
```js
function asNumber(val) {
  return val;
}
```
- JavaScript 엔진은 단순히 val을 그대로 반환합니다.
- 입력값이 "1"이었으므로, 문자열 "1"이 그대로 반환됩니다.

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
- 덕 타이핑이란: 객체가 특정 인터페이스에서 요구하는 모든 속성과 메서드를 가지고 있다면, 그 객체는 해당 인터페이스를 구현한 것으로 간주하는 것 입니다.
- Vector3D는 Vector2D가 요구하는 모든 속성(x와 y)을 포함하고 있습니다.
- 따라서 TypeScript는 Vector3D 객체를 Vector2D 타입이 필요한 곳에서 사용할 수 있다고 판단합니다.
- normalize 함수에서 Vector3D 객체로 calculateLength를 호출하지만, calculateLength에서 필요한 x와 y 속성이 모두 존재하므로 타입 에러가 발생하지 않습니다.