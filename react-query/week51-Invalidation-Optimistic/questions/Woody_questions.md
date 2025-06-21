# 👨‍🏫 week 51 - Q

## Query Invalidation, Invalidations from Mutations, Updates from Mutation Responses, Optimistic Updates

### 1️⃣ Q. invalidateQueries로 쿼리를 무효화하면 발생하는 2가지 일에 대해 설명해주세요

  <br/>

### 2️⃣ Q. queryClient.invalidateQueries를 사용해서 쿼리를 무효화 하려고 합니다. 각 쿼리의 무효화 여부에 대해 말해주세요

```jsx
import { useQuery, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

// 1️⃣
queryClient.invalidateQueries({ queryKey: ["todos"] });

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

const todoListQuery1 = useQuery({
  queryKey: ["todos", { type: "done" }],
  queryFn: fetchTodoList,
});
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

const todoListQuery1 = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodoList,
});
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

const todoListQuery1 = useQuery({
  queryKey: ["todos", { version: 20 }],
  queryFn: fetchTodoList,
});
const todoListQuery2 = useQuery({
  queryKey: ["todos", { version: 10 }],
  queryFn: fetchTodoList,
});
const todoListQuery3 = useQuery({
  queryKey: ["todos", { version: 5 }],
  queryFn: fetchTodoList,
});
```

<br/>

### 3️⃣ Q.refetch 안하고 mutation 응답으로부터 캐시 업데이트하려면?
