## tanstack query에서 낙관적 업데이트를 구현하는 방법은 variables와 onMutate에서 queryClient를 활용해 캐시를 조작하는 방법 두 가지가 있습니다. 각 방식이 어떤 상황에서 유용한지 설명해주세요.

- variables: 낙관적 업데이트를 표시해야 하는 곳이 하나만 있는 경우
- onMutate: 여러 곳에서 캐시를 공유해, 여러 곳에서 롤백이 필요한 경우

## invalidateQueries로 쿼리를 무효화하면 두 가지 일이 발생합니다. 어떤 일이 일어나는지 설명해주세요.
1. 쿼리가 stale 한 상태로 표시됩니다. 이 상태는 staleTime 설정을 무시합니다.
2. 쿼리가 현재 useQuery 또는 관련 훅을 통해 렌더링 중일 경우, 백그라운드에서 다시 가져옵니다.

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

- tanstack query는 객체가 바뀌었는지 얕은 비교로 판단합니다.
- 기존 객체를 직접 수정하면 참조하고 있는 주소값은 그대로이기 때문에 리렌더링이 발생하지 않습니다.