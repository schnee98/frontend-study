1. 1번과 2번 중 어떤 코드가 더 좋은 코드인가요? 이유도 설명해주세요.

```tsx
// ✅ 1번
function pluck<T>(records: T[], key: keyof T): T[keyof T][] {
  return records.map((r) => r[key]);
}

// ✅ 2번
function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key]);
}
```

2. 타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 한다. (O, X)
3. 아래 타입을 상표 기법으로 바꾸세요. (상표 이름은 ‘UserId’)

```tsx
type UserId = string ___________;

function createUserId(id: string): ________ {
  return __________;
}
```
