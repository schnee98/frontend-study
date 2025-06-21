# 👨‍🏫 week 48 - A

## Disabling/Pausing Queries, Query Retries, Paginated Queries

### 1️⃣ Q. 아래의 코드를 TS관점에서 더 명확하게 한다면 어떻게 개선할 수 있을까요?

```jsx
import { useQuery } from '@tanstack/react-query'

function Todos() {
  const [filter, setFilter] = React.useState<string | undefined>()

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(), // 쿼리 함수가 여기 있음
    enabled: false, // 하지만 실행은 안 함
  });
```

개선 후

```jsx
import { skipToken, useQuery } from '@tanstack/react-query'

function Todos() {
  const [filter, setFilter] = React.useState<string | undefined>()

  const { data } = useQuery({
    queryKey: ['todos', filter],
    // ⬇️ disabled as long as the filter is undefined or empty
    queryFn: filter ? () => fetchTodos(filter) : skipToken,
  })

```

- skipToken은 쿼리 함수 자체를 대체하여 타입 시스템에 "이 쿼리는 현재 실행 불가능하다"는 것을 명시적으로 알립니다
- 조건부로 쿼리를 비활성화할 때 타입 안전성을 제공합니다
- 다만, skipToken을 사용하면 refetch() 함수가 작동하지 않는다는 제한이 있습니다

  <br/>

### 2️⃣ Q. useQuery로 수행된 query가 실패할 경우 서버와 클라이언트 간의 retry(재시도 횟수) 기본값은?

- 클라이언트 : 3회 기본값  
  클라이언트에서는 일시적인 네트워크 문제를 극복하기 위해 적절한 재시도를 수행합니다

- 서버: 0회 기본값  
  서버에서는 빠른 응답을 위해 재시도를 기본적으로 하지 않습니다 (서버사이드 렌더링 성능 최적화)

<br/>

### 3️⃣ Q. 일반적으로 useQuery로 페이징된 데이터를 렌더링하기위해 설정해야하는 것과 이유는?

```jsx
const result = useQuery({
  queryKey: ["projects", page],
  queryFn: fetchProjects,
});
```

```jsx
const { isPending, isError, error, data, isFetching, isPlaceholderData } =
  useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchProjects(page),
    placeholderData: keepPreviousData, // 설정
  });
```

placeholderData: keepPreviousData 설정을 합니다.

- UX 개선: 페이지 전환 시 화면이 깜빡이지 않음

  - 새 데이터를 가져오는 동안 이전 페이지 데이터가 계속 표시됩니다
  - 로딩 상태(isPending)로 전환되지 않고 기존 데이터를 유지합니다

- 상태 관리 개선

  - `isPlaceholderData`로 현재 데이터가 임시 데이터인지 확인 가능합니다
  - `isFetching`으로 백그라운드 로딩 상태 표시 가능합니다
  - 이를 활용해 UI 상태(예: 다음 페이지 버튼 비활성화)를 효과적으로 관리합니다

- 데이터 처리 개선

  - 쿼리 키가 변경되어도 데이터 연속성을 유지합니다(이전 데이터를 임시로 유지)
  - 새 데이터가 도착하면 자연스럽게 교체합니다
