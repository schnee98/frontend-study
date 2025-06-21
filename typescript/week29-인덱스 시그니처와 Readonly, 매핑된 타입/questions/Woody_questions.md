# 👨‍🏫 week 29 - Q

## ▣ 2장 : 타입스크립트의 타입 시스템

### ▣ ㄴ 아이템15 : 동적 데이터에 인덱스 시그니처 사용하기

### ▣ ㄴ 아이템16 : number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기

### ▣ ㄴ 아이템17 : 변경 관련된 오류 방지를 위해 readonly 사용하기

### ▣ ㄴ 아이템18 : 매핑된 타입을 사용하여 값을 동기화하기

---

### 1️⃣ Q. 다음 코드 중 올바르지 않은 인덱스 시그니처 또는 Record 타입의 사용을 고르세요. 그리고 그 이유를 설명해주세요.

```ts
// A. 인덱스 시그니처를 사용한 타입
type RocketA = {
    [key: string | number]: string;
};

// B. Record 타입에서 키의 유니온 타입 사용
type RocketB = Record<string | number, string>;

// C. Record 타입에서 미리 정의된 키만 사용
type RocketC = Record<"name" | "variant" | "thrust", string>;
```

<br/>

### 2️⃣ Q. 다음 중 잘못된 설명을 고르세요. 그리고 그 이유를 설명하세요.

**1. 숫자 키는 자바스크립트에서 문자열로 변환되어 사용됩니다.**

**2. 타입스크립트는 숫자 키와 문자열 키를 다르게 타입 체크할 수 있습니다.**

**3. `for in`을 사용할 때 배열의 키는 숫자로 처리됩니다.**

**4. `ArrayLike` 타입은 배열과 유사하지만 `push`와 `concat` 메서드를 포함하지 않습니다.**

<br/>

### 3️⃣ Q. `readonly number[]`는 `number[]`의 서브타입이다 (O / X), 그 이유는 무엇인가요? ("keyword: 할당 가능성")
