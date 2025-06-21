1. 인터섹션 타입(&)과 유니언 타입(|)의 차이를 아래를 코드를 예시로 들어 설명해주세요.

   ```tsx
   type X = { name: string };
   type Y = { age: number };

   // Intersection (&): name과 age 둘 다 있어야 함
   type XYIntersection = X & Y;
   const intersectionExample: XYIntersection = { name: "Alice", age: 25 }; // 둘 다 있어야 함

   // Union (|): name 또는 age 중 하나만 있으면 됨
   type XYUnion = X | Y;
   const unionExample1: XYUnion = { name: "Bob" }; // name만 있어도 가능
   const unionExample2: XYUnion = { age: 30 }; // age만 있어도 가능
   const unionExample3: XYUnion = { name: "Charlie", age: 40 }; // 둘 다 있어도 가능
   ```

2. 상황에 따라 타입과 값 모두 가능한 예약어 두 가지는 무엇인가요?
   - class와 enum
3. 아래 객체의 값을 리터럴로 고정시켜서 그 값을 변경할 수 없도록 코드를 변경하세요.
   ```tsx
   const obj = {
     HOME: "Home",
     LOGIN: "Loign",
   } as const;
   ```
