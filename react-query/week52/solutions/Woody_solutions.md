# 👨‍🏫 week 52 - A

## Query Cancellation, Scroll Restoration, Filters, Performance & Request Waterfalls

### 1️⃣ Q. Tanstack Query에서 불필요한 API호출을 멈추기 위한 방법에대해 설명해주세요

fetch나, axios에서 abortSignal(브라우저의 AbortController API 기반)을 쿼리함수에 넘겨준다.

```js
// 1) fetch 사용 시
useQuery({
  queryKey: ["todos"],
  queryFn: async ({ signal }) => {
    const res = await fetch("/todos", { signal });
    return res.json();
  },
});
// 2) axios 사용 시 (v0.22 이상)
useQuery({
  queryKey: ["todos"],
  queryFn: ({ signal }) => axios.get("/todos", { signal }),
});
```

- 컴포넌트가 언마운트 될 때(useQuery()로 요청 보내던 컴포넌트가 사라질 때)
- 다른 쿼리로 교체되었을 때(queryKey가 바뀌어서 새로운 요청이 시작될 때)
  TanStack Query 내부에서 자동으로 signal.abort()를 호출함

  또는

```js
const queryClient = useQueryClient()

<button onClick={() => {
  queryClient.cancelQueries({ queryKey: ['todos'] })
}}>
  취소
</button>
```

- 사용자가 cancelQueries로 직접 수동을 취소할 수도 있다.

  <br/>

### 2️⃣ Q.queryClient.invalidateQueries 와 queryClient.removeQueries 의 차이는?

`queryClient.invalidateQueries` 는 캐시를 지우지는 않고 stale하게 만든다.
`invalidate`는 화면에서 해당 쿼리가 쓰이고 있을 경우 → 자동 refetch도 함께 발생한다.

`queryClient.removeQueries` 는 캐시 자체를 삭제한다.
useQuery 다시 호출되면 `isLoading: true`부터 시작된다.

<br/>

### 3️⃣ Q.Code Splitting 시 워터폴을 초래할 수 있습니다. 이 때 개선할 수 있는 방법은 무엇일까요?

컴포넌트 로딩과 쿼리 요청이 동시에 이뤄지게 쿼리를 부모로 끌어올리거나,
부모에서 미리 prefetchQuery로 데이터 선요청한다.

즉, 컴포넌트와 데이터를 동시에 병렬로 가져오게 하려면,
쿼리를 상위로 끌어올리거나 prefetchQuery()를 JS import보다 먼저 실행해야 한다.

```js
const GraphFeedItem = React.lazy(() => import("./GraphFeedItem"));

// → 이때 내부 쿼리는 GraphFeedItem이 import되고 렌더된 이후에 실행됨
// → 늦은 JS 로딩 + 늦은 fetch → double waterfall 발생
```
