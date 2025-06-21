# 👨‍🏫 week 34 - A

## ▣ 5장 : any 다루기

### ▣ ㄴ 아이템 38 any 타입은 가능한 한 좁은 범위에서만 사용하기

### ▣ ㄴ 아이템 39 any를 구체적으로 변형해서 사용하기

### ▣ ㄴ 아이템 40 함수 안으로 타입 단언문 감추기

### ▣ ㄴ 아이템 41 any의 진화를 이해하기

### ▣ ㄴ 아이템 42 모르는 타입의 값에는 any 대신 unknown을 사용하기

### ▣ ㄴ 아이템 43 몽키 패치보다는 안전한 타입을 사용하기

### ▣ ㄴ 아이템 44 타입 커버리지를 추적하여 타입 안전성 유지하기

### 1️⃣ Q: **그냥 단언문을 안쓰고 왜 unknown을 거쳐서 이중 단언문(as unknown as T)을 사용하나요?**

```ts
function cacheLast<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;

    return function (...args: any[]) {
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    } as unknown as T; // 이중 타입 단언문 사용
}
```

`unknown`을 거치지 않고 바로 `as T`로 타입을 단언하면 TypeScript가 함수 타입에 대해 강제적으로 타입을 인정하지 않기 때문에 오류가 발생할 수 있습니다.

-   **`as unknown`**: 반환되는 함수를 `unknown`으로 캐스팅하여, TypeScript가 타입 검사를 하지 않도록 합니다. `unknown`은 모든 타입으로 안전하게 캐스팅할 수 있는 중립적인 타입입니다.
-   **`as T`**: 이후 `unknown`을 `T`로 다시 캐스팅하여, 반환된 함수가 `T` 타입이라고 보장합니다.

결론적으로 `as unknown as T`를 사용하면, 중간에 `unknown`을 거쳐 타입 검사를 우회하면서 안전하게 `T` 타입으로 동작할 수 있게 됩니다.

(p.210 예제 코드)

### 2️⃣ Q: **unknown은 모든 타입에게 할당 가능하다. o / x**

**X**  
 `unknown`은 모든 타입을 받을 수 있지만, 다른 타입에게 할당하려면 타입을 좁히는 검사가 필요합니다. 직접적으로 모든 타입에 할당할 수는 없습니다.

### 3️⃣ Q: **object, {}, 그리고 unknown 타입의 차이**

-   **`object`**: 객체, 배열, 함수와 같은 비기본형 타입만 허용합니다. 기본형 타입(`string`, `number`, `boolean` 등)은 허용하지 않습니다.
-   **`{}`**: `null`과 `undefined`를 제외한 모든 값을 허용합니다. 즉, 기본형 타입과 비기본형 타입 모두 사용할 수 있습니다.
-   **`unknown`**: 모든 타입의 값을 허용합니다. 하지만 타입을 좁히는 검사를 통해 사용해야 하며, 타입 안전성을 보장합니다.
