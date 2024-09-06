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

2. 타입 오류가 있는 코드는 컴파일 가능한가요?

3. 자바스크립트는 덕 타이핑 방식, 타입스크립트는 구조적 타이핑 방식을 사용합니다.
   차이에 대해 간결하게 설명해주세요.
