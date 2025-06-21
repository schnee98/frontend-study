# Query Cancellation, Scroll Restoration, Filters, Performance & Request Waterfalls

1. 쿼리 필터 객체의 type 속성에 대해 설명해주세요.
   `type?: 'active' | 'inactive' | 'all'`

   _답_

- 기본값은 all입니다.
- active로 설정하면 활성 쿼리와 일치합니다.(현재 사용중인)
- inactive로 설정하면 비활성 쿼리와 일치합니다.(사용중이진 않지만 캐시에 남아있는)

2. Request Waterfalls이란 무엇인가요?

   _답_

- 네트워크 요청이 직렬 실행되는 문제
- 리소스(코드, CSS, 이미지, 데이터)에 대한 요청이 다른 리소스에 대한 요청이 완료된 후에야 시작되는 경우 발생

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

_답_

- `useSuspenseQueries` 훅을 사용

```js
function App () {
  const usersQuery = useSuspenseQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const teamsQuery = useSuspenseQuery({ queryKey: ['teams'], queryFn: fetchTeams })
  const projectsQuery = useSuspenseQuery({ queryKey: ['projects'], queryFn: fetchProjects })
  // 위의 쿼리들은 모두 Suspend 렌더링을 수행하므로, 모든 쿼리가 완료될 때까지 데이터가 렌더링되지 않습니다
  ...
}

const [usersQuery, teamsQuery, projectsQuery] = useSuspenseQueries({
  queries: [
    { queryKey: ["users"], queryFn: fetchUsers },
    { queryKey: ["teams"], queryFn: fetchTeams },
    { queryKey: ["projects"], queryFn: fetchProjects },
  ],
});
```
