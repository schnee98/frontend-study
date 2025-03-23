## tanstack query에서 낙관적 업데이트를 구현하는 방법은 variables와 onMutate에서 queryClient를 활용해 캐시를 조작하는 방법 두 가지가 있습니다. 각 방식이 어떤 상황에서 유용한지 설명해주세요.

## invalidateQueries로 쿼리를 무효화하면 두 가지 일이 발생합니다. 어떤 일이 일어나는지 설명해주세요.

## setQueryData를 통해 업데이트할 때 아래와 같이 캐시에서 가져온 데이터를 직접 수정하지 않고, 불변 방식으로 수정해야 한다고 권장하고 있습니다. 그 이유를 설명해주세요.

```ts
queryClient.setQueryData(["posts", { id }], (oldData) => {
  if (oldData) {
    // ❌ 이렇게 시도하지 마세요
    oldData.title = "my new post title";
  }
  return oldData;
});
 
queryClient.setQueryData(
  ["posts", { id }],
  // ✅ 이 방법을 사용하세요
  (oldData) =>
    oldData
      ? {
          ...oldData,
          title: "my new post title",
        }
      : oldData
);
```