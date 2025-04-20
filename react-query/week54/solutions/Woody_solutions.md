# 👨‍🏫 week 54 - A

## Advanced Server Rendering, Caching, Render Optimizations, Suspense

### 1️⃣ Q. 브라우저 환경에서 QueryClient를 전역 변수로 관리해야 하는 이유?

React의 Suspense로 인해 렌더링이 중단되면 useState로 만든 QueryClient가 새로 만들어지면서 캐시가 날아갈 수 있다.

**React의 Suspense는 렌더링 도중 중단되면** 해당 렌더링 트리를 버리고 다시 렌더링을 시도한다.
이때 **useState**(() => new QueryClient())**로 만든 QueryClient는 재생성되며 캐시가 초기화될 수 있다.**
이를 방지하기 위해 컴포넌트 외부의 전역 변수로 관리하여, 렌더링과 무관하게 1번만 생성되도록 한다.


<br/>

### 2️⃣ Q.QueryClient를 서버에서는 항상 새로 생성해야 하는 이유?
서버는 여러 사용자의 요청을 동시에 처리하므로 `QueryClient`를 공유하면 사용자 간 데이터가 섞일 수 있다.  
이를 방지하고 요청 간 데이터를 격리하기 위해 서버에서는 요청마다 새로운 QueryClient를 생성해야 한다.

<br/>

### 3️⃣ Q. Suspense를 사용하며 + 이전에 fetch 성공했지만, 이후 fetch 실패 시 에러 처리방법

Suspense에서 에러는 throw되어야만 ErrorBoundary로 간다.  
즉 `if (error) throw error`를 해야  <ErrorBoundary>가 잡을 수 있다.  

그런데 React Query는 무조건 자동으로 throw하지는 않고,
→ 오직 data가 완전히 없을 때만 throw한다.
```ts
throwOnError: (error, query) => typeof query.state.data === 'undefined'
```
즉, 이전에 성공한 데이터가 있다면 에러가 발생해도 컴포넌트는 렌더링되고, ErrorBoundary로 넘어가지 않는다.


**이 경우 `error && !isFetching` 조건을 통해 수동으로 throw error 해야 한다.**
```ts
const { data, error, isFetching } = useSuspenseQuery({ queryKey, queryFn })

if (error && !isFetching) {
  throw error
}

```


