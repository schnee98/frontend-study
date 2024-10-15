# 👨‍🏫 week 31 - A

## ▣ 3장 : 타입 추론

### ▣ ㄴ 아이템23 : 한꺼번에 객체 생성하기

### ▣ ㄴ 아이템24 : 일관성 있는 별칭 사용하기

### ▣ ㄴ 아이템25 : 비동기 코드에는 콜백 대신 async 함수 사용하기

### ▣ ㄴ 아이템26 : 타입 추론에 문맥이 어떻게 사용되는지 이해하기

### ▣ ㄴ 아이템27 : 함수형 기법과 라이브러리로 타입 흐름 유지하기

---

### 1️⃣ Q. 객체를 한꺼번에 생성하는 것이 단계별로 생성하는 것보다 타입 안정성에 어떤 이점을 제공하는지 설명하세요.

-   **한꺼번에 객체를 생성**하면, 타입스크립트가 객체의 전체 타입을 명확히 추론할 수 있습니다.  
    모든 속성을 한 번에 정의하면 누락되거나 잘못된 타입 정의를 방지할 수 있으며, 코드의 **타입 안전성**을 높입니다.

-   **단계별로 객체를 생성**하는 경우, 객체에 속성을 추가할 때 타입 오류가 발생할 가능성이 커집니다.  
    이는 코드가 복잡해질수록 더 문제를 일으킬 수 있으며, 타입스크립트의 자동 타입 추론을 제한할 수 있습니다.

    **예시:**

    ```ts
    type User = { name: string; age: number };

    let user = {} as User; // 단계별로 객체를 생성하면 타입 안전성이 낮음
    user.name = "John";
    user.age = 30; // 오류가 발생할 수 있음

    let user2: User = { name: "John", age: 30 }; // 한꺼번에 생성하면 안전함
    ```

### 2️⃣ Q. 다음 타입스크립트 코드에서 문맥적 타입 추론의 에러 원인과 해결방안은?

타입스크립트는 변수를 선언할 때 해당 값에 따라 타입을 추론합니다.  
하지만 **문맥적 타입 추론**을 통해, 함수나 다른 코드 구조 내에서 문맥을 기반으로 타입을 추론할 수 있습니다.

#### 인라인 형태 예시:

    ```ts
    type Language = "JS" | "TS" | "PY";
    function setLanguage(language: Language) {
        /* ... */
    }

    setLanguage("JS"); // 정상 작동
    let language = "JS";
    setLanguage(language); // Type Error 발생
    ```

**원인:**

-   `let language = 'JS';` 선언 시, 타입스크립트는 `language` 변수를 리터럴 타입 `'JS'`가 아닌 **일반 `string` 타입**으로 추론합니다.  
    이는 `setLanguage` 함수에서 요구하는 `'JS' | 'TS' | 'PY'` 리터럴 타입과 호환되지 않으므로 타입 오류가 발생합니다.

**해결 방법:**

```ts
let language: Language = "JS"; // 리터럴 타입으로 지정
setLanguage(language); // 정상 작동
```

또는, `const`로 선언하여 **리터럴 타입**을 유지할 수 있습니다:

```ts
const language = "JS"; // 리터럴 타입으로 추론
setLanguage(language); // 정상 작동
```

### 5️⃣ Q. 객체와 배열에서 `as const`의 차이점은 무엇인가?

```ts
const ts = {
    language: "TS",
    organization: "MS",
} as const;

const loc = [10, 20] as const;
```

**객체의 경우:**

-   `as const`는 <b>각 속성에 `readonly`</b>를 적용하여 속성 값을 변경할 수 없도록 만듭니다. 각 속성의 타입은 **리터럴 타입**으로 고정됩니다.

    ```ts
    const ts: {
        readonly language: "TS";
        readonly organization: "MS";
    };
    // ts 객체의 language와 organization 속성은 이제 'TS'와 'MS'로 고정된 리터럴 타입이며, 변경 불가능합니다.
    ```

**배열의 경우:**

-   `as const`는 <b>배열 전체에 `readonly`</b>를 적용하여 배열의 구조 변경을 막습니다. 배열의 개별 요소는 `readonly`가 붙지 않지만, 배열 자체는 불변으로 취급됩니다.

    ```ts
    const loc: readonly [10, 20];
    // loc 배열은 이제 읽기 전용 배열이며, 요소를 추가, 삭제하거나 순서를 변경할 수 없습니다.
    ```

**차이의 이유:**

-   <b>객체</b>는 <b>키-값 구조</b>이므로, 각 속성에 대해 `readonly`가 적용됩니다.
-   <b>배열</b>은 <b>인덱스 기반 자료구조</b>로, 배열의 전체 구조를 보호하는 것이 자연스럽습니다. 따라서 배열 전체에 `readonly`가 적용됩니다.
