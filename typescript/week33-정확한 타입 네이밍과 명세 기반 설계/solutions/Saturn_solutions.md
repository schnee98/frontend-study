1. 1번과 2번 중 어떤 코드가 더 좋은 코드인가요? 이유도 설명해주세요.

   ```tsx
   // ✅ 1번
   function pluck<T>(records: T[], key: keyof T): T[keyof T][] {
     return records.map((r) => r[key]);
   }

   // ✅ 2번
   function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
     return records.map((r) => r[key]);
   }
   ```

   - 2번
   - keyof T는 모든 키의 값이 유니온 타입으로 처리되고, K extends keyof T 는 함수를 호출할 때마다 특정 키의 값 타입을 명확하게 반환하기 때문

   ```tsx
   // 예)

   type Person = {
     name: string;
     age: number;
   };

   const people: Person[] = [
     { name: "Alice", age: 25 },
     { name: "Bob", age: 30 },
   ];

   //1번 함수의 경우
   const result = pluck(people, "name"); // (string | number)[] 타입

   //2번 함수의 경우
   const names = pluck(people, "name"); // string[]
   const ages = pluck(people, "age"); // number[]
   ```

2. 타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 한다. (O, X)
   - O
3. 아래 타입을 상표 기법으로 바꾸세요. (상표 이름은 ‘UserId’)

   ```tsx
   type UserId = string & { _brand: "UserId" };

   function createUserId(id: string): UserId {
     return id as UserId;
   }
   ```
