# 👨‍🏫 week 51 - A

## Query Invalidation, Invalidations from Mutations, Updates from Mutation Responses, Optimistic Updates

### 1️⃣ Q. invalidateQueries로 쿼리를 무효화하면 발생하는 2가지 일에 대해 설명해주세요

`invalidateQueries`가 호출되면 **2가지 일**이 일어납니다

1.  해당 쿼리가 **stale 상태**로 표시됨
    → `staleTime` 설정 여부와 상관없이 **무조건 오래된 것으로 간주**

    ```jsx
    useQuery({
      queryKey: ["todos"],
      queryFn: fetchTodoList,
      staleTime: 1000 * 60 * 5, // 원래는 5분 동안 fresh
    });

    // ⛔️ 위처럼 설정해놨어도,
    // ✅ invalidateQueries()를 호출하면 바로 stale 상태가 됨
    ```

2.  해당 쿼리가 현재 `useQuery`로 사용 중이면 (지금 화면에 렌더링되고 있다면)
    → **백그라운드에서 자동으로 재요청됨**

- **화면에 나타나 있는 쿼리** → `refetch` 자동 발생
- **화면에 안 쓰이고 있는 쿼리** → 그냥 stale 상태로만 남아있음
  → 다음에 사용될 때 자동으로 fetch됨

  <br/>

### 2️⃣ Q. queryClient.invalidateQueries를 사용해서 쿼리를 무효화 하려고 합니다. 각 쿼리의 무효화 여부에 대해 말해주세요

```jsx
import { useQuery, useQueryClient } from "@tanstack/react-query";

// QueryClient를 컨텍스트에서 가져옵니다
const queryClient = useQueryClient();

// 1️⃣
queryClient.invalidateQueries({ queryKey: ["todos"] });

// 아래의 두 쿼리가 무효화됩니다
const todoListQuery1 = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});
const todoListQuery2 = useQuery({
  queryKey: ["todos", { page: 1 }],
  queryFn: fetchTodoList,
});
```

```jsx
// 2️⃣
queryClient.invalidateQueries({
  queryKey: ["todos", { type: "done" }],
});

// 아래의 쿼리가 무효화됩니다
const todoListQuery1 = useQuery({
  queryKey: ["todos", { type: "done" }],
  queryFn: fetchTodoList,
});

// 그러나, 아래의 쿼리는 무효화되지 않습니다
const todoListQuery2 = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});
```

```jsx
// 3️⃣
queryClient.invalidateQueries({
  queryKey: ["todos"],
  exact: true,
});

// 아래의 쿼리가 무효화됩니다
const todoListQuery1 = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});

// 그러나, 아래의 쿼리는 무효화되지 않습니다
const todoListQuery2 = useQuery({
  queryKey: ["todos", { type: "done" }],
  queryFn: fetchTodoList,
});
```

```jsx
// 4️⃣
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === "todos" && query.queryKey[1]?.version >= 10,
});

// 아래의 쿼리가 무효화됩니다
const todoListQuery1 = useQuery({
  queryKey: ["todos", { version: 20 }],
  queryFn: fetchTodoList,
});

// 아래의 쿼리도 무효화됩니다
const todoListQuery2 = useQuery({
  queryKey: ["todos", { version: 10 }],
  queryFn: fetchTodoList,
});

// 그러나, 아래의 쿼리는 무효화되지 않습니다
const todoListQuery3 = useQuery({
  queryKey: ["todos", { version: 5 }],
  queryFn: fetchTodoList,
});
```

<br/>

### 3️⃣ Q.refetch 안하고 mutation 응답으로부터 캐시 업데이트하려면?

1. `setQueryData`로 캐시 업데이트

```jsx
// 1. useQuery: todo 5번 항목을 불러옴 (자동 fetch)
const { data } = useQuery({
  queryKey: ["todo", { id: 5 }],
  queryFn: fetchTodoById,
});

// 2. useMutation 정의 + ✨ onSuccess로 캐시 업데이트
const mutation = useMutation({
  mutationFn: editTodo,
  onSuccess: (data) => {
    queryClient.setQueryData(["todo", { id: 5 }], data);
  },
});

// 3. mutation 실행 (id 5번 todo 수정)
mutation.mutate({ id: 5, name: "Do the laundry" });
```

2. 캐시를 수정할 때는 무조건 `불변성 유지`!

```jsx
queryClient.setQueryData(["posts", { id }], (oldData) => {
  if (oldData) {
    // ❌ 이렇게 직접 수정하면 안 됨!
    oldData.title = "my new post title";
  }
  return oldData;
});
```

❌ 왜 안될까?

- TanStack Query는 내부적으로 캐시 변경 감지를 객체 변경 여부로 판단함
- 기존 객체를 그대로 수정하면, 내부적으로는 “바뀐 게 없네?” 하고 인식할 수 있음
- 그래서 꼭 새로운 객체를 만들어서 리턴해야 함

```jsx
// ✅ 올바른 방식 (불변성 유지)
queryClient.setQueryData(["posts", { id }], (oldData) =>
  oldData
    ? {
        ...oldData, // 기존 데이터 복사
        title: "my new post title", // 수정만 덮어쓰기
      }
    : oldData
);
```
