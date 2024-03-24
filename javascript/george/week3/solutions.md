
## 1. 다음 bar함수가 클로저 아닌 이유를 설명하고 클로저가 되기 위한 조건을 설명하세요.
```
function foo() {
    const x = 1;
    const y = 2;
    function bar() {
        const z = 3;
        console.log(z);
    }
    return bar;
}
const bar = foo();
bar();
```
- bar 함수에서 상위 스코프의 식별자를 참조하고 있지 않기 때문에 클로저라 할 수 없다.
- 클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되어야한다.

## 2. num변수가 1씩 증가하는 기능을 클로저를 사용해 구현해보세요.
```
function foo() {
    let num = 0;
    return function bar() {
        num++
        console.log(num)
    }
}
const Foo = new foo()
Foo()
Foo()
```
## 3. 아래 예제는 0,1,2이 반환되지 않고 3이 3번 반환됩니다. 0,1,2이 순서대로 반환되지 않는 이유를 설명하고 아래 코드를 0,1,2이 반환되도록 리펙토링 해보세요.

```
var funcs = []
for(var i = 0; i < 3; i++) {
    funcs[i] = function () { return i;}
}
for (var j = 0; j < funcs.length; j++){
    console.log(funcs[j]())
}
```

- for 문의 변수 선언문에서 var 키워드로 선언한 i 변수는 블록 레벨 스코프가 아닌 함수 레벨 스코프를 갖기 때문에 전역 변수가 된다. 전역 변수 i에는 0,1,2가 순차적으로 할당된다. 따라서 func 배열의 요소로 추가한 함수를 호출하면 전역 변수 i를 참조하여 i의 값 3이 출력된다.

```
var funcs = []
for(let i = 0; i < 3; i++) {
    funcs[i] = function () { return i;}
}
for (let j = 0; j < funcs.length; j++){
    console.log(funcs[j]())
}
```

- let 키워드로 선언한 변수를 사용하면 for문의 코드 블록이 반복 실행될 때마다 for문 코드 블록의 새로운 렉시컬 환경이 생성된다. 이때 함수의 상위 스코프는 for 문의 블록이 반복 실행될 때마다 식별자의 값을 유지해야 한다. 이를 위해 for문이 반복될 때마다 독립적인 렉시컬 환경을 생성하여 식별자의 값을 유지한다.