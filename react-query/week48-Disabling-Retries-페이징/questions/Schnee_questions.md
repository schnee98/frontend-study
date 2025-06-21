1. `useQuery`의 `enabled` 옵션이 `false` 일 때 주의할 점을 설명해주세요.

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

3. `placeholderData` 옵션의 단점을 설명해주세요.
