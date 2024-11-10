1. dependencies와devDependencies, peerDependencies를 각각 설명하시오

2. 각각 num의 타입은?

```
function double1<T extends number | string>(x: T) :T;
function double1(x:any){
    return x+x
}
const num1 = double1(12); // num1의 타입

function double2<T extends number | string>(x: T) :T extends string ? string:number;
function double2(x:any){
    return x+x
}

const num2 = double2(12) // num2의 타입

```

3. 이하 이유를 설명하시오

```
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  delayedGreeting() {
    setTimeout(this.sayHello, 1000); // 여기서 this가 변경될 수 있음
  }

  delayedGreetingWithBind() {
    setTimeout(this.sayHello.bind(this), 1000); // this를 바인딩하여 유지
  }
}

const person = new Person("Alice");

person.sayHello(); // "Hello, my name is Alice"

// this가 undefined가 되어 오류 발생 가능
person.delayedGreeting();

// this를 바인딩하여 정상적으로 실행
person.delayedGreetingWithBind();
```
