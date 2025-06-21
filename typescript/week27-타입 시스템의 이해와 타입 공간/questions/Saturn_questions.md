## 편집기를 사용하여 타입 시스템 탐색하기

## 타입이 값들의 집합이라고 생각하기

## 타입 공간과 값 공간의 심벌 구분하기

<br>

1. 인터섹션 타입(&)과 유니언 타입(|)의 차이를 아래를 코드를 예시로 들어 설명해주세요.

   ```tsx
   type X = { name: string };
   type Y = { age: number };

   type XYIntersection = X & Y;

   type XYUnion = X | Y;
   ```

2. 상황에 따라 타입과 값 모두 가능한 예약어 두 가지는?
3. 아래 객체의 값을 리터럴로 고정시켜서 그 값을 변경할 수 없도록 코드를 변경하세요.
   ```tsx
   const obj = {
     HOME: "Home",
     LOGIN: "Loign",
   };
   ```
