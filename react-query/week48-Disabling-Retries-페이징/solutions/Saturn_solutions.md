1. `enabled = false` 를 실행시키는 방법은 무엇인가요?

- refetch()

2. Lazy queries에서 isLoading을 맹목적으로 활용하면 안되는 이유는 무엇인가요?

- isLoading은 `isPending && isFetching`으로부터 계산된 값
  - (isPending은 최초 데이터 여부, isFetching은 최초 데이터든 refetch든 상관없이 fetching 중인지 여부)
- Lazy Query가 아직 실행되지 않았다면 isLoading은 false이므로, 이전 데이터가 있는지 여부에 따라 예상과 다르게 동작할 수 있음.
  - isLoading이 false라도, Lazy Query가 실행된 적이 없는 것인지, 캐시된 데이터가 있는 것인지 구분하기 어려움.
- 캐시가 있는 경우 isLoading은 true가 되지 않을 수도 있어서, refetch 시에는 isFetching을 사용하는 게 더 안전함.

3. placeholderData는 무엇이고 언제 유용하게 사용할 수 있나요?

- 이전 데이터를 유지한 채 새로운 데이터를 가져오도록 도와주는 옵션
- 페이징된 쿼리나 무한 스크롤에서 데이터가 깜빡이지 않도록 유지하는 데 유용
