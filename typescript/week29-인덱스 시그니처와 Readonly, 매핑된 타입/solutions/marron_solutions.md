## 동적 데이터에 인덱스 시그니처 사용하기

## number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기

## 변경 관련된 오류방지를 위해 readonly 사용하기

## 매핑된 타입을 사용하여 값을 동기화하기

1. 인덱스 시그니처의 단점 2가지를 설명해주세요

```ts
type rocket = {[property: string]: string};
const Rocket: rocket = {
  name: "rocketc 1";
  variant: "v1.0";
}
```

_답_

```
- name대신 Name으로 작성해도 유효합니다.
- 특정 키가 필요하지 않습니다.{}도 유효한 Rocket타입입니다.
- 키마다 다른타입을 가질 수 없습니다.
- name: 을 입력할때, 키는 무엇이든 가능하기 때문에 자동완성기능이 동작하지 않습니다.
```

2. 배열을 순회하는 방법에는 여러가지가 있습니다.
   for of, forEach, for(;;) 루프를 각각 어떤 경우에 사용하나요?

_답_

```
for of index 필요없고 value만 필요하다면
forEach index도 필요한 경우
for(;;) 루프 중간에 멈춰야할 때
```

3. const와 readonly의 차이를 설명해주세요
