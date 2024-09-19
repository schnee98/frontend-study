1. 타입 단언이 꼭 필요한 경우 한가지는 무엇인가요?’
   - DOM 엘리먼트
2. 아래 o1은 정상인가요 비정상인가요? 답에 대한 이유도 말해주세요.
   - 정상
   - 이유는 document는 title 속성을 가지고 있기 때문이다. 타입스크립트에서는 구조적 타입 시스템을 사용하기 때문에 객체 타입이 정확히 일치하지 않더라도 해당 객체 필요한 속성들이 존재하면 그 타입에 맞는 것으로 간주한다.
3. 아래 코드의 타입 반복을 제거해주세요.

   ```tsx
   interface Person {
     firstName: string;
     lastName: string;
   }

   interface PersonWithBirthDate extends Person {
     birth: Date;
   }
   ```
