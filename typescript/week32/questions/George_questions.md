## 1. 태그된 유니온에 대해 설명하세요.

## 2. 변수명에 타입 정보를 넣는 것은 좋지 않습니다. 그러나 예외적인 경우가 있습니다. 어떤 경우인지 설명해주세요.

## 3. `유니온의 인테페이스보다는 인터페이스의 유니온 사용하기` 원칙을 적용하여 다음 인터페이스를 리팩토링하세요.
```
interface Layer {
  type: 'fill' | 'line' | 'point';
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}
```