# Network Mode, Parallel Queries, Dependent Queries, Background Fetching Indicators, Window Focus Refetching

1. 각 모드의 차이에 대해 설명해주세요.
   `networkMode: "online" | "always" | "offlineFirst";`

2. 아래 코드에 어떤 문제가 있는지, 개선 방법을 설명해주세요.

```ts
// 사용자 정보를 가져옵니다
const { data: user } = useQuery({
  queryKey: ["user", email],
  queryFn: getUserByEmail,
});

const userId = user?.id;

// 그 다음, 사용자의 프로젝트를 가져옵니다
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ["projects", userId],
  queryFn: getProjectsByUser,
  // userId가 존재할 때까지 쿼리가 실행되지 않습니다
  enabled: !!userId,
});
```

3.  세가지 속성의 차이에 대해 설명해주세요.

    `refetchOnWindowFocus, focusManager.setEventListener, focusManager.setFocused`
