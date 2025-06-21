# Network Mode, Parallel Queries, Dependent Queries, Background Fetching Indicators, Window Focus Refetching

1. 각 모드의 차이에 대해 설명해주세요.
   `networkMode: "online" | "always" | "offlineFirst";`

_답_

```
online
- 네트워크 연결이 없으면 Queries와 Mutations가 실행되지 않는다.
- 연결이 없으면 요청이 실행되지 않고 다시 연결되면 자동으로 요청이 실행된다.
- 일반적인 API 요청 (네트워크 연결이 필수일 때)
always
- 온라인/오프라인 상태를 무시하고 항상 데이터를 가져온다. 요청은 실행되지만, 요청이 실패할 가능성은 있음.
- 네트워크 연결이 필요 없는 환경에서 이 모드를 선택하는 것이 좋다.
- IndexedDB, 캐시 데이터 요청 (네트워크가 필요 없는 데이터)
offlineFirst
- 두 옵션 사이의 중간 상태로, TanStack Query가 queryFn을 한 번 실행하지만, 이후 재시도를 일시 중지. 네트워크 연결이 될 때까지 멈춤.
- 모바일 앱에서 네트워크가 불안정할 때 (불필요한 재시도 방지)
```

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

_답_

```
사용자 정보를 먼저 가져오고 → 해당 사용자 ID를 기반으로 프로젝트 데이터를 가져오는 구조
첫 번째 useQuery가 완료된 후에 두 번째 useQuery가 실행되어 Waterfall 요청이 발생한다.

이를 개선하기 위해 getProjectsByUserEmail API를 만들어 한 번의 요청으로 데이터를 가져오면 Waterfall을 평탄화할 수 있다.
const { data: projects, status, fetchStatus } = useQuery({
  queryKey: ["projects", email],
  queryFn: getProjectsByUserEmail,
});
```

3.  세가지 속성의 차이에 대해 설명해주세요.

    `refetchOnWindowFocus, focusManager.setEventListener, focusManager.setFocused`

_답_

```
refetchOnWindowFocus: false
- 사용자가 창을 클릭하거나 전환했을 때 자동으로 새로고침되지 않도록 할 때

focusManager.setEventListener
- 기본적으로 document.visibilityState === "visible"를 감지해 수행하는데,
포커스 감지 이벤트를 변경하고 싶을 때.

focusManager.setFocused(true/false)
- 현재 포커스 상태를 직접 조작하고 싶을 때
```
