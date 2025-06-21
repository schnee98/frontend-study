# Advanced Server Rendering, Caching, Render Optimizations, Suspense

1. 동일한 쿼리키를 가진 두 개의 useQuery가 동시에 존재할 경우, 상태는 어떻게 동작하나요?

_답_

동일한 queryKey를 가진 두 개의 useQuery는 내부적으로 같은 쿼리 객체(쿼리 인스턴스)를 참조하기 때문에, data, isFetching, isSuccess, isError 같은 상태들을 공유합니다. 그래서 한 곳에서 데이터가 업데이트되거나 refetch 되면, 다른 인스턴스에도 그 상태가 실시간으로 반영됩니다.

2. tracked properties에 대해 설명해줘세요.

_답_

컴포넌트에서 실제 사용된 값만 추적해서, 그 값이 변경될 때만 리렌더링이 일어나도록 최적화하는 기능
그래서 React Query에서 쿼리 상태 변경이 있을 때, 컴포넌트가 항상 리렌더링되지 않는 이유.

React Query는 useQuery에서 반환된 속성 중 실제로 "사용되는" 속성만으로 렌더링을 트리거합니다. 이는 커스텀 게터를 사용하여 수행됩니다. 이로 인해 isFetching 또는 isStale과 같이 자주 변경될 수 있지만 컴포넌트에서 사용되지 않는 속성 때문에 불필요한 렌더링이 줄어듭니다.

3. Suspense 모드에서 캐시된 데이터가 있는 경우에도 오류가 발생하면 어떻게 되나요?

_답_

캐시된 데이터가 있으면 오류가 발생해도 ErrorBoundary는 동작하지 않는다.

오류가 발생해도 에러를 던지지 않고 컴포넌트는 기존 데이터로 렌더링
오류는 내부적으로는 기록되지만, ErrorBoundary에는 전파되지 않음

throwOnError를 변경할 수 없기 때문에(이는 data가 undefined가 될 수 있게 하므로), 모든 오류가 오류 경계에 의해 처리되도록 하려면 오류를 수동으로 던져야 합니다:

```ts
if (error && !isFetching) {
  throw error;
}
```
