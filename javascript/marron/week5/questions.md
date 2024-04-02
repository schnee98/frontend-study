## this

1. this 바인딩은 언제 결정되는지 설명하시오.


2. 디음 코드의 this는 어느 this를 가리키는지 설명하시오.

```js
let value = 1;
const obj = {
    value: 100,
    foo() {
        setTimeout(() => console.log(this.value), 100); // 여기 this
    },
};
```

3. 빈칸에 알맞은 말을 쓰시오. 

```
일반 함수 호출 시 this 바인딩은 전역 객체,
메서드 호출 시 this 바인딩은 ____ ___ 객체,
생성자 함수 호출 시 생성자 함수가 생성할 ____,
prototype.apply/call/bind 메서드에 의한 간접 호출 시 
메서드에 ___ 인수로 전달한 객체
```
