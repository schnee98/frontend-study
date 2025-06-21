# 👨‍🏫 week 27 - Q

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

<br/>

### 2️⃣ Q. `strictNullChecks` 옵션에 따라 코드의 동작이 어떻게 달라지나요?

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

type K2 = keyof (Person | Lifespan); // 🙋‍♀️❔
type K3 = keyof (Person & Lifespan); // 🙋‍♀️❔

// 🙋‍♀️❔ a는 아래와 같이 선언하면 된다. ( o / x )
type K = Person | Lifespan;
const a: K = {
    birth: new Date(),
    name: "a",
    age: 12,
    death: new Date(),
};

// 🙋‍♀️❔ b는 아래와 같이 선언하면 된다. ( o / x )
type N = Person & Lifespan;
const b: N = {
    birth: new Date(),
    name: "a",
    age: 12,
    death: new Date(),
};
```
