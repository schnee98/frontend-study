# 👨‍🏫 week 47 - Q

## Network Mode, Parallel Queries, Dependent Queries, Background Fetching Indicators, Window Focus Refetching

### 1️⃣ Q.`status === 'pending'` 와 `isFetching === true`의 차이

`status === 'pending'`

`isFetching === true`

```jsx
return status === "pending" ? (
  <span>Loading...</span>
) : status === "error" ? (
  <span>Error: {error.message}</span>
) : (
  <>
    {isFetching ? <div>Refreshing...</div> : null}
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  </>
);
```

  <br/>
  
### 2️⃣ Q. 이 코드의 문제점과 개선 방안이 있다면 설명해주세요.
```js
const { data: user } = useQuery(['user', userId])
const { data: friends } = useQuery({
  queryKey: ['friends', user?.id],
  enabled: !!user?.id
})
const { data: friendsPosts } = useQuery({
  queryKey: ['posts', friends?.map(f => f.id)],
  enabled: !!friends
})
```

#### 문제점

#### 개선방안

<br/>

### 3️⃣ Q. 다음 코드들의 문제점과 올바른 해결 방법을 설명해주세요

잘못된 예시 1.

```js
function TodoList() {
  const results = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["users"], queryFn: fetchUsers },
    ],
  });

  return <div>{/* ... */}</div>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <TodoList />
    </Suspense>
  );
}
```

잘못된 예시 2.

```js
function App() {
  const usersQuery = useSuspenseQuery(["users"], fetchUsers);
  const teamsQuery = useSuspenseQuery(["teams"], fetchTeams);
  const projectsQuery = useSuspenseQuery(["projects"], fetchProjects);
}
```

---

해결 방법.
