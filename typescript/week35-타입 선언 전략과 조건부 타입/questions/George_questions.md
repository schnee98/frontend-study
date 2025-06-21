## 1. dependencies, devDependencies, peerDependencies를 설명해주세요.

## 2. 아래 코드를 실행하면 에러가 발생합니다. 그 이유를 설명하고, 리펙토링 해보세요.

```js
class C {
    vals = [1, 2, 3];

    logSquares() {
        for (const val of this.vals) {
            console.log(val * val);
        }
    }
}

const c = new C();
const method = c.logSquares;
method(); // TypeError: Cannot read properties of undefined (reading 'vals')
```

## 3. 아래 코드에서 regular()와 arrow() 호출 시 출력 결과를 예상하고 그 이유를 설명하세요.
```Js
class Example {
    constructor(value) {
        this.value = value;
    }

    regularFunction() {
        console.log('Regular:', this.value);
    }

    arrowFunction = () => {
        console.log('Arrow:', this.value);
    }
}

const example = new Example('Hello');
const regular = example.regularFunction;
const arrow = example.arrowFunction;

regular(); // 출력 결과는?
arrow();   // 출력 결과는?

```