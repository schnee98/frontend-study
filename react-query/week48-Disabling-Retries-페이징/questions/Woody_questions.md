# 👨‍🏫 week 48 - Q

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

  <br/>

### 2️⃣ Q. useQuery로 수행된 query가 실패할 경우 서버와 클라이언트 간의 retry(재시도 횟수) 기본값은?

<br/>

### 3️⃣ Q. 일반적으로 useQuery로 페이징된 데이터를 렌더링하기위해 설정해야하는 것과 이유는?

```jsx
const result = useQuery({
  queryKey: ["projects", page],
  queryFn: fetchProjects,
});
```
