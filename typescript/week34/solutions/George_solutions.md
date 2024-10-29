## 1. {}, object, unknown의 차이점을 설명하세요.
- {}:
  - null과 undefined를 제외한 모든 값을 할당 가능

- object:
  - 원시 타입을 제외한 객체, 배열, 함수만 할당 가능

- unknown:
  - 모든 타입의 값을 허용
  - 타입 안정성을 위해 사용할때 타입 검사가 필요

## 2. 아래코드에서 any를 사용하는 getLengthBad보다 any[]를 사용하는 getLength함수가 왜 더 좋은 함수인지 설명하세요.

```ts
function getLengthBad (array: any) {
    return array.length;
}

function getLength (array: any[]) {
    return array.length;
}
```

- 함수 내의 array.length 타입이 체크됩니다.
- 함수의 반환 타입이 any대신 number로 추론됩니다.
- 함수가 호출될 때 매개변수가 배열인지 체크됩니다.

## 3. 모르는 타입의 값에 any 대신 unknown을 사용해야하는 이유를 설명하세요.
- any는 모든 타입 체크를 무시하지만, unknown은 타입 체크를 강제해 타입의 안정성을 향상시킵니다.
- 타입 체크를 강제해 런타임 에러를 방지할 수 있습니다.