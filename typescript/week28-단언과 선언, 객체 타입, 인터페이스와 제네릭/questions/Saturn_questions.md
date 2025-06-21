## 아이템 9: 타입 단언보다는 타입 선언을 사용하기

## 아이템 10: 객체 래퍼 타입 피하기

## 아이템 11: 잉여 속성 체크의 한계 인지하기

## 아이템 12: 함수 표현식에 타입 적용하기

## 아이템 13: 타입과 인터페이스의 차이점 알기

## 아이템 14: 타입 연산과 제너릭 사용으로 반복 줄이기

<br>

1. 타입 단언이 꼭 필요한 경우 한가지는 무엇인가요?
2. 아래 o1은 정상인가요 비정상인가요? 답에 대한 이유도 말해주세요.

```tsx
interface Options {
  title: string;
  darkMode?: boolean;
}

const o1: Options = document;
```

3. 아래 코드의 타입 반복을 제거해주세요.

```tsx
interface Person {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}
```
