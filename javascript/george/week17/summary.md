# 19.10 instanceof 연산자

- instanceof 연산자는 이항 연산자로 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다.
- 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고 그렇지 않으면 false로 평가 된다.

```
function Person(name) {
    this.name = name;
}

const me = new Person("lee")

console.log(me instanceof Person) // true
```

## me의 프로토타입을 교체하면 어떻게 될까?
```
function Person(name) {
    this.name = name;
}

const me = new Person("lee")

const parent = {}

Object.setPrototypeOf(me, parent) // me의 프로토타입 교체

console.log(me instanceof Person) // false
```


- me객체는 프로토타입이 교체되어 생성자 함수간의 연결이 파괴되었지만 Person 생성자 함수에 의해 생성된 인스턴스임이 틀림 없음에도 me instanceof Person는 false로 평가된다.
- 이는 Person.prototype이 me객체의 프로토타입 체인 상에 존재하지 않기 때문이다.
- parent 객체를 Person 생성자 함수의 Prototype 프로퍼티에 바인딩하면 me instanceof Person는 true로 평가된다.


```
function Person(name) {
    this.name = name;
}

const me = new Person("lee")

const parent = {}

Object.setPrototypeOf(me, parent)

Person.prototype = parent

console.log(me instanceof Person) // true
```

- instanceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 생성자 함수의 prototype에  바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.

## instanceof 연사자 구현
```
function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance)

    if(prototype === null) return false; // nul이면 프로토타입 체인의 종점에 다다른 것

    return prototype === constructor.prototype || isInstanceof(prototype, constructor)
}
```

# 19.11 직접 상속

## Object.create에 의한 직접 상속
- Object.create는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다.
- 첫 번째 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체
- 두번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달(두번째 인수는 옵션으로 생략 가능)
```
// obj > null
let obj = Object.create(null)
console.log(Object.getPrototypeOf(obj) === null)

// obj > Object.prototype > null
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype)

// obj > Object.prototype > null
obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true}
})
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype)

const myProto = {x: 10};
// obj > myProto > Object.prototype > null
obj = Object.create(myProto)
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto)

function Person(name) {
    this.name = name;
}
// obj > Person.prototype > Object.prototype > null
obj = Object.create(Person.prototype);
obj.name = 'Lee'
console.log(obj.name)
console.log(Object.getPrototypeOf(obj) === person.prototype)
```

### 직접 상속의 장점
1. new 연산자 없이도 객체를 생성할 수 있다.
2. 프로토타입을 지정하면서 객체를 생성할 수 있다.
3. 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.

## 객체 리터럴 내부에서 __proto__에 의한 직접 상속
- Object.create 메서드의 두번째 인자로 프로퍼티를 정의하는 것은 번거롭고 깔끔하지 못하다.
- ES6에서는 객체 리터럴 내부에서 __proto__접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.

```
const myProto = { x: 10 };

const obj = {
    y: 20,
    __proto__: myProto
}
// 위 코드는 아래와 동일
/*
const obj = Object.create(myProto, {
    y: {value: 20, writable: true, enumerable: true, configurable: true}
})
*/

console.log(obj.x, obj.y) // 10, 20
console.log(Object.getPrototypeOf(obj) === myProto) // true
```