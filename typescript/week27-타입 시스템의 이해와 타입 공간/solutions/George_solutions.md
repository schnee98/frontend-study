## 1. keyof 연산자의 역할을 설명하세요.

- keyof는 객체 타입의 모든 키를 유니온 타입으로 추출합니다.
```ts
interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

## 2. 타입 공간과 값 공간에 대해 설명하세요.
- 타입 공간: 컴파일 시간에 존재하며 타입 정보를 다루는 영역
- 값 공간: 런타임에 실제로 존재하는 값들을 다루는 영역

## 3. typeof 연산자가 타입 공간과 값 공간에서 어떻게 다르게 동작하는지 설명하고, 아래 코드에서 T1, T2, v1, v2의 타입 또는 값을 서술하세요.

- 타입 공간: 값의 타입스크립트 타입을 반환
- 값 공간: 자바스크립트 런타임 타입을 문자열로 반환

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
type T1 = typeof p;  // Person
type T2 = typeof email;  // (p: Person, subject: string, body: string) => void

// 값 공간에서의 typeof 사용
const v1 = typeof p;  // "object"
const v2 = typeof email;  // "function"
```