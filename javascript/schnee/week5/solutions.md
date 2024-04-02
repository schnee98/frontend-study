1. 함수를 호출할 때 매개변수 이외에 호출자가 함수에게 동적으로 전달하는 것들을 적어주세요.

답: arguments, this

2. a.js 라는 파일안에 다음 코드가 작성된 상태에서 브라우저에서 a.js를 열려고 할때의 console의 결과를 적어주세요.

```
const person = {
  name: "lee",
  getName() {
    return this.name;
  }
}

const anotherPerson = {
  name: "kim"
}

anotherPerson.getName = person.getName;
console.log(anotherPerson.getName());

const getName = person.getName;
console.log(getName());
```

답:
- kim
- TypeError: cannot read properties of undefined
- 이유: 모듈에서의 this는 undefined로 처리된다.

3. `Function.prototype.apply`, `Function.prototype.call`, `Function.prototype.bind`의 차이점을 알려주세요.

답:
1. `apply`는 첫번째 매개변수로 `this`와 두번째 매개변수로 `arguments`를 배열안에 담아 전달하고 호출한다.
2. `call`은 첫번째 매개변수로 `this`와 그 다음 순서의 매개변수들을 모두 `arguments`로서 전달하고 호출한다.
3. `bind`는 `this`를 전달하고 `this` 바인딩이 완료된 함수를 반환한다.