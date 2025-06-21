# Disabling/Pausing Queries, Query Retries, Paginated Queries

1. `enabled = false`는 어떤 경우 사용되는 옵션인가요?

_답_

```
쿼리가 자동으로 실행되는 것을 원하지 않을 때

마운트시에 자동으로 fetch되지 않고, 백그라운드에서 자동으로 refetch되지 않습니다.
isFetching은 항상 false
```

2. retry 후 요청이 실패한 이유를 전부 보기위해서는 어떻게 해야하나요?

_답_

failureReason

```js
const { error, failureReason } = useQuery({
  queryKey: ["todos", 1],
  queryFn: fetchTodoListPage,
  retry: (failureCount, error) => {
    console.log(`실패 ${failureCount}회:`, error);
  },
});

console.log("모든 실패 이유:", failureReason); // 모든 실패 기록 포함
```

3. placeholderData를 사용하는 경우, 빠르게 여러 페이지 이동 시 데이터가 지연될 수 있습니다. 어떻게 보완할 수 있을지 설명해주세요.

_답_

```
staleTime을 활용해 불필요한 요청을 줄이기
isFetching을 사용해 로딩처리

```

