# 1장

1. 런타임에 타입 정보를 유지하게 하기 위해 수정해주세요

```js
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea (shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape-width *shape.height;
  } else {
    return shape width * shape width;
  }
}
```

_답_

```js
function calculateArea (shape: Shape) {
  if ('height' in shape) {
    shape;
    return shape-width *shape.height;
  } else {
    shape;
    return shape width * shape width;
  }
}
```


2. 타입 오류가 있는 코드는 컴파일 가능한가요?

_답_

```
컴파일은 타입체크와 독립적으로 동작하기때문에 타입 오류가 있는 코드도 컴파일은 가능

컴파일은 코드 생성만을 말하며 작성한 ts가 유효한 js라면 컴파일은 가능하다.
코드가 오류가 있나면 타입체크에 문제가 있다라고 하는 것이 더 정확한 표현
```

3. 자바스크립트는 덕 타이핑 방식, 타입스크립트는 구조적 타이핑 방식을 사용합니다.
   차이에 대해 간결하게 설명해주세요.

_답_

```
덕 타이핑:
객체가 어떤 타입에 부합하는 변수와 메서드를 가질 경우 객체를 해당 타입에 속하는 것으로 간주하는 방식

"돼지코를 콘센트로 잘못 간주했다"

구조적 타이핑:
객체의 구조(즉, 속성과 메서드의 형태)에 따라 타입을 결정하는 방식입
타입스크립트에서는 객체의 속성과 메서드가 정의된 타입과 일치하는지 여부

```
