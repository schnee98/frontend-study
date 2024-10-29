# 아이템 38 - 44 (5장)

1. result 타입을 설명해주세요.

```ts
const result = [];
result.push("a");
result;
result.push(1);
result;
```

_답_

```ts
const result = []; // any[]
result.push("a");
result; // string[]
result.push(1);
result; // (string | number)[]
```

2.  {}, object, unknown의 차이점을 설명해주세요.

_답_

```
{}: null, undefined를 제외한 모든 값
object: 모든 비기본형 타입. 기본 원시타입은 안됨.
객체 형태의 값들만 허용. 객체와 배열은 포함됨
unknown: 모든 타입 가능
```

3. 내장 타입에 데이터를 저장해야하는 경우 어떤 방식을 사용하나요?

`몽키 패치 (Monkey Patch): 런타임에 기존 코드를 동적으로 변경하는 것`

_답_

```ts
// 보강, 사용자 정의 인터페이스로 단언

interface Document {
  monkey: string;
}
document.monkey = "Tamarin";

interface MonkeyDocument extends Document {
  monkey: string;
}
(document as MonkeyDocument).monkey = "Macaque";
```
