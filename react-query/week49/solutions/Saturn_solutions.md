1. Infinite Query에서는 동시에 진행 중인 fetch가 하나만 있어야 하는데 이를 원활하게 보장하기 위한 방법을 설명하세요.

- isFetchingNextPage 상태를 확인하여 fetch 요청이 중복되지 않도록 함.
  - ex) `<List onEndReached={() => !isFetching && fetchNextPage()} />`

2. 쿼리 캐시가 사라지거나 오래된 데이터가 제거되면, useInfiniteQuery는 어떻게 작동하나요?

- 처음 페이지부터 다시 불러옴. 즉, 이전 페이지 데이터는 날아가고 처음 페이지부터 다시 요청해야 함.

3. initialData vs placeholderData 차이점은 무엇인가요?

- 캐시된 데이터를 즉시 보여주고 `isLoading: false` (로딩 없음). 이후 stale하면 새로 요청
- placeholderData는 가짜 데이터를 먼저 보여주지만, 여전히 `isLoading: true` 상태. API 요청이 완료되면 진짜 데이터로 변경됨
