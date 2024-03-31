### 1. 함수 내부에서 외부 상태를 직접 참조하지 않더라도 매개변수를 통해 객체를 전달받으면 비순수 함수가 된다. 그 이유를 설명하고, 객체를 매개변수로 전달받더라도 순수함수가 될 수 있도록 하려면 어떻게 전달해야 할지 설명하세요.

### 2. 아래 코드에서 함수 선언문은 에러가 나지 않고, 함수 표현식은 에러가 나는 이유를 설명하세요.
```
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

console.dir(add(2, 5)); // 7
console.dir(sub(2, 5)); // TypeError: sub is not ad function

function add(x, y) {
    return x + y;
}

var sub = function (x, y) {
    return x - y;
}
```

### 3. 아래 코드와 같이 매개변수보다 인수가 더 많은 경우 초과된 인수는 어떻게 되는지 설명하세요.
```
function add(x, y) {
    console.log(arguments)
    return x + y
}

add(2, 5, 10)
```