1. 특정 쿼리를 사용하는 컴포넌트가 언마운트 됐을 때, AbortController를 사용하거나 수동으로 취소해줘야 합니다. 왜 그럴까요?

답: 쿼리 function (Promise) 는 언마운트되거나 사용하지 않게 되더라도 자동으로 취소되지 않는다.

2. React Query에서 워터폴 현상을 피하는 패턴에는 어떤 것이 있는지 나열해주세요.

답:

- Single Component Waterfalls / Serial Queries
- Nested Component Waterfalls
- Code Splitting

3. Code Splitting의 장단점을 설명해주세요.

답:

- 장점: 코드를 더 작은 청크로 나누고 필요한 컴포넌트만 로딩할 수 있다.
- 단점: lazy import 등으로 인해 워터폴 현상이 생길 수 있다.
