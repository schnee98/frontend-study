1. `useInfiniteQuery` 의 `result` 에는 `hasNextPage`, `hasPreviousPage` 가 있습니다. 이 두 값이 어떻게 결정되고 확인하는지 설명해주세요.

답:

- `hasNextPage` 는 `getNextPageParam` 의 반환값이 nullish 인지 확인하고 반환값이 nullish 이면 `false`, 아니면 `true` 를 반환한다.
- `hasPreviousPage` 는 `getPreviousPageParam` 의 반환값이 nullish 인지 확인하고 반환값이 nullish 이면 `false`, 아니면 `true` 를 반환한다.
- `hasNextPage`, `hasPreviousPage` 는 캐시한 데이터나 prefetch를 통해 가져온 데이터가 있는지 확인하여 boolean 값을 결정한다.
- [코드 링크](https://github.com/TanStack/query/blob/main/packages/query-core/src/infiniteQueryBehavior.ts#L160-L177)

2. 다음 상황에 대한 결과를 설명해주세요.

- infinite query 의 결과가 refetch 될 때
- infinite query 의 결과가 쿼리 캐시에서 제거 될 때

답:

- refetch를 하게 되면 각 데이터들을 순차적으로 refetch 한다.
- 순차적으로 refetch 하는 이유: 데이터의 순서를 보장하기 위해

- 쿼리 캐시에서 제거 될 때는 페이지네이션이 초기 상태에서 다시

3. `useQuery` 에서 `initialData` 를 함수로 받아야 하는 상황은 언제인가요?

답:

- 쿼리의 초기 데이터를 접근하는 과정이 비용이 많이 들 경우
- 다른 쿼리의 캐시에서 초기 데이터를 가져오고 싶을 경우
