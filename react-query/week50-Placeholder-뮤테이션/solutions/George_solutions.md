## Placeholder Data를 사용할 때 Query의 상태는 어떻게 변화하며, 실제 데이터와 placeholder data를 어떻게 구분하나요?

- Placeholder Data를 사용하면 Query는 pending 상태가 아니라 바로 success 상태로 시작합니다.
- isPlaceholderData로 실제 데이터와 placeholder data를 구분할 수 있습니다.

## 다음 중 useMutation 훅을 사용할 때의 주요 상태가 아닌 것은 무엇인가요?

1. isPending
2. isError
3. isLoading
4. isSuccess

- 3번
- useMutation에서는 isLoading 상태가 존재하지 않습니다.


## 기본적으로 모든 뮤테이션은 병렬로 실행됩니다. 직렬로 실행하는 방법을 설명해주세요.
- useMutation에 scope와 id를 지정한다.