1. Server Components와 Client Components는 일대일로 매칭되지 않습니다. 왜 그럴까요?

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

3. throwOnError 옵션이 있음에도 오류를 수동으로 던져야 하는 상황은 언제일까요?
