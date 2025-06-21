1. 122p 참고

- 명시적 타입 구문 제공

```
const v : { x: 1|3|5 } = {
  x : 1
}; // 타입이 { x: 1|3|5 }
```

- 타입 체커에 추가적인 문맥 제공(ex. 함수의 매개변수로 값을 전달)
- const 단언문 사용

```
const v1 = {
  x:1,
  y:2
} // 타입 { x:number; y:number}

const v2 = {
  x:1 as const,
  y:2
} // 타입 { x:1; y:number}

const v3= {
  x:1,
  y:2
} as const // 타입 { readonly x:1; readonly y:2; }

```

2. 분기문(또는 사옹자 정의 타입 가드 = 분기문을 함수로 만드는 것)

3. 객체 리터럴, 함수 반환
