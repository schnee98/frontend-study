# 아이템 33 - 37

1. any와 unknown의 차이를 설명해주세요.
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

3. 이런 경우 상표를 붙여주세요.

```ts
type Meters = number;
type Seconds = number;
const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;
```
