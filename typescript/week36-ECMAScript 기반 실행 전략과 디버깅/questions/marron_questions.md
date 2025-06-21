# 아이템 7장

1. 오류의 원인을 설명해주세요. [1-2]

```ts
const obj = {
  one: "uno",
  two: "dos",
  three: "tres",
};

for (const k in obj) {
  const v = obj[k]; // error -> k의 타입이 string
  // obj에 인덱스 시그니처가 없기 때문에 엘리먼트는 암시적으로 'any' 타입입니다.
}
```

k의 타입은 string인 반면, obj객체에는 'one', 'two', 'three' 키만 존재합니다.
k와 obj 객체의 키 타입이 다르게 추론되어 오류가 발생한 것.

```

2. 위의 문제를 해결하기 위한 두가지 방법를 설명해주세요.

3. 자바스크립트에서 정보를 숨기기 위해 가장 효가적인 방법은 무엇인가요? 이 방법에 대해 설명해주세요.
```
