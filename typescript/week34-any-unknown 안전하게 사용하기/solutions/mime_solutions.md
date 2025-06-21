1. 2번째 방법

- 이유 : f1에서는 함수의 마지막까지 x의 타입이 any고 f2에서는 processBar호출 이후 x가 그대로 Foo타입이다. f1의 반환타입을 사용하게 되면 타입체크가 되지 않는다.

2. 설명

> `{} (빈 객체 타입)`
>
> - null이나 undefined를 제외한 모든 값이 {}에 할당될 수 있습니다.
>
> ```
> let x: {} = 42; // 유효
> let y: {} = []; // 유효
> let z: {} = {}; // 유효
> let a: {} = null; // 오류 (null은 {}에 할당 불가)
> ```

> `object (객체 타입)`
>
> - 객체 형태의 값만 할당할 수 있습니다.
>
> ```
> let x: object = {}; // 유효
> let y: object = [1, 2, 3]; // 유효
> let z: object = () => {}; // 유효
> let a: object = 42; // 오류 (숫자는 객체가 아님)
> ```

> `unknown`
>
> - 아무 값이나 할당할 수 있지만, 구체적인 타입을 알기 전에는 그 값으로 무언가를 할 수 없습니다. 타입을 알기 전에는 타입 확인이 필요합니다.
>
> ```
> let x: unknown = 42; // 유효
> let y: unknown = "hello"; // 유효
>
> if (typeof x === "number") {
>  let z = x + 10; // 타입이 확인되었으므로 사용 가능
> }
>
> // 아래 코드는 타입 확인 없이 바로 접근하려 하므로 오류 발생
> let a = x + 10; // 오류
> ```

3. 동일한 이름의 인터페이스를 여러 번 선언하면 TypeScript가 이 선언들을 자동으로 병합하여 하나의 인터페이스로 처리하는 것.

```
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Alice',
  age: 30,
};
```

TypeScript는 두 선언을 병합하여 하나의 인터페이스로 처리합니다. 결과적으로 User는 name과 age 속성을 모두 갖는 하나의 인터페이스가 됩니다.
