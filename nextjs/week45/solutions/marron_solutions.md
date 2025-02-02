# nextjs

## Data Fetching and Caching, Server Actions and Mutations, Incremental Static Regeneration (ISR)

1. unstable_cache는 언제 사용하나요?

_답_

```
데이터 가져오는 로직을 전체적으로 캐싱 가능
실행 중에 페이지를 미리 렌더링

- fetch()가 아닌 직접 데이터를 가공하는 함수도 캐싱하고 싶을 때
- 캐싱된 데이터를 특정 키를 사용해 제어하고 싶을 때
- 특정 주기로 데이터 자동 갱신(revalidate)하고 싶을 때
```

2. 서버 컴포넌트에서 Javascript가 아직 로드되지 않은 경우 어떻게 동작하는지 설명해주세요.

_답_

```
사용자가 <form>을 제출
- 브라우저는 <form>의 action 속성에 지정된 Server Action을 실행하기 위해 서버에 요청을 보냅니다.
- 이때 JavaScript가 로드되지 않았더라도 요청이 서버로 전송됩니다.

Next.js가 JavaScript가 로드될 때까지 요청을 큐(queue)에 저장

클라이언트가 Hydration(서버 UI와 동기화)되면 요청을 처리
```

3. ISR의 작동 방식에 대해 설명해주세요.

_답_

```
1. 초기 요청:
사용자가 처음 페이지를 요청하면 정적으로 생성된 HTML 파일이 반환됨
getStaticProps가 실행되어 API에서 데이터를 가져오고, 이 데이터를 포함한 HTML이 저장됨
2. revalidate 주기 시작:
설정된 시간이 지나면(revalidate) 백그라운드에서 새로운 데이터를 가져와 페이지를 갱신
3. 새로운 요청 발생:
이후 방문하는 사용자는 갱신된 최신 정적 페이지를 제공받음
만약 캐싱된 페이지가 존재하지 않는다면, 새롭게 정적 페이지를 생성
```
