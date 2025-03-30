# Query Cancellation, Scroll Restoration, Filters, Performance & Request Waterfalls

1. 쿼리 필터 객체의 type 속성에 대해 설명해주세요.
   `type?: 'active' | 'inactive' | 'all'`

2. Request Waterfalls이란 무엇인가요?

3. Suspense를 사용하는 경우에 Request Waterfall이 발생하면 어떻게 해결할 수 있나요?

```js
function App () {
  const usersQuery = useSuspenseQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const teamsQuery = useSuspenseQuery({ queryKey: ['teams'], queryFn: fetchTeams })
  const projectsQuery = useSuspenseQuery({ queryKey: ['projects'], queryFn: fetchProjects })
  // 위의 쿼리들은 모두 Suspend 렌더링을 수행하므로, 모든 쿼리가 완료될 때까지 데이터가 렌더링되지 않습니다
  ...
}
```
