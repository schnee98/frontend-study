# 👨‍🏫 week 36 - A

## ▣ 7장: 코드를 작성하고 실행하기

### ▣ ㄴ 아이템 53: 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

### ▣ ㄴ 아이템 54: 객체를 순회하는 노하우

### ▣ ㄴ 아이템 55: DOM 계층 구조 이해하기

### ▣ ㄴ 아이템 56: 정보를 감추는 목적으로 private 사용하지 않기

### ▣ ㄴ 아이템 57: 소스맵을 사용하여 타입스크립트 디버깅하기

### 1️⃣ Q: 객체를 순회하는 for-in, for-of, Object.entries 에 대한 설명과 각 타입을 말해주세요.

```ts
const obj = { a: 1, b: 2, c: 3 };

// 1. 객체의 키를 순회하려면 for-in
for (const key in obj) {
    console.log(key, obj[key]);
    // key는 항상 string 타입
}

// 2. 이터러블의 값을 순회하려면 for-of
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
    // value는 배열의 요소 타입 (number)
}

// 3. 키와 값을 모두 순회하려면 Object.entries
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
    // key는 string 타입, value는 기본적으로 any 타입
}
```

### 2️⃣ Q: `k`의 타입이 `'one' | 'two' | 'three'`가 아니라 `string`으로 추론되는 이유는?

```tsx
const obj = {
    one: "uno",
    two: "dos",
    three: "tres",
};
for (const k in obj) {
    const v = obj[k];
}
```

1. **JavaScript 객체의 키는 항상 문자열**로 처리되므로, 숫자 키도 문자열로 변환됩니다.
2. **for-in은 런타임에서 객체의 모든 열거 가능한 키를 순회**합니다.
3. **TypeScript는 키가 런타임에서 확장될 가능성**을 고려하여 string 타입으로 추론합니다.

### 3️⃣ Q: 타입스크립트에서 정보를 감추려면 private를 쓰면 왜 안되는지? 그럼 어떤 방법이 있는지?

TypeScript의 private는 타입 시스템에서만 강제되고, 런타임(JavaScript)에서는 아무런 소용이 없습니다.
컴파일된 JavaScript 코드에서 private는 여전히 일반 프로퍼티로 남아 있어 외부에서 접근할 수 있기 때문입니다.

-   클로저(Closure):
    데이터를 생성자 내부의 변수로 숨겨 외부에서 접근할 수 없도록 합니다.
    데이터를 외부에서 완전히 숨길 수 있지만, 메모리 사용량이 증가할 수 있습니다.

-   #private 필드(ES2022+):
    '#' 접두사를 사용하여 완전한 비공개 필드를 생성합니다.  
    런타임에서도 데이터 보호가 가능합니다.
    간결하며 메모리 효율이 높지만, 최신 브라우저 환경에서만 사용할 수 있습니다.
