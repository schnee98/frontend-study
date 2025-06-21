1. 함수의 시그니처를 작성할 때 매개변수와 반환 타입의 범위는 넓은 것이 좋다 (O, X)
2. API 작성 시에는 반환 타입을 어떻게 만드는 것이 좋은가요?
3. placeofBirth와 dateOfBirth는 둘 다 동시에 있거나 동시에 없습니다. 아래 코드를 더 나은 방향으로 수정해주세요.

```tsx
interface Person {
  name: string;
  placeOfBirth?: string;
  dateOfBirth?: Date;
}
```
