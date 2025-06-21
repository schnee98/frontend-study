1. mutation 이 성공하면 추가적으로 어떤 작업을 하는게 좋은지 설명하고, 왜 그런지 설명해주세요.

2. 다음 코드에서 주의할 점은 무엇인가요?

```tsx
queryClient.setQueryData(["posts", { id }], (oldData) => {
  if (!oldData) return oldData;

  const newData = {
    ...oldData,
    title: "my new post title",
  };

  newData.author.name = "schnee";

  return newData;
});
```

3. Optimistic Updates (낙관적인 업데이트) 는 무슨 뜻인가요?
