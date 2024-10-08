## 1. 아래 키워드들과 관련하여 타입과 인터페이스의 차이점을 설명하세요.
- 유니온 타입
- 튜플 타입
- 선언 병합
- 확장
- 복잡한 타입 연산

## 2. Pick에 대해 설명하고, 아래 UserBasicInfo의 타입이 어떻게 정의되는지 설명하세요.

```
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
}

type UserBasicInfo = Pick<User, 'name' | 'email' | 'age'>;
```

## 3. Partial에 대해 설명하고, 아래 PartialUser의 타입이 어떻게 정의되는지 설명하세요.

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
```