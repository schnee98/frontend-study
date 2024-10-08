# 👨‍🏫 week 26 - A

## ▣ 1장 : 타입스크립트 알아보기

### 1️⃣ Q. 타입스크립트 컴파일러는 두 가지 역할을 수행합니다. 무엇인가요?

1. 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 **구버전의 자바스크립트로 트랜스파일합니다.**
2. 코드의 **타입 오류를 체크**합니다.

<i>트랜스파일 : 소스코드를 동일한 동작을 하는 다른형태의 소스코드(다른버전, 다른언어 등)로 변환하는 행위.<br/>
결과물이 여전히 컴파일되어야하는 소스코드이므로 컴파일과는 구분해서 부른다.</i>

<br/>

### 2️⃣ Q. 타입 오류가 있는 코드는 컴파일이 불가능하다.

❌

컴파일은 타입 체크와 독립적으로 동작하기 때문에, 타입 오류가 있는 코드도 컴파일이 가능합니다.
타입스크립트 오류는 경고와 비슷합니다. 문제가 될 만한 부분을 알려주지만, 그렇다고 빌드를 멈추지는 않습니다.

<br/>

### 3️⃣ Q. 런타임에는 타입 체크가 불가능합니다. 런타임에 타입을 지정하려면 어떻게 해야 할까요?

런타임에서는 타입스크립트의 타입이 제거되므로, 자바스크립트 자체에서 타입을 검사하거나 강제해야 합니다.  
이를 위해 보통 **런타임 타입 검사를 수행**합니다.

1. **`typeof` 연산자**: 기본 데이터 타입(숫자, 문자열, 불리언 등)을 확인할 수 있습니다.
    ```ts
    if (typeof value === "number") {
        console.log("This is a number");
    }
    ```
2. **`instanceof` 연산자**: 객체가 특정 클래스의 인스턴스인지 확인할 수 있습니다.

    ```ts
    if (value instanceof MyClass) {
        console.log("This is an instance of MyClass");
    }
    ```

3. **태그 기법 (Tagged Union)**: 타입을 명시적으로 구별할 수 있는 속성(태그)을 추가하는 방법입니다.
   이는 TypeScript에서 자주 사용하는 패턴으로, 유니언 타입에서 각 타입을 구별하기 위해 공통의 "태그" 속성을 사용합니다.

    ```ts
    type Circle = {
        kind: "circle";
        radius: number;
    };

    type Square = {
        kind: "square";
        sideLength: number;
    };

    type Shape = Circle | Square;

    function getArea(shape: Shape): number {
        if (shape.kind === "circle") {
            return Math.PI * shape.radius ** 2;
        } else {
            return shape.sideLength ** 2;
        }
    }
    ```

    `kind`는 실제 객체의 프로퍼티이기 때문에 자바스크립트로 변환된 후에도 존재하며, 이를 이용해 런타임에서 타입을 구분할 수 있습니다.

4. **타입을 클래스로 만들기**: 자바스크립트에서 클래스는 함수 기반으로 작동하며, 프로토타입(prototype) 체인을 통해 객체와 클래스 간의 관계가 유지됩니다. 이 관계 덕분에, 객체가 어떤 클래스의 인스턴스인지를 `instanceof` 연산자로 확인할 수 있습니다.

    ```ts
    class Circle {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }
    }

    const myCircle = new Circle(5);

    console.log(myCircle instanceof Circle); // true
    ```

여기서 `myCircle instanceof Circle`은 myCircle 객체의 프로토타입 체인을 따라가면서 Circle 클래스의 인스턴스인지 확인합니다.  
이는 런타임에 클래스 정보를 유지하기 때문에 가능한 것입니다.
