1. offlineFirst 네트워크 모드는 어떤 장점이 있나요?

답:

- 첫 요청을 오프리안 저장소나 캐시에서 하기 때문에 첫 페이지 로딩이 빨라진다.

2. 쿼리의 수가 렌더링마다 변경되는 경우, `useQuery` 를 사용할 수 없는 이유를 말해주세요.

답:

- 훅의 규칙을 위반한다. [링크](https://ko.react.dev/reference/rules/rules-of-hooks)

3. `useIsFetching` 훅의 잠재적인 단점을 설명해주세요.

답:

- 쿼리가 많을 때는 사용자 경험을 떨어트릴 수 있다.
