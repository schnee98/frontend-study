# 👨‍🏫 week 36 - Q

## ▣ 7장: 코드를 작성하고 실행하기

### ▣ ㄴ 아이템 53: 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

### ▣ ㄴ 아이템 54: 객체를 순회하는 노하우

### ▣ ㄴ 아이템 55: DOM 계층 구조 이해하기

### ▣ ㄴ 아이템 56: 정보를 감추는 목적으로 private 사용하지 않기

### ▣ ㄴ 아이템 57: 소스맵을 사용하여 타입스크립트 디버깅하기

### 1️⃣ Q: 객체를 순회하는 for-in, for-of, Object.entries 에 대한 설명과 각 타입을 말해주세요.

```ts
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    console.log(key, obj[key]); // key의 타입
}

const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // value의 타입
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value); // key, value의 타입
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

### 3️⃣ Q: 타입스크립트에서 정보를 감추려면 private를 쓰면 왜 안되는지? 그럼 어떤 방법이 있는지?
