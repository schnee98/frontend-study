1. `isPending` 과 `isFetching` 의 차이점을 설명해주세요.

2. 다음 1, 2번에 나열되어 있는 쿼리 키들은 unique한 키로 구분될까요? 왜 그렇게 구분되는지 설명해주세요.

```ts
// 1. Array 형식의 query key
useQuery({ queryKey: ["todo", 5] });

useQuery({ queryKey: ["todo", 5, null] });

// 2. Object 형식의 query key
useQuery({ queryKey: ['todos', { page, status }], ...})

useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```

3. 다음 useQuery 사용법의 문제점을 알려주세요.

```ts
useQuery({
  queryKey: ["schnee"],
  queryFn: fetchData,
});

async function fetchData() {
  try {
    const response = await fetch("/schnee.com");

    if (!response.ok) {
      throw new Error("네트워크 연결에 실패하였습니다.");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
```
