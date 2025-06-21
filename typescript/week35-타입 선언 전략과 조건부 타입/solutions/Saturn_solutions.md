1. 타입스크립트를 devDependencies에 포함시켜야 하는 이유
   - 타입스크립트는 개발 도구일 뿐 타입 정보는 런타임에 존재하지 않기 때문에
2. 아래 코드를 string을 매개변수로 받으면 string을 반환하고, number를 매개변수로 받으면 number를 반환하는 타입을 가지는 함수로 작성하세요.

   ```tsx
   function double<T extends number | string>(
     x: T
   ): T extends string ? string : number;
   ```

3. onClick 함수를 화살표 함수로 바꾸거나, bind함수(`onClick: this.onClick.bind(this)` )를 이용해 this를 올바르게 바인딩한다.
