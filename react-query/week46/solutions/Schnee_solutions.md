1. `isPending` 과 `isFetching` 의 차이점을 설명해주세요.

답:

- `isPending` 은 쿼리가 아직 데이터를 가지지 않은 상태
- `isFetching` 은 어떤 상태이든지 쿼리가 데이터를 가져오는 중

- 왜 상태가 두개로 나누어져 있을까?
  - `isPending` 에 속하는 `status` 는 데이터가 있는지 없는지 등의 상태를 제공
  - `isFetching` 에 속하는 `fetchStatus` 는 `queryFn` 가 실행 중인지 아닌지 등의 상태를 제공
  - 위처럼 상태가 두개로 나누어져 있어서 여러 케이스에 대한 조합이 가능하다.

2. 다음 1, 2번에 나열되어 있는 쿼리 키들은 unique한 키로 구분될까요? 왜 그렇게 구분되는지 설명해주세요.

```ts
// 1. Array 형식의 query key
useQuery({ queryKey: ["todo", 5] });

useQuery({ queryKey: ["todo", 5, null] });

// 2. Object 형식의 query key
useQuery({ queryKey: ['todos', { page, status }], ...})

useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```

답:

- 1번 O, 2번 X

- 비교 방법은 직렬화 (serialize) 가능한지, `JSON.stringify()` 로 비교하여 같은지 확인함.

- 소스 코드 [useBaseQuery.ts](https://github.com/TanStack/query/blob/main/packages/react-query/src/useBaseQuery.ts#L56), [queryClient.ts](https://github.com/TanStack/query/blob/main/packages/query-core/src/queryClient.ts#L650-L655), [utils.ts](https://github.com/TanStack/query/blob/main/packages/query-core/src/utils.ts#L205-L228)

```ts
// useBaseQuery.ts
export function useBaseQuery(options) {
  // ...
  const defaultedOptions = client.defaultQueryOptions(options);
}

// queryClient.ts
export class QueryClient {
  //...

  defaultQueryOptions(options) {
    // ...

    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }

    //...

    return defaultedOptions;
  }
}

// utils.ts
export function hashQueryKeyByOptions<TQueryKey extends QueryKey = QueryKey>(
  queryKey: TQueryKey,
  options?: Pick<QueryOptions<any, any, any, any>, "queryKeyHashFn">
): string {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}

export function hashKey(queryKey: QueryKey | MutationKey): string {
  return JSON.stringify(queryKey, (_, val) =>
    isPlainObject(val)
      ? Object.keys(val)
          .sort()
          .reduce((result, key) => {
            result[key] = val[key];
            return result;
          }, {} as any)
      : val
  );
}
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

답:

- 에러가 catch 문에 잡히고 상위 스코프로 던지지 않기 때문에 useQuery가 이 에러를 인식하지 못하고 에러 상태를 가지지 못한다.
