1. 타입 단언은 타입 선언보다 위험한 코드인 경우가 많습니다. 그러나 타입 단언이 쓰일 때가 더 좋을 때는 언제일까요?

답: DOM이나 이벤트 같이 상호작용에 의해 동적으로 생성되는 값을 다뤄야할 때

2. 선언 병합 (declaration merging) 에 대해서 설명해주세요.

답: 인터페이스가 중복 선언하면 속성을 병합하어 사용할 수 있다.

3.  다음 인터페이스를 제네릭을 사용하여 변경해주세요.

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

답:

```typescript
type UserInfo = ReturnType<typeof getUserInfo>;

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
