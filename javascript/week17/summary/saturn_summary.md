## 6. 객체 생성 방식과 프로토타입의 결정

- 다양한 방식으로 생성된 모든 객체는 추상 연산 `OrdinaryObjectCreate` 에 의해 생성된다는 공통점
- `OrdinaryObjectCreate`는 자바스크립트 엔진이 새로운 객체를 생성할 때 사용하는 내부 메서드
- 자바스크립트 코드에서는 직접 호출할 수 없음

**[객체 생성 방식]**

1. `OrdinaryObjectCreate` 가 빈 객체를 생성
2. 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가함
3. 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Porototype]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환

### 1. 객체 리터럴에 의해 생성된 객체의 프로토타입

- 추상 연산 `OrdinaryObjectCreate` 에 전달되는 프로토타입은 `Object.prototype`

```jsx
const obj = { x: 1 };
```

- 위 객체 리터럴이 평가되면 추상 연산 `OrdinaryObjectCreate` 에 의해 Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결이 만들어짐
- `obj` 객체는 `Object.prototype`을 프로토타입으로 갖게 되고 상속받음
  → `constructor`, `hasOwnProperty` 메서드 등을 상속받아 사용할 수 있음

### 2. Object 생성자 함수에 의해 생성된 객체의 프로토타입

- 추상 연산 `OrdinaryObjectCreate` 에 전달되는 프로토타입은 `Object.prototype`

```jsx
const obj = new Object();
obj.x = 1;
```

- 객체 리터럴에 의해 생성된 객체와 동일한 구조
- 객체 리터럴과 `object` 생성자 함수에 의한 객체 생성 방식의 차이
  - 객체 리터럴은 객체 리터럴 내부에 프로퍼티를 추가
  - `Object` 생성자 함수 방식은 일단 빈 객체를 생성한 이후 프로퍼티 추가

### 3. 생성자 함수에 의해 생성된 객체의 프로토타입

- 추상 연산 `OrdinaryObjectCreate` 에 전달되는 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체

```jsx
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi~ My name is ${this.name}`);
};
```

- 생성자 함수와 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체와 생성된 객체 사이에 연결
- 사용자 정의 생성자 함수 `Person`과 `Person.prototype`의 프로퍼티는 constructor뿐
- `Person.porototype`에 프로퍼티를 추가해 하위 객체가 상속받게 할 수 있음

## 7. 프로토타입 체인

```jsx
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi~ My name is ${this.name}`);
};

const me = new Person("Lee");

//hasOwnProperty는 Object.prototype의 메서드
console.log(me.hasOwnProperty("name"));
```

- 위 예제를 보면 `me` 객체가 `Person.prototype` 뿐만 아니라 `Object.prototype`도 상속받았다는 것을 의미

```jsx
Object.getPrototypeOf(me) === Person.prototype; //true
Object.getPrototypeOf(Person.prototype) === Object.prototype; //true
```

- 자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 `[[Prototype]]` 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색 ⇒ 프로토타입 체인 (객체지향 상속을 구현하는 메커니즘)

**[검색 방법]**

```jsx
me.hasOwnProperty("name"); //true
```

1. hasOwnProperty 메서드를 호출한 me 객체에서 hasOwnProperty 메서드 검색. 해당 메서드가 없어서 [[prototype]] 내부 슬롯에 바인딩되어 있는 프로토타입(위 예제에서는 Person.prototype)으로 이동해서 해당 메서드 검색
2. Person.prototype에서 hasOwnProperty 메서드가 없으므로 프로토타입 체인을 따라 [[prototype]] 내부 슬롯에 바인딩되어 있는 프로토타입(위 예제에서는 Object.prototype)으로 이동해 해당 메서드를 검색
3. Object.prototype에는 hasOwnProperty 메서드가 존재하므로 자바스크립트 엔진은 Object.prototype.hasOwnProperty 메서드를 호출. Object.prototype.hasOwnProperty 메서드의 this에는 me 객체가 바인딩됨

- 프로토타입 체인의 최상위 객체는 언제나 `Object.prototype` ⇒ `Object.prototype`은 프로토타입 체인의 종점
- 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘
- 프로퍼티가 아닌 식별자는 스코프 체인에서 검색 → 스코프 체인은 식별자 검색을 위한 메커니즘
