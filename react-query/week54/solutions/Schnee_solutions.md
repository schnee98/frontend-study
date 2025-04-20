1. Server Components와 Client Components는 일대일로 매칭되지 않습니다. 왜 그럴까요?

답:

- Server Components는 서버에서만 실행되지만, Client Components는 서버와 클라이언트 모두 실행될 수 있다.
- Client Components는 초기 서버 렌더링 단계에서도 렌더링될 수 있다.
- Server Components는 로더 단계에서만 렌더링 된다.
- Client Components는 어플리케이션 단계에서 실행되고, hydration을 위한 pre-render 단계를 거친다.

2. 다음 쿼리는 어느 시점마다 리렌더링 될까요?

```tsx
export const useTodos = (select) => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select,
  });
};

export const useTodoCount = () => {
  return useTodos((data) => data.length);
};
```

답:

- 데이터의 길이가 변경될 때 마다

3. throwOnError 옵션이 있음에도 오류를 수동으로 던져야 하는 상황은 언제일까요?

답:

- throwOnError의 기본값:

```
throwOnError: (error, query) => typeof query.state.data === 'undefined'
```

- 이 기본값은 변경할 수 없기 때문에, 모든 에러가 ErrorBoundary에 의해 캐치되지 않는다.
- 에러를 던지고 싶으면, 다음과 같이 수동으로 던져야 한다.

```tsx
import { useSuspenseQuery } from "@tanstack/react-query";

const { data, error, isFetching } = useSuspenseQuery({ queryKey, queryFn });

if (error && !isFetching) {
  throw error;
}
```
