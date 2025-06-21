## 1. keyof 연산자의 역할을 설명하세요.

## 2. 타입 공간과 값 공간에 대해 설명하세요.

## 3. typeof 연산자가 타입 공간과 값 공간에서 어떻게 다르게 동작하는지 설명하고, 아래 코드에서 T1, T2, v1, v2의 타입 또는 값을 서술하세요.

```ts
interface Person {
    name: string;
    age: number;
}

function email(p: Person, subject: string, body: string): void {
    console.log(`Sending email to ${p.name} about "${subject}": ${body}`);
}

const p: Person = {
    name: "John Doe",
    age: 30
};

// 타입 공간에서의 typeof 사용
type T1 = typeof p;  // ?
type T2 = typeof email;  // ?

// 값 공간에서의 typeof 사용
const v1 = typeof p;  // ?
const v2 = typeof email;  // ?
```
