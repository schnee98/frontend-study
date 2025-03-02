1. `useQuery`의 `enabled` 옵션이 `false` 일 때 주의할 점을 설명해주세요.

답:

- 쿼리에 캐시된 데이터가 있으면, 쿼리는 `status === 'success'` 또는 `isSuccess` 상태로 초기화됩니다.
- 쿼리에 캐시된 데이터가 없으면, 쿼리는 `status === 'pending'` 및 `fetchStatus === 'idle'` 상태로 시작됩니다.
- 쿼리는 자동으로 마운트 시에 `fetch`되지 않습니다.
- 쿼리는 백그라운드에서 자동으로 `refetch`되지 않습니다.
- 쿼리는 쿼리 클라이언트의 `invalidateQueries` 및 `refetchQueries` 호출을 무시합니다. 이 호출들은 일반적으로 쿼리가 `refetch`되는 결과를 초래합니다.
- `useQuery`에서 반환된 `refetch`를 사용하여 쿼리를 수동으로 trigger 할 수 있습니다. 그러나 `skipToken`과 함께 사용하면 작동하지 않습니다.

2. useQuery 의 retry 옵션을 다음과 같이 사용할 때의 장점을 알려주세요.

```tsx
import { useQuery } from "@tanstack/react-query";

const retry = (failureCount: number, error: Error) => {
  //...
};

const result = useQuery({
  queryKey: ["todos", 1],
  queryFn: fetchTodoListPage,
  retry,
});
```

답:

- 에러 종류에 따라 retry 할지 말지 커스텀 할 수 있다.
- 예시:

```tsx
const retry = (failureCount: number, error: Error) => {
  // 권한이 없거나 악의적인 사용자로 인식할 경우 요청을 더 이상 받지 않는다.
  if (error instanceof PermissionError) {
    return false;
  }

  return true;
};
```

3. `placeholderData` 옵션의 단점을 설명해주세요.

답:

- 새로운 쿼리를 가져오는데 느려지면 오래된 데이터를 그동안 계속 보여준다.
  - 사용자가 쿼리가 업데이트 됐는지 혼란이 올 수 있다.
  - 쿼리가 실패할 경우 에러가 발생했다는 것을 인지하기 어려울 수 있다.
