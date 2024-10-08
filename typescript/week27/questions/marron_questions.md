## 편집기를 사용하여 타입 시스템 탐색하기

## 타입이 값들의 집합이라고 생각하기

## 타입 공간과 값 공간의 심벌 구분하기

1. 아래의 본문을 보고 & 연산자에 대해 설명해주세요.

```js
interface Person {
  name: string;
}
interface MarronLifespan {
  name: string;
  birth: Date;
  death?: Date;
}

type MarronSpan = Person & MarronLifespan;
```

2. 오류를 해결해주세요

```js
function email({
  person: Person,
  // 바인딩요소 "Person"에암시적으로' any' 형식이있습니다.
  subject: string,
  // 'string'식별자가중복되었습니다.
  // 바인딩요소 'string'에암시적으로'any' 형식이있습니다.
}) {
  /* ... */
}
```

3. ts에서 \_**\_, \_\_** 은 타입과 값 두 가지로 사용될 수 있습니다.
