# 👨‍🏫 week 42 - A

## ▣ Routing - [Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

## ▣ Routing - [Redirecting](https://nextjs.org/docs/app/building-your-application/routing/redirecting)

## ▣ Routing - [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

### 1️⃣ Q. Instant Loading States (즉시 로딩 상태)가 무엇이며, React와 Next.js의 차이점은?

- Instant Loading States: 탐색 시 즉시 표시되는 폴백 UI (스켈레톤, 스피너 등)

- React vs Next.js 구현 차이

  - React SPA: 수동으로 모든 설정 필요
  - Next.js: 폴더안에 loading.js 파일만으로 로딩 상태를 자동 설정

- Next.js의 장점

  - 상태 관리 불필요
  - 조건부 렌더링 불필요
  - Suspense 수동 설정 불필요
  - 파일 시스템 기반 자동 설정

  <br/>

### 2️⃣ Q. SSR의 순차적 단계들과 문제점, 그리고 해결책은?

SSR 단계

1. 먼저 지정된 페이지의 모든 데이터를 서버에서 가져옵니다.
2. 서버가 페이지의 HTML을 렌더링합니다.
3. 페이지의 HTML, CSS, JavaScript를 클라이언트로 전송
4. 생성된 HTML과 CSS를 사용해 비대화형(Non-interactive; 보기만 할 수 있는 상태) UI를 표시
5. React가 UI를 \*hydrate하여 대화형(Interactive; 클릭하고 입력할 수 있는 상태)으로 만듦  
   _(\*하이드레이션(Hydration): 서버에서 생성된 HTML에 JavaScript 동작을 연결하는 과정)_

문제점

- 모든 단계가 순차적이고 차단적(blocking)
- 모든 데이터를 가져올 때까지 HTML 렌더링을 시작할 수 없음
- 모든 컴포넌트 코드가 다운로드될 때까지 hydration을 시작할 수 없음

해결책 (스트리밍)

- SSR의 단점을 해결하기 위해 페이지의 HTML을 더 작은 청크로 나누고
- 서버에서 클라이언트로 점진적으로 전송하는 방식

  <br/>

### 3️⃣ Q. 스트리밍이 SEO에 부정적 영향을 미치나요? (o/x)

답: ❌ (틀림)
이유: 스트리밍도 서버 렌더링 방식이므로 SEO에 영향을 주지 않음
검색 엔진은 최종적으로 완성된 HTML을 크롤링할 수 있음

<br/>
