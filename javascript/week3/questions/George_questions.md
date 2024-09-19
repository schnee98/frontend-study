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

## 2. num변수가 1씩 증가하는 기능을 클로저를 사용해 구현해보세요.

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