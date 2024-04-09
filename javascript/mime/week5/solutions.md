## 정답

1.  Hi my name is .
    KANG

첫번째 줄은 콜백함수가 일반함수로서 호출이 되면 전역객체(window)를 가리킨다
window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이기 때문

두번째 줄은 메서드로 호출이 되었기 때문에(Person의 프로퍼티 값으로 호출) foo 함수 내부에서는 메서드를 호출한 객체를 가리킨다.

**빌트인 프로퍼티 : JavaScript 언어 자체에 내장되어 있는 프로퍼티**
일반적으로 빌트인 프로퍼티는 내장 객체(예: Object, Array, Function 등)의 프로토타입에 속합니다

2. 정답!

```
const Person = {
    name:"KANG",
    foo(cb){
        cb.bind(this)();
    }
}

Person.foo(function(){
    console.log(`Hi my name is ${this.name}.`)
})
```

