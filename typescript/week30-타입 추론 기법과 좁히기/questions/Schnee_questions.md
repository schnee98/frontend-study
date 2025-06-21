1. 다음 코드를 보고 반환 값의 타입을 명시해야 하는 이유를 설명해주세요.

```typescript
interface Vector2D {
  x: number;
  y: number;
}

function add(a: Vector2D, b: Vector2D) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}
```

2. 어떤 변수를 `가려지는 (shadowed)` 변수라고 할까요?

3. `undefined` 와 `null` 타입을 필터하여 타입을 좁히는 유틸 함수 작성해주세요.

```typescript
const list = [
  "schnee",
  "marron",
  "mime",
  "george",
  "saturn",
  "woody",
  undefined,
  null,
];

const members = list.filter(isNotNullish);

function isNotNullish() {}
```
