1. 아래 코드에서 pharaoh의 타입은 어떻게 추론되나요?

```tsx
declare let hasDates: boolean;
const nameTitle = {name: 'Khufu', title: 'Pharaoh';
const pharaoh = {
	...nameTitle,
	...(hasDates ? {start: -235, end: -235} : {})
}
```

2. async 함수에서 Promise를 반환하면 해당 함수의 반환 타입은 Promise<Promise<T>>가 된다. (O, X)
3. 아래 코드의 해결방법 2가지를 설명해주세요.

```tsx
type Language = "JavaScript" | "TypeScript" | "Python";
function setLanguage(language: Language);

setLanguage("JavaScript"); //정상

let language = "JavaScript";
setLanguage(language); //비정상
```
