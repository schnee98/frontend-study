1. 다음 코드와 같이 placeholderData 를 함수로 사용할 경우의 장점을 알려주세요.

```tsx
const result = useQuery({
  queryKey: ["todos", id],
  queryFn: () => fetch(`/todos/${id}`),
  placeholderData: (previousData, previousQuery) => previousData,
});
```

답:

- 이전에 성공했던 Query의 데이터와 메타 데이터를 사용할 수 있다.
- 실제 Query 데이터를 다른 Query에서 사용할 수 있다.

2. mutate 를 호출할 때 useMutation 에서 정의한 콜백 외에도 추가적으로 콜백을 사용하는 방법을 알려주고, 여기서 주의해야할 점을 알려주세요.

답:

```tsx
useMutation({
  mutationFn: addTodo,
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
});

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
});
```

- mutation이 완료되기 전에 언마운트되면 추가적으로 정의한 콜백은 실행되지 않는다.

3. 기본적으로 mutation은 병렬로 실행됩니다. mutation을 직렬로 실행하는 방법을 설명해주세요.

답:

- mutation에 scope와 id를 지정한다.

```tsx
const mutation = useMutation({
  mutationFn: addTodo,
  scope: {
    id: "todo",
  },
});
```
