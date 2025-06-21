1. 컴포넌트의 라이프 사이클 동안 prefetch 하는 방법을 설명해주세요.

답:

- useQuery를 사용할 때: query를 사용하기 전에 부모 컴포넌트에서 useQuery를 한번 더 실행한다.
- useSuspenseQuery를 사용할 때: usePrefetchQuery 혹은 usePrefetchInfiniteQuery를 사용한다.
- queryFn 안에서 prefetchQuery 를 사용한다.
- useEffect 안에서 prefetchQuery 를 사용한다.

2. 라우터 레벨에서 prefetch를 할 때 장점을 알려주세요.

답:

- 요청을 컴포넌트 렌더링이 되기 전에 보내기 때문에 컴포넌트 렌더링 후에 로딩되는 사용성을 줄일 수 있다.

3. nextjs와 같은 프레임워크들이 왜 기본적으로 직렬화 가능한 값을 지원하는지 설명해주세요.

답:

- html 태그들을 escape 하지 않기 때문에 xss 취약성이 쉽게 발생할 수 있다.
