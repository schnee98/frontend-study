1. 타입 단언은 타입 선언보다 위험한 코드인 경우가 많습니다. 그러나 타입 단언이 쓰일 때가 더 좋을 때는 언제일까요?

2. 선언 병합 (declaration merging) 에 대해서 설명해주세요.

3. 다음 인터페이스를 제네릭을 사용하여 변경해주세요.

```typescript
interface UserInfo {
  userId: string;
  name: string;
  age: number;
  height: number;
  weight: number;
  favoriteColor: string;
}

function getUserInfo(userId: string): UserInfo {
  // ...
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  };
}
```
