1. 다음 코드와 같이 placeholderData 를 함수로 사용할 경우의 장점을 알려주세요.

```tsx
const result = useQuery({
  queryKey: ["todos", id],
  queryFn: () => fetch(`/todos/${id}`),
  placeholderData: (previousData, previousQuery) => previousData,
});
```

2. mutate 를 호출할 때 useMutation 에서 정의한 콜백 외에도 추가적으로 콜백을 사용하는 방법을 알려주고, 여기서 주의해야할 점을 알려주세요.

3. 기본적으로 mutation은 병렬로 실행됩니다. mutation을 직렬로 실행하는 방법을 설명해주세요.
