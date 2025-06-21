# Prefetching & Router Integration, Server Rendering & Hydration

1. 아래 코드에서 댓글과 기사 데이터의 prefetch 차이를 설명해주세요.

```js
const articleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'article',
  beforeLoad: () => {
    ...
  },
  loader: async ({
    context: { queryClient },
    routeContext: { articleQueryOptions, commentsQueryOptions },
  }) => {
    // 댓글은 ...
    queryClient.prefetchQuery(commentsQueryOptions)
    // 기사는 ...
    await queryClient.prefetchQuery(articleQueryOptions)
  },
  ...
})
```

2. React Query를 서버 사이드에서 사용할 때 prefetch, dehydrate, hydrate 3단계가 어떤순서로 진행되나요?

3. prefetchQuery함수와 dehydrate함수 차이를 설명해주세요.
