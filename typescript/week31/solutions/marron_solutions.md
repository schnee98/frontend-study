# 아이템 23 - 27

1. Promise와 async/awit의 차이에 대해 설명해주세요.

2. 다음과 같이 발생하는 오류를 해결하는 방법을 설명해주세요

```ts
type Language = "JavaScript" | "TypeScript" | "Python";
function setLanguage(language: Language) {
  /*...*/
}

setLanguage("Javascript");

let language = "JavaScript";
setLanguage(language); // "string" 형식의인수는 "Language" 형식의매개변수에할당될수없습니다.
```

_답_

```ts
타입 선언에서 가능한 값을 제한
let language: Langage = "JavaScript";

상수로 선언
const language = "JavaScript"
```

3. 다음과 같이 발생하는 오류를 해결하는 방법을 설명해주세요

```ts
function panTo(where: [number, number]) {
  /*...*/
}

panTo([10, 20]);

const loc = [10, 20];
panTo(loc); // "number []" 형식의인수는 "[number, number]" 형식의매개변수에할당될수없습니다.
```

_답_

```ts
function panTo(where: readonly [number, number]) {
  /*...*/
}
const loc = [10, 20] as const;
```
