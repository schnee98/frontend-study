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

_답_

```js
// 댓글은 가능한 빨리 프리패칭하되, 렌더링을 차단하지는 않습니다
queryClient.prefetchQuery(commentsQueryOptions);
// 기사가 로드될 때까지 라우트 렌더링을 차단합니다
await queryClient.prefetchQuery(articleQueryOptions);
```

commentsQuery는 queryClient.prefetchQuery()로 비동기 호출만 하고 await하지 않아, 렌더링을 차단하지 않고 가능한 빨리 가져오기만 합니다.
articleQuery는 await를 붙여, 데이터가 완전히 로드될 때까지 라우트 렌더링을 멈춥니다.

2. React Query를 서버 사이드에서 사용할 때 prefetch, dehydrate, hydrate 3단계가 어떤순서로 진행되나요?

_답_

prefetch → dehydrate → hydrate
마크업을 생성/렌더링하기 전에 서버측에서 데이터를 prefetch 하고
이 데이터를 직렬화된 형태로 dehydrate해서 클라이언트에 전달하고,
클라이언트에선 이 데이터를 hydrate하여 클라이언트에서 새로운 요청을 하지 않도록 합니다.

3. prefetchQuery함수와 dehydrate함수 차이를 설명해주세요.

_답_

queryClient.prefetchQuery(...)는 데이터를 미리 가져와서 React Query 캐시에 저장해두는 함수입니다. 기본적으로 오류가 발생해도 에러를 던지지 않기 때문에, 주요 데이터를 미리 불러올 때 안전하게 사용할 수 있습니다.
dehydrate(...)는 캐시에 저장된 쿼리 중 성공한 쿼리만 직렬화 가능한 형태로 변환하여 클라이언트로 전달할 때 사용됩니다. 이 과정에서 실패한 쿼리는 제외되어, 클라이언트에서는 다시 시도하거나 로딩 상태로 처리하게 됩니다.
