## 15. 동적 데이터에 인덱스 시그니처 사용하기

## 16. number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기

## 17. 변경 관련된 오류 방지를 위해 readonly 사용하기

## 18. 매핑된 타입을 사용하여 값을 동기화하기

1. 아래 Bingsoo 타입을 인덱스 시그니처로 나타내주세요. (키의 이름은 attribute로)

```tsx
const myBingsoo: Bingsoo = {
  flavor: "strawberry",
  topping: "red bean",
  size: "extra large",
};
```

2. NodeList, arguments와 같은 객체를 일반화하여 다루고자 할때에는 ( ) 타입을 사용하는 것이 좋다.
3. 어떤 함수를 readonly로 만들면 발생하는 단점은 무엇인가요?
