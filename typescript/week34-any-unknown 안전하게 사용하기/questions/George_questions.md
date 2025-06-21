## 1. {}, object, unknown의 차이점을 설명하세요.

## 2. 아래코드에서 any를 사용하는 getLengthBad보다 any[]를 사용하는 getLength함수가 왜 더 좋은 함수인지 설명하세요.

```ts
function getLengthBad (array: any) {
    return array.length;
}

function getLength (array: any[]) {
    return array.length;
}
```

## 3. 모르는 타입의 값에 any 대신 unknown을 사용해야하는 이유를 설명하세요.