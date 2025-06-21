# 👨‍🏫 week 49 - A

## Infinite Queries, Initial Query Data

### 1️⃣ Q. 진행중인 fetch가 있는 상태에서 fetchNextPage(해당 함수를 호출하면 추가 데이터를 로드)를 호출하면 어떤 위험이 있나요? 안전한 접근 방식은 무엇일까요?

백그라운드에서 일어나는 데이터 새로고침을 덮어쓸 위험이 있습니다.

그래서 일반적으로 `isFetching` 상태를 확인하여 페치 중이 아닐 때만 `fetchNextPage`를 호출하는 것이 안전한 접근 방식입니다.

```jsx
<List onEndReached={() => !isFetching && fetchNextPage()} />
```

  <br/>

### 2️⃣ Q. 대용량 데이터를 Infinite query 로 표시할 때 발생할 수 있는 성능 문제와 해결 방법에 대해 설명해주세요.

무한 쿼리가 stale 상태가 되어 다시 가져와야 할 때,
TanStack Query는 1페이지(첫 번째 그룹)부터 시작해서 순차적으로 모든 페이지를 다시 가져옵니다.

(예를 들어, 사용자가 페이지 3까지 스크롤했다가 데이터가 stale 상태가 되면, TanStack Query는 페이지 3만 다시 가져오는 것이 아니라 페이지 1부터 시작해서 페이지 1, 2, 3을 순차적으로 다시 가져옵니다.)

그래서 `maxPages` 옵션을 사용하여 캐시에 유지되는 페이지 수를 제한하여, 가장 최근에 요청된 페이지들을 유지합니다.

<br/>

### 3️⃣ Q. initialDataUpdatedAt의 역할

캐시에서 초기 데이터를 가져오면 데이터를 조회하는 소스 쿼리가 **오래되었을 가능성이 큽니다.**

쿼리가 즉시 다시 가져오는 것을 방지하기 위해 인위적인 `staleTime`을 사용하는 대신,
소스 쿼리의 *`dataUpdatedAt`을 (*쿼리에서 가장 최근에 상태를 "성공"으로 반환한 타임스탬프)
`initialDataUpdatedAt`에 전달하는 것이 좋습니다.

`initialDataUpdatedAt`은 초기 데이터가 마지막으로 업데이트된 시간을 알려줍니다.

React Query는 이 시간과 현재 시간을 비교해서 데이터가 staleTime보다 오래되었는지 확인하고
**데이터를 다시 가져와야 하는지 여부를 결정**할 수 있습니다.

```ts
const result = useQuery({
  // 특정 할 일 항목을 위한 쿼리
  queryKey: ["todos", todoId],
  queryFn: () => fetch(`/todos/${todoId}`),

  // 전체 목록에서 특정 할 일 찾기
  initialData: () =>
    queryClient.getQueryData(["todos"])?.find((d) => d.id === todoId),

  // ✨ 전체 목록이 마지막으로 업데이트된 시간 전달
  initialDataUpdatedAt: () =>
    queryClient.getQueryState(["todos"])?.dataUpdatedAt,

  // 데이터가 5분 이내면 "신선"하다고 간주
  staleTime: 5 * 60 * 1000,
});
```
