# 👨‍🏫 week 27 - A

## ▣ 2장: 타입스크립트의 타입 시스템

## ▣ 아이템6: 편집기를 사용하여 타입 시스템 탐색하기

## ▣ 아이템7: 타입이 값들의 집합이라고 생각하기

## ▣ 아이템8: 타입 공간과 값 공간의 심벌 구분하기

### 1️⃣ Q. 아래의 코드에 Error는 왜 발생하고 어떻게 고치면 좋을까요?

```ts
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    if (typeof elOrId === "object") {
        return elOrId; // 🚨Error 1
    } else if (elOrId === null) {
        return document.body;
    } else {
        const el = document.getElementById(elOrId);
        return el; // 🚨Error 2
    }
}
```

🚨Error1은 자바스크립트에서 `typeof null` 은 `object` 이므로 분기문에서도 null일 수 있습니다.

🚨Error2는 `document.getElementById`가 null을 반환할 가능성이 있기 때문에 발생했습니다.

그러므로 둘다 null체크를 추가하고 예외를 던져야 합니다.

```ts
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    // 💡 1: 정확하게 HTMLElement인지 확인
    if (elOrId instanceof HTMLElement) {
        return elOrId;
    }
    if (elOrId === null) {
        return document.body;
    }

    // 💡 2: null을 반환할 경우에 대한 처리를 추가
    const el = document.getElementById(elOrId);
    if (el === null) {
        throw new Error(`Element with id "${elOrId}" not found.`);
    }

    return el;
}
```

<br/>

### 2️⃣ Q. `strictNullChecks` 옵션에 따라 코드의 동작이 어떻게 달라지나요?

`strictNullChecks`가  
**true**일 때는 null과 undefined가 각 타입에 자동으로 포함되지 않기 때문에, `명시적으로` null 또는 undefined를 허용하도록 `타입을 정의`해야 합니다.

반면에, **false**일 때는 `null과 undefined가 모든 타입에 암묵적으로 포함`되어, 타입 정의 없이도 어떤 값에나 할당될 수 있습니다.

-   예시 코드 >

```ts
let str: string; // strictNullChecks가 true인 경우
str = null; // Error: 'null'은 'string' 타입에 할당❌

let maybeStr: string | null; // 명시적으로 null을 포함한 타입 정의
maybeStr = null;

let anotherStr: string; // strictNullChecks가 false인 경우
anotherStr = null; // 'null'을 string에 할당 ✅
```

<br/>

### 3️⃣ Q. 아래의 타입을 맞춰보세요

```ts
interface Person {
    birth: Date;
    name: string;
    age: number;
}

interface Lifespan {
    birth: Date;
    death: Date;
}

type K2 = keyof (Person | Lifespan); // 🙋‍♀️❔ "birth" (교집합, 교집합 없으면 "never")
type K3 = keyof (Person & Lifespan); // 🙋‍♀️❔ "birth" | "name" | "age" | "death" (UNION type)

// 🙋‍♀️❔ a는 아래와 같이 선언하면 된다. ( o )
type K = Person | Lifespan; // Person, Lifespan 둘 중 하나의 속성만 충족해도 ok
const a: K = {
    birth: new Date(),
    name: "a",
    age: 12,
    death: new Date(),
};

// 🙋‍♀️❔ b는 아래와 같이 선언하면 된다. ( o )
type N = Person & Lifespan; // Person과 Lifespan의 모든 속성(name, age, birth, death)을 포함하는 객체
const b: N = {
    birth: new Date(),
    name: "a",
    age: 12,
    death: new Date(),
};
```
