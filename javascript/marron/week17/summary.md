# 19장 프로토타입 - 12, 13, 14

## .12 정적 프로퍼티/메서드

정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출이 가능함

```js
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 정적 프로퍼티
Person.staticProp = "static prop";

// 정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};

const marron = new Person("marron");

Person.staticMethod(); // staticMethod

marron.staticMethod(); // TypeError: marron.staticMethod is not a function
```

Person 생성자 함수는 객체. 자신의 프로퍼티/메서드 소유 가능

-> 이렇게 소유한 프로퍼티/메서드를 정적 프로퍼티/메서드라고 한다.

정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출 불가

-> 인스턴스 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스에 접근 불가

## .13 프로퍼티 존재 확인

```js
const person = {
  name: "Lee",
  address: "Seoul",
};

// key in object
// Reflect.has (in이랑 똑같다)

console.log("name" in person); // true
console.log("age" in person); // false
console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

// hasOwnProperty

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false

// 객체 고유의 프로퍼티인 경우에만 true를 반환. 상속 받은 경우 false.
console.log(person.hasOwnProperty("toString")); // false
```

## .14 프로퍼티 열거

for...in문은 객체 자신의 고유 프로퍼티 뿐만 아니라 상속받은 프로퍼티도 열거한다.

모든 프로퍼티를 순회 열거하려면 사용.

- 프로퍼티 중 Enumerable 값 false인 경우 열거 불가능

- 키가 심벌인 경우도 열거 불가능

이런 경우엔 for...in문 대신 Objects.keys/values/entries 메서드 사용을 권장

-> 객체 자신의 열거 가능한 프로퍼티 값(키를/값을/키와 값의 쌍을)을 배열로 반환한다.

```js
const person = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

console.log(Object.keys(person)); // ["name", "address"]
console.log(Object.values(person)); // ["Lee", "Seoul"]
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]
```
