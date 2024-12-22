## 1. TypeScript에서 string 타입 대신 더 구체적인 타입을 사용해야 하는 이유를 설명해주세요.
- string 타입은 범위가 너무 넓어서 실수를 방지하기 어렵습니다.
- 예를 들어 status가 'active'나 'inactive'만 허용해야 하는데 string으로 선언하면 어떤 문자열도 할당 가능합니다.
- 구체적인 타입을 사용하면 IDE에서 가능한 값들을 자동으로 보여줄 수 있습니다.
- 구체적인 타입은 해당 필드가 어떤 값들을 가질 수 있는지 명확하게 보여줍니다.

## 2. API예시 데이터가 아닌 명세를 기반으로 타입을 만들어야하는 이유를 설명해주세요.
- 데이터에 드러나지 않는 예외적인 경우들이 문제가 될 수 있기 때문에 예시 데이터보다는 명세로부터 타입을 생성하는 것이 좋습니다.

## 3. any와 unknown의 차이점을 설명해주세요.
- any: 
  - 모든 타입 검사를 비활성화
  - 어디든 할당 가능

- unknown:
  - any 처럼 타입을 미리 알 수 없는 값이 있을 때 사용
  - 타입을 검사해 정체하기 전까지는 unknown 타입의 값을 사용할 수 없음

- 예시
```
// any - 어떤 메서드든 사용 가능
let anyValue: any = "hello";
anyValue.toUpperCase();  // OK

// unknown - 타입 체크 후에만 메서드 사용 가능
let unknownValue: unknown = "hello";
unknownValue.toUpperCase();  // 컴파일 에러
if (typeof unknownValue === "string") {
    unknownValue.toUpperCase();  // OK
}
```

- 타입을 알 수 없을 때는 any대신 unknown 사용 권장