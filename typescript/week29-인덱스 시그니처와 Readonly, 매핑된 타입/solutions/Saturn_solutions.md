1. 아래 Bingsoo 타입을 인덱스 시그니처로 나타내주세요. (키의 이름은 attribute로)

```tsx
type Bingsoo = { [attribute: string]: string };
```

2.  NodeList, arguments와 같은 객체를 일반화하여 다루고자 할때에는 ( ) 타입을 사용하는 것이 좋다.

    - ArrayLike
    - 다만 특정한 NodeList나 arguments에 대해서만 작업을 한다면 해당 타입(NodeListOf<T>, IArguments)을 그대로 사용하는 것이 좋음

3.  어떤 함수를 readonly로 만들면 발생하는 단점은 무엇인가요?

    - 그 함수를 호출하는 다른 함수도 모두 readonly로 만들어야 함.
    - 다른 라이브러리에 있는 함수를 호출하는 경우라면 타입 선언을 바꿀 수 없으므로 타입 단언문을 사용해야 함.
