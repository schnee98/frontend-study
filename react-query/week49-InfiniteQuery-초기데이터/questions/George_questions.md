## 다음 코드를 실행할 때 발생할 수 있는 문제점을 설명하고, 이를 해결하는 방법을 설명하세요.
```jsx
<List onEndReached={() => fetchNextPage()} />
```

## API가 커서를 반환하지 않는 경우, 아래와 같이 pageParam을 커서로 사용해 다음 페이지의 매게변수를 계산할 수 있습니다. getNextPageParam에서 lastPage, allPages, lastPageParam이 각각 어떤 데이터를 의미하는지 설명하세요.

```jsx
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

## 다음 코드의 문제점을 설명하고, 이를 해결하는 방법을 설명하세요.

```jsx
const result = useQuery({
  queryKey: ["todos"],
  queryFn: () => fetch("/todos"),
  initialData: initialTodos,
});
```