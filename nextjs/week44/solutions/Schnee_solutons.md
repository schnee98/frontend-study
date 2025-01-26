1. 다음 옵션들의 역할을 간단히 설명해주세요.

- `experimental_ppr`
- `dynamic`
- `dynamicParams`
- `revalidate`
- `runtime`
- `preferredRegion`
- `maxDuration`

답:

- `experimental_ppr` : Partial Prerendering 을 사용할지 말지
- `dynamic` : 캐싱을 어떻게 할지
- `dynamicParams` : 동적 세그먼트가 생성되지 않았을 때 어떻게 할지
- `revalidate` : 캐시의 revalidation time
- `runtime` : 어떤 런타임 환경에서 사용할지 (nodejs or edge)
- `preferredRegion` : 어플리케이션이 어느 지역에서 실행할지
- `maxDuration` : 요청을 기다리는 최대 시간 (timeout)

2. `matcher` 미들웨어가 요청을 감지 및 필터링하는 네가지 방법을 설명해주세요.

답:

- `string`: 문자열 규칙과 요청 주소가 맞는지 확인
- `string[]`: 여러 개의 문자열 규칙과 요청 주소가 맞는지 확인
- 문자열로 저장된 정규 표현식 배열: 여러 개의 정규 표현식과 요청 주소가 맞는지 확인
-

```typescript
interface Matcher {
  source: string; // 정규표현식 or 문자열 규칙
  has?: {
    type: string;
    key: string;
    value?: string;
  }[]; // 요청이 특정 값을 포함하고 있는지
  missing?: {
    type: string;
    key: string;
    value?: string;
  }[]; // 요청이 특정 값을 가지고 있지 않는지
}
```

3. 로케일은 언어 및 형식 설정을 가리킵니다. 다음 로케일 값들의 차이를 알려주세요.

- nl-NL
- nl

답:

- nl-NL은 네덜란드에서 사용되는 네덜란드어, nl은 특정 지역이 지정되지 않은 네덜란드어.
- 형식은 `{언어}-{지역}` 으로 표기된다.
