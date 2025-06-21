## 1. dependencies, devDependencies, peerDependencies의 차이를 설명하세요.
- dependencies
  - 현재 프로젝트를 실행하는 데 필수적인 라이브러리
- devDependencies
  - 현재 프로젝트를 개발하고 테스트하는 데 사용되지만, 런타임에는 필요없는 라이브러리
- peerDependencies
  - 런타임에 필요하지만, 의존성을 직접 관리하지 않는 라이브러리

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

- 메서드를 객체에서 분리하여 호출하면, this는 호출한 객체를 잃고 기본적으로 undefined 또는 전역 객체를 가리킵니다.

```js
const method = c.logSquares;
method.call(c);
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

```
regular(); // undefined
arrow();   // Hello
```

- regularFunction은 일반 메서드로 정의되어, 일반 메서드를 변수에 할당한 후 호출하면 this 바인딩이 초기화됩니다. 따라서 regular() 호출 시 this는 전역객체 또는 undefined를 가리킵니다.
- arrowFunction 함수는 화살표 함수로 정의되어 있습니다. 화살표함수는 상위 스코프의 this를 상속 받아 this는 Example 인스턴스를 가리킵니다.

