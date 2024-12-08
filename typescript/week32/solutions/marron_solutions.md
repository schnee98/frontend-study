# 아이템 28 - 32

1. 값이 변경되지 않는 경우에는 주석을 다는 것이 좋은 방법입니다 (O,X)

2. 아래의 인터페이스를 유니온을 사용해서 다른 방식으로 표현해주세요.

```ts
interface Person {
  name: string;
  birth?: {
    place: string;
    date: Date;
  };
}
```

_답_

```ts
interface Name {
  name: string;
}

interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}

type Person = Name | PersonWithBirth;
```

3. 유니온의 인터페이스보다 인터페이스의 유니온을 사용해야하는 이유에 대해 설명해주세요.

_답_

```
유니온 타입의 속성을 여러 개 가지는 인터페이스에서는 속성 간의 관계가 분명하지 않기 때문에 실수가 자주 발생하므로 주의해야합니다.

유니온의 인터페이스보다 인터페이스의 유니온이 더 정확하고 타입스크립트가 이해하기도 좋습니다.

타입스크립트가 제어흐름을 분석할 수 있도록 타입에 태그를 넣는 것을 고려해야 합니다.
```
