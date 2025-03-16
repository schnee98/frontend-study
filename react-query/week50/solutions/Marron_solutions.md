# Placeholder Query Data, Mutations

1. query에 placeholder data를 제공하는 방법을 설명해주세요.

_답_ :

- 선언적으로:
  query에 placeholderData를 제공하여 cache가 비어있을 때 미리 채워줍니다.
- 명령적으로:
  queryClient와 placeholderData 옵션을 사용하여 데이터를 미리 가져오거나(fetch) 사용할 수 있습니다.

2. 콜백 함수에서 프로미스를 반환하면 어떤 일이 발생하나요?

_답_ :
다음 콜백이 호출되기 전에 먼저 프로미스가 해결될 때까지 기다립니다
해결되면 success상태가 되고 onSuccess 콜백함수가 호출
거절되면 error상태 onError 콜백함수가 호출

3. 기본적으로 모든 뮤테이션은 병렬로 실행됩니다. 병렬 실행을 피하는 방법을 알려주세요.

_답_ :

뮤테이션에 scope, id를 지정하기

동일한 scope.id를 가진 뮤테이션은 직렬로 실행되며 해당 스코프에 대해 이미 진행 중인 뮤테이션이 있을 경우 isPaused: true 상태에서 시작됩니다. 이 뮤테이션들은 대기열에 추가되며, 대기 시간이 끝나면 자동으로 재개됩니다.

```js
const mutation = useMutation({
  mutationFn: addTodo,
  scope: {
    id: "todo",
  },
});
```
