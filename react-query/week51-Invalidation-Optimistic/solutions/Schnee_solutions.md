1. mutation 이 성공하면 추가적으로 어떤 작업을 하는게 좋은지 설명하고, 왜 그런지 설명해주세요.

답:

- 관련된 query (캐시 데이터)들을 무효화 하는 것이 좋다.
- mutation 이 성공했다는 것은 데이터를 새로 가져왔다는 뜻인데, 무효화를 하지 않으면 이전 데이터를 계속 보여줄 수 있다.

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

답:

- spread operator는 shallow하게 복사하기 때문에, 중첩된 객체(author.details)나 배열(comments)은 참조만 복사됩니다.
- 이후 중첩된 데이터를 수정하려고 할 때, 원본 캐시 데이터도 함께 변경되는 문제가 발생할 수 있습니다.
- 안전한 업데이트를 위해서는 깊은 복사(deep copy)를 사용하거나, 중첩된 객체도 함께 새로운 참조로 복사해야 합니다.

3. Optimistic Updates (낙관적인 업데이트) 는 무슨 뜻인가요?

답:

- 서버로 보낸 요청이 정상적일 것이라고 예상하고, 클라이언트의 요청에 대한 응답이 오기 전에 클라이언트의 데이터를 미리 변경시키는 작업
