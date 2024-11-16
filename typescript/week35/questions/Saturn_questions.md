1. 타입스크립트를 devDependencies에 포함시켜야 하는 이유
2. 아래 코드를 string을 매개변수로 받으면 string을 반환하고, number를 매개변수로 받으면 number를 반환하는 타입을 가지는 함수로 작성하세요. (조건부 타입 사용)

   ```tsx
   function double<T extends number | string>(
     x: T
   ): ___________________________;
   ```

3. 아래 코드를 올바르게 바꾸는 방법 2가지를 설명하세요.

   ```tsx
   class ResetButton {
     render() {
       return makeButton({ text: "Reset", onClick: this.onClick });
     }
     onClick() {
       alert(`Reset ${this}`);
     }
   }
   ```
