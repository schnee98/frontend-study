# 아이템 33 - 37

1. any와 unknown의 차이를 설명해주세요.

_답_

```
any 타입에는 어떤 타입도 가능 unknown은 any타입 제외한 모든 타입 할당 불가능 

any: 타입 검사를 완전히 무력화하므로, 잘못된 사용에 대한 경고 없이 런타임 오류가 발생할 수 있습니다.
어떤 연산이나 프로퍼티 접근도 자유롭게 가능합니다.

unknown: 타입 확인을 거치지 않고는 값에 접근할 수 없으므로, 더 안전한 코드를 작성할 수 있습니다.
타입을 확인하지 않으면 연산이나 프로퍼티 접근을 허용하지 않습니다.
```

2. `calculateNorm(vec3D);` 문제는 없지만 이러한 실수를 방지하기 위해 사용하는 방법을 알려주세요.

```ts
interface Vector2D {
  x: number;
  y: number;
}

function calculateNorm(p: Vector2D) {
  return Math.sqrt(p.x * p.x + p.y * p - y);
}

calculateNom({ x: 3, y: 4 });
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D); // 정상!!
```

_답_

```ts
상표 붙이기 (_brand)

interface Vector2D {
  _brand: '2d';
  x: number;
  y: number;
}
```

3. 이런 경우 상표를 붙여주세요.

```ts
type Meters = number;
type Seconds = number;
const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;
```

_답_

```ts
type Meters = number & { _brand: "meters" };
type Seconds = number & { _brand: "seconds" };
const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;
```
