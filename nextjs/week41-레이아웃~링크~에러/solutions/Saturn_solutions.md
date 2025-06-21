1. Templates와 Layouts의 차이점은?

- Layout은 탐색 시에도 레이아웃이 유지되기 때문에 상태가 그대로 남아있음
  - useEffect와 같은 훅이 다시 실행되지 않으며, DOM 요소도 새로 생성되지 않음
- Templates는 탐색 시마다 새로운 인스턴스를 생성하기 때문에 상태가 초기화됨
  - useEffect 같은 훅이 다시 동기화되며, DOM 요소도 새로 생성됨

2. redirect는 어떤 상황에서 어떤 방식으로 동작하며, 사용 시 주의할 점은 무엇인가요?

- 서버 컴포넌트에서 경로를 변경할 때 사용함
- redirect가 내부적으로 에러를 던져 동작하고, try/catch 블록 외부에서 호출해야 함

3. 클라이언트 컴포넌트가 Server Actions의 예상 가능한 에러를 처리할 수 있는 방법은?

- useActionState 훅 사용
