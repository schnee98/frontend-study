1. 컴포넌트의 재활용이 어려워짐(provider에 의존성을 가지고 있기 때문에). useContext를 사용한다고 해서 렌더링이 최적화되지는 않음.
2. 상위의 ref를 하위로 전달할 수 있게 함.
3. useLayoutEffect 모든 DOM의 변경 후에 동기적으로 발생함.
