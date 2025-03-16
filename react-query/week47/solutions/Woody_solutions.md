# 👨‍🏫 week 47 - Q

## Network Mode, Parallel Queries, Dependent Queries, Background Fetching Indicators, Window Focus Refetching

### 1️⃣ Q.`status === 'pending'` 와 `isFetching === true`의 차이

`status === 'pending'`

- 데이터가 아예 '없는' '최초' 로딩 상태
- 사용자에게 보여줄 데이터가 없음

`isFetching === true`

- 기존 데이터는 있지만 새로운 데이터를 가져오는 중
- isFetching은 기존 데이터가 있어도 새로운 fetch가 발생하면 true

예: refetch, 윈도우 포커스, 수동 새로고침 등
기존 데이터를 계속 보여주면서 로딩 인디케이터만 표시

```jsx
return status === "pending" ? (
  <span>Loading...</span> // 전체 화면 로딩
) : status === "error" ? (
  <span>Error: {error.message}</span>
) : (
  <>
    // 작은 로딩 표시
    {isFetching ? <div>Refreshing...</div> : null}
    // 기존 데이터 계속 표시
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  </>
);
```

https://tanstack.com/query/latest/docs/framework/react/guides/background-fetching-indicators

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

1. Request Waterfall 현상이 발생합니다(Waterfall: 쿼리가 순차적으로 실행되어 시간이 쌓임)

user 데이터를 받아야 friends를 요청하고
friends 데이터를 받아야 posts를 요청하는 순차적 실행
각 요청이 1초라면 총 3초가 소요됨

2. 성능 이슈

각 요청이 이전 요청 완료를 기다려야 함

#### 개선방안

가능하다면, 두 쿼리가 병렬로 fetching할 수 있도록 백엔드 API를 재구성하는 것이 좋습니다. (하지만 이는 항상 실용적이지 않을 수 있습니다.)

```js
// 백엔드 API 통합
GET /user-friends-posts?userId={userId}
Response: {
  user: { id: 1, name: 'John' },
  friends: [...],
  posts: [...]
}

// 프론트엔드 코드
const { data } = useQuery(['user-friends-posts', userId])
```

#### 이런 Waterfall이 불가피한 경우는?(이전 데이터가 반드시 필요한 경우)

결제와 같이 순차적 처리가 필수인 경우
보안상의 이유로 이전 단계 검증이 필요한 경우

#### API를 통합할 때의 장단점?

장점: 성능 향상, 프론트엔드 복잡도 감소
단점: 백엔드 복잡도 증가, 캐시 효율성 감소, 유연성 감소
따라서 데이터의 사용 패턴과 요구사항을 고려하여 결정해야 함

https://react-query.kro.kr/docs/guides-and-concepts/dependent-queries

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

```js
function TodoList() {
  const results = useSuspenseQueries({
    // Suspense 전용 훅 사용
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

```js
// 또는 각 쿼리를 별도 컴포넌트로 분리
function Users() {
  const users = useSuspenseQuery(["users"], fetchUsers);
  return <UserList users={users} />;
}

function Teams() {
  const teams = useSuspenseQuery(["teams"], fetchTeams);
  return <TeamList teams={teams} />;
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Users />
      <Teams />
      <Projects />
    </Suspense>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <TodoList />
    </Suspense>
  );
}
```

1. 첫 번째 예시는 useQueries와 Suspense를 함께 사용하고 있는데, useQueries가 Suspense를 지원하지 않아 의도한 대로 동작하지 않음
2. 두 번째 예시는 여러 개의 useSuspenseQuery를 직접 사용하고 있는데, 첫 번째 쿼리에서 suspend되어 나머지 쿼리들이 실행되지 않음  
   (users 쿼리가 Promise를 throw하면서 컴포넌트가 suspend되어, teams와 projects 쿼리는 실행되지 않음!)

- useQueries는 isLoading, error 등의 상태를 직접 처리하도록 설계됨
- useSuspenseQueries는 로딩/에러 상태를 Suspense와 ErrorBoundary에 위임하도록 설계됨
- 그래서 이 두 패턴은 서로 호환되지 않음
