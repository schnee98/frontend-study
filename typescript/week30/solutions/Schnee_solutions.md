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

답:

- 반환 타입을 정의하지 않으면 사용자에게 혼돈을 줄 수 있다.
- 위 코드에서는 입력된 타입과 반환되는 타입이 같은데, 다른 타입으로 오해할 수 있다.

2. 어떤 변수를 `가려지는 (shadowed)` 변수라고 할까요?

답: 스코프는 다른데 이름이 같은 변수

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

답:

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

function isNotNullish<T>(value?: T | null): value is T {
  return value != null;
}
```
