## 1. 다음 중 같이 않은 쿼리 키는?
1. useQuery({ queryKey: ['todos', { status, page }], ... })
2. useQuery({ queryKey: ['todos', { page, status }], ... })
3. useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
4. useQuery({ queryKey: ['todos', status, page], ... })

- 4번: 
- 객체 내의 키 순서가 달라도 같은 쿼리 키로 간주됩니다.
- 배열 항목의 순서는 쿼리 키에 영향을 미칩니다.

## 2. 오래된 쿼리는 어떠한 상황에서 백그라운드에서 재요청되나요?
1. 쿼리의 새 인스턴스가 마운트될 때
2. 창이 다시 포커스될 때
3. 네트워크가 재연결될 때
4. 쿼리가 선택적으로 재요청 간격을 설정한 경우

## 3. 쿼리가 실패했을 때 react-query는 어떤 동작을 할까요?
- 기본적으로 쿼리 실패 시 3번회 재시도하고, exponential backoff delay(지수 백오프) 방식을 사용합니다.
- 이를 변경하려면 retry, retryDelay 옵션을 설정합니다.

