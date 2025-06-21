1. 타입스크립트가 어플리케이션 성능에 영향을 주지 않는 이유를 설명해주세요.

답: 타입 연산은 런타임에 실행되지 않는다.

2. 다음 코드가 잘못된 이유를 설명하고, 해당 검증 함수를 개선해주세요.

```typescript
function asNumber(value: number | string) {
  return value as number;
}
```

답: 빌드된 함수는 아무런 검증이 없고 `value` 를 전달하기만 한다.

개선 예시:

```typescript
function asNumber(value: number | string) {
  return typeof value === "string" ? Number(value) : value;
}
```

3. 구조적 타이핑의 장점을 설명해주세요.

답: 속성의 구조만 맞다면 타입이 달라도 호환된다.
