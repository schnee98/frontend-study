# 👩‍🏫 week 5 - A

## ▣ 22장: this

### 1️⃣ Q. javaScript의 this란 무엇인가요?

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조 할 수 있는데,
함수가 호출되는 방식에 의해 동적으로 결정(this에 바인딩)합니다.

<i>바인딩이란 식별자와 값을 연결하는 과정을 의미.  
ex. 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것</i>

### 2️⃣ Q. 각각의 this가 가리키는 건 무엇인가요?

```js
function square(number) {
  //일반 함수 내부
  console.log(this); // (1) : window
  return number * number;
}
```

```js
"use strict";
function square(number) {
  //일반 함수 내부
  console.log(this); // (2) undefined
  return number * number;
}
```

```js
const person = {
  name: "Lee",
  getName() {
    console.log(this); // (3) {name:"Lee", getName:f}

    function bar() {
      console.log(this); // (4) window
    }
  },
};
```

(2)  
strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.  
일반 함수 내부에서 this 를 사용할 필요가 없기 때문이다.

(3)  
메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.

(1),(4)  
메서드 내에서 정의한 중첩함수도 일반 함수로 호출된다면 전역객체가 바인딩 된다.  
콜백함수도 마찬가지도 일반함수로 호출되면 콜백함수내부의 this에도 전역 객체가 바인딩 된다.

### 3️⃣ Q. `Function.prototype.apply`, `Function.prototype.call` 메서드는 무엇이고 둘은 차이가 있나요?

두 메서드의 본질적인 기능은 this를 바인딩하고 그 함수를 <b>호출</b>하는 것입니다.

- `Function.prototype.call` :  
  call 메서드는 인자를 쉼표로 구분하여 개별적으로 전달합니다.  
  첫 번째 인자는 this로 사용될 값이고, 그 이후의 인자들은 호출할 함수에 전달됩니다

  ```js
  function greet(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
  }

  greet.call(this, "Jane", "Doe"); // Hello, my name is Jane Doe.
  ```

  또한, ES6부터는 스프레드 연산자 ...를 사용하여 배열 형태의 인자를 call 메서드에 전달할 수도 있게 되어, apply의 인자 전달 방식과 유사한 효과를 call을 사용하여 얻을 수 있습니다.

  ```js
  const args = ["Jane", "Doe"];
  greet.call(this, ...args); // Hello, my name is Jane Doe. - `apply`와 유사하게 동작
  ```

- `Function.prototype.apply` :  
  apply 메서드는 인자를 배열의 형태로 전달합니다.  
  첫 번째 인자는 여기서도 this로 사용될 값이고, 두 번째 인자는 함수에 전달될 인자들의 배열입니다.

  ```js
  function greet(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
  }

  greet.apply(this, ["Jane", "Doe"]); // Hello, my name is Jane Doe.
  ```

간단하게 정리하자면, call은 인자를 개별적으로, apply는 인자를 배열로 받습니다. 선택은 주로 전달해야 할 인자의 형태에 따라 결정됩니다.
