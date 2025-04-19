1.  SSR에서 React Query가 작동하는 순서를 올바르게 나열하세요. (queryClient.(**\_\_**) -> (d\_\_\_) -> (**\_\_\_**))

    - prefetchQuery -> dehydrate -> hydrate

2.  gcTime의 타이머가 실행되는 때는?

    - 컴포넌트가 언마운트될때

3.  structural Sharing은 다음 중 어떤 경우에 작동하지 않을까요?

- a. 객체
- b. 배열
- c. Map

  - c. Map (구조적 공유는 JSON 호환 데이터에만 작동)
