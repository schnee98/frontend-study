## 1. 태그된 유니온에 대해 설명하세요.
- 태그된 유니온은 타입스크립트에서 여러 타입을 하나로 묶되, 각 타입을 구분할 수 있는 '태그'를 포함하는 방식입니다
- 예:
```
type Circle = {
  kind: 'circle';  // 이것이 태그입니다
  radius: number;
};

type Rectangle = {
  kind: 'rectangle';  // 이것이 태그입니다
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {  // 태그를 사용해 타입을 구분합니다
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}
```

## 2. 변수명에 타입 정보를 넣는 것은 좋지 않습니다. 그러나 예외적인 경우가 있습니다. 어떤 경우인지 설명해주세요.
- 단위가 있는 숫자를 표현할 때 변수명에 단위 정보를 포함시키는 것이 예외적으로 허용됩니다. 예: timeMs (밀리초 단위의 시간), temperatureC (섭씨 온도)

## 3. `유니온의 인테페이스보다는 인터페이스의 유니온 사용하기` 원칙을 적용하여 다음 인터페이스를 리팩토링하세요.
```
interface Layer {
  type: 'fill' | 'line' | 'point';
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}
```

- 답:
```
interface FillLayer {
  type: 'fill';
  layout: FillLayout;
  paint: FillPaint;
}

interface LineLayer {
  type: 'line';
  layout: LineLayout;
  paint: LinePaint;
}

interface PointLayer {
  type: 'point';
  layout: PointLayout;
  paint: PointPaint;
}

type Layer = FillLayer | LineLayer | PointLayer;
```