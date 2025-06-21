# Important Defaults, Queries, Query Keys, Query Functions, Query Options

1. staleTime과 gcTime의 차이점을 설명해주세요.

_답_

```
staleTime은 유통기한.
설정해놓은 시간동안 fresh, 시간이 지나면 stale한 상태가 되고 refetch된다

gcTime 메모리 관리 시간.
기본값으로 5분 후에 삭제된다!
```

2. status와 fetchStatus의 차이를 설명해주세요.

_답_

```
status는 데이터 자체의 상태(pending, success, error)
fetchStatus는 쿼리 함수(queryFn) 가 현재 실행 중인지 여부 표시(fetching, paused, idle)
```

3. 쿼리가 실패하면 어떻게 동작하는지 설명해주세요.

_답_

```
3번 재시도 후 다 실패하면 error상태가 된다.
재시도 간격은 지수 백오프 방식으로 각 재시도는 점점 더 긴 간격으로 실행된다.
```
