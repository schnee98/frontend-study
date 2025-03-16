1. Network Mode: offlineFirst는 언제 유용하게 사용할 수 있나요?

- 오프라인에서도 캐시된 데이터를 먼저 보여주고, 필요 시 네트워크 요청을 수행할 때 유용 (offline-first PWA나 Cache-Control header)

2. 정적 쿼리일 때 동적 쿼리일 때 사용하는 훅을 각각 말해주세요.

- 정적 쿼리: useQuery, useInfiniteQuery
- 동적 쿼리: useQueries

3. isFetching은 무엇인가요? 초기 로딩 시 isFetching의 값은 어떤 상태일까요?

- 쿼리가 백그라운드에서 다시 fetching 중인지 표시하는 boolean값을 제공함
- 초기 로딩 시와 백그라운드 재요청 시 모두 isFetching이 true
