## 다음 코드를 실행할 때 발생할 수 있는 문제점을 설명하고, 이를 해결하는 방법을 설명하세요.
```jsx
<List onEndReached={() => fetchNextPage()} />
```

- onEndReached가 여러 번 빠르게 호출될 경우, 기존 요청이 완료되기 전에 fetchNextPage가 반복적으로 실행될 수 있습니다.
- React Query의 fetchNextPage는 기본적으로 { cancelRefetch: true } 옵션이 설정되어 있어, 새로운 요청이 기존 요청을 취소하고 데이터를 덮어쓸 가능성이 있습니다.
- 현재 데이터 요청이 진행 중인지 확인하고, 진행 중이면 추가 요청을 방지
```jsx
<List onEndReached={() => !isFetching && fetchNextPage()} />
```
- { cancelRefetch: false } 옵션을 추가하여 기존 요청을 취소하지 않고 새로운 데이터를 안전하게 가져올 수 있습니다.

## API가 커서를 반환하지 않는 경우, 아래와 같이 pageParam을 커서로 사용해 다음 페이지의 매게변수를 계산할 수 있습니다. getNextPageParam에서 lastPage, allPages, lastPageParam이 각각 어떤 데이터를 의미하는지 설명하세요.

```Tsx
return useInfiniteQuery({
  queryKey: ["projects"],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages, lastPageParam) => {
    if (lastPage.length === 0) {
      return undefined;
    }
    return lastPageParam + 1;
  },
});
```

- lastPage: 마지막으로 가져온 API 응답 데이터.
- allPages: 현재까지 가져온 모든 페이지 데이터의 배열.
- lastPageParam: 마지막으로 요청한 pageParam 값.

1.	lastPage (최근 가져온 페이지 데이터)
  - fetchProjects가 반환한 마지막 요청의 API 응답 데이터를 의미합니다.
  - 보통 이 값은 배열 형태이며, API에서 받은 한 페이지의 데이터가 저장됩니다.
  - 예를 들어, fetchProjects({ pageParam: 1 })을 호출하면, 해당 페이지의 데이터가 lastPage로 전달됩니다.
2.	allPages (현재까지 가져온 모든 페이지 데이터의 배열)
  - 지금까지 가져온 모든 페이지 데이터를 배열로 저장한 값입니다.
  - 각 페이지의 응답(lastPage)이 순차적으로 쌓이며, 여러 페이지의 데이터를 관리할 수 있습니다.
  - 예를 들어, allPages = [[Page0 데이터], [Page1 데이터], [Page2 데이터]] 와 같이 저장됩니다.
3.	lastPageParam (마지막으로 요청된 pageParam 값)
  - 최근 fetchProjects를 호출할 때 사용한 pageParam의 값입니다.
  - pageParam이 증가하는 방식으로 동작하므로, 이전 요청에서 사용한 페이지 번호(0, 1, 2, …)가 들어갑니다.
  - 이를 기반으로 다음 페이지의 pageParam을 결정할 수 있습니다.

## 다음 코드의 문제점을 설명하고, 이를 해결하는 방법을 설명하세요.

```jsx
const result = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("/todos"),
  initialData: initialTodos,
});
```


- initialData를 설정했지만, staleTime이 기본값(0)으로 설정되어 있어 쿼리가 마운트될 때 즉시 API 요청이 발생합니다.
- 이로 인해 초기 데이터를 설정한 의미가 없어지고, 불필요한 네트워크 요청이 증가할 수 있습니다.
- 이를 방지하려면 staleTime을 설정하여 초기 데이터를 일정 시간 동안 fresh 상태로 유지해야 합니다.
- 이렇게 하면, 초기 데이터를 활용하면서도 불필요한 API 요청을 줄일 수 있습니다.

```jsx
const result = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("/todos"),
  initialData: initialTodos,
  staleTime: 5 * 1000, // 5초 동안 fresh 상태 유지
});
```