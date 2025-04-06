# 👨‍🏫 week 53 - A

## Prefetching & Router Integration, Server Rendering & Hydration

### 1️⃣ Q. Request Waterfall을 줄이기 위한 올바른 방법은 무엇인가요?

```
  a. useQuery를 하위 컴포넌트에서만 호출
  b. useEffect로 요청을 지연시켜서 자연스럽게 불러오기
  c. 부모 컴포넌트에서 prefetchQuery 또는 useQuery로 미리 요청
  d. 요청마다 staleTime: 0을 설정해서 항상 새로 요청
```

```
  a. ✘ → waterfall의 원인이 되는 방식
  b. ✘ → useEffect는 렌더링 이후 실행 → 오히려 늦음
  c. ✔ → 사전 요청으로 병렬화 가능
  d. ✘ → staleTime을 0으로 하면 항상 네트워크 요청 → 캐시 이점 상실
```

- Request Waterfall이란?  
  → 하나의 비동기 요청이 끝난 후에야 다른 요청이 시작되는 **불필요한 순차 요청 현상**

<br/>

### 2️⃣ Q.prefetchQuery와 fetchQuery의 차이점은 무엇인가요?

---

| 구분      | `prefetchQuery`                                                                                                                                                                   | `fetchQuery`                                                                                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 반환값    | `Promise<void>` (데이터 안 줌)                                                                                                                                                    | `Promise<T>` (데이터 반환)                                                                                                                                                           |
| 에러 처리 | 에러 안잡음                                                                                                                                                                       | 에러 throw 함                                                                                                                                                                        |
| 용도      | 단순히 캐시에만 데이터 넣기                                                                                                                                                       | 데이터 직접 사용 (e.g. SSR)                                                                                                                                                          |
| 사용 예시 | 컴포넌트에서 데이터를 직접 사용하진 않지만, **캐시에 미리 채워두고 싶을 때** <br>예: `onMouseEnter`, `useEffect`, 라우터 `loader`에서 "미리 요청해두기" <br>(백그라운드 프리패칭) | 데이터를 **직접 변수에 받아서 사용**해야 할 때 <br> 예: 서버사이드 렌더링에서 HTML 만들기 전에 데이터 필요할 때 혹은 프리패칭 성공 여부에 따라 UI 흐름을 조정해야 할 때 (catch 필요) |

<br/>

### 3️⃣ Q. `dehydrate()`와 `HydrationBoundary`의 역할은?

1. dehydrate(queryClient) – 서버에서 쓰는 함수

- React Query의 캐시 상태(QueryClient)를 JSON으로 직렬화해서 클라이언트에 전달할 수 있게 변환
- React Query의 데이터를 HTML 안에 넣을 수 있도록 바꿔주는 함수

```ts
const queryClient = new QueryClient();
await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: fetchPosts });
const dehydratedState = dehydrate(queryClient);
return { props: { dehydratedState } };
```

- SSR 중 서버에서 쿼리 데이터를 prefetchQuery로 미리 가져옴
- 그걸 useQuery로 캐시에 저장했음
- 근데 이 캐시는 서버에만 있음 → 클라이언트엔 없음 ❗
- 그래서 dehydrate()로 캐시를 JSON 형태로 추출해서 props나 loader로 넘김

2. <HydrationBoundary state={dehydratedState}> – 클라이언트에서 쓰는 컴포넌트

- 서버에서 직렬화한 쿼리 캐시 데이터를 클라이언트에서 복원(=hydrate)해주는 컴포넌트
- 서버에서 받은 React Query 캐시를 클라이언트에 “다시 넣어주는 곳”

```ts
<QueryClientProvider client={queryClient}>
  <HydrationBoundary state={pageProps.dehydratedState}>
    <App />
  </HydrationBoundary>
</QueryClientProvider>
```

- 클라이언트에서도 useQuery(['posts'])가 호출됨

- 근데 HydrationBoundary가 없으면 → 클라이언트는 "캐시 없음" → ❌ 다시 fetch 요청 발생

- HydrationBoundary는 직렬화된 데이터를 React Query 캐시에 주입함 → ✅ 중복 fetch 없이 바로 사용 가능
