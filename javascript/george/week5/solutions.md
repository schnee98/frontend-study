### 1. apply, call, bind에 대해 설명해주세요.
 - apply와 call은 this로 사용할 객체와 인수 리스트를 받아 함수를 호출한다.
   - this로 사용할 객체를 받는 방식은 같지만 인수 리스트를 받는 방식은 다르다
     - apply : 인수를 배열로 묶어 전달
     - call : 인수를 쉼표로 구분해 전달한다.
 - bind는 apply, call과 달리 함수를 호출하지 않는다. 첫 번째 인수로 전달한 값으로 this 바인딩이 교체된 함수를 새롭게 생성해 반환다.

### 2. this가 뭔지 설명하고, this 바인딩은 언제 결정되는지 설명하세요.
 - 자신이 속한 객체를 가리키는 식별자이며, 바인딩은 함수를 호출할때 호출 방식에 의해 동적으로 결정된다.

### 3. 아래 코드의 this는 window를 가리켜 ''이 반환됩니다. window를 가리키는 이유를 설명하고 "Lee"가 반환되게 리펙토링 해보세요.
 - 일반함수로 호출된 모든 함수(중첩함수, 콜백 함수)내부의 this에는 전역객체가 바인딩되게 때문이다.
```
const person = {
    name: "Lee",
    foo(callback) {
        setTimeout(callback, 100);
    }
}

person.foo(function() {
    console.log(`Hi! my name is ${this.name}.`);
})
```
