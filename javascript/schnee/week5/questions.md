1. 함수를 호출할 때 매개변수 이외에 호출자가 함수에게 동적으로 전달하는 것들을 적어주세요.

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

3. `Function.prototype.apply`, `Function.prototype.call`, `Function.prototype.bind`의 차이점을 알려주세요.