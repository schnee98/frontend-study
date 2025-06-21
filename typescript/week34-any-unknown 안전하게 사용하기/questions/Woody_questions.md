# 👨‍🏫 week 34 - Q

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

### 2️⃣ Q: **unknown은 모든 타입에게 할당 가능하다. o / x**

### 3️⃣ Q: **object, {}, 그리고 unknown 타입의 차이**
