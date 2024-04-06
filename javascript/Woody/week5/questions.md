# 👩‍🏫 week 5 - Q

## ▣ 22장: this

### 1️⃣ Q. javaScript의 this란 무엇인가요?

### 2️⃣ Q. 각각의 this가 가리키는 건 무엇인가요?

```js
function square(number) {
  //일반 함수 내부
  console.log(this); // (1)
  return number * number;
}
```

```js
"use strict";
function square(number) {
  //일반 함수 내부
  console.log(this); // (2)
  return number * number;
}
```

```js
const person = {
  name: "Lee",
  getName() {
    console.log(this); // (3)

    function bar() {
      console.log(this); // (4)
    }
  },
};
```

### 3️⃣ Q. Function.prototype.apply, Function.prototype.call 메서드는 무엇이고 둘은 차이가 있나요?
