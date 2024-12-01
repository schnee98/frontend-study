# 👨‍🏫 week 37 - A

## ▣ Next.js 기초

## ▣ CSS Styling

## ▣ Font/Image 최적화

### 1️⃣ Q. Next.js의 렌더링 방식들(SSR, SSG, ISR)의 차이점이뭔가요?

Next.js의 세 가지 주요 렌더링 방식을 자세히 설명해드리겠습니다:

1. SSR (Server-Side Rendering; 서버 렌더링):

-   작동방식: 사용자가 페이지를 요청할 때마다 서버에서 새로 페이지를 만들어서 보내줍니다
-   장점:
    -   항상 최신 데이터를 보여줄 수 있음
    -   SEO가 잘됨 (검색엔진이 내용을 잘 읽을 수 있음)
-   단점:
    -   서버에 부하가 큼
    -   페이지 로딩이 조금 느릴 수 있음
-   사용케이스: 실시간 데이터가 중요한 페이지 (SNS 피드, 실시간 주식 정보 등)

2. SSG (Static Site Generation; 정적 사이트 생성):

-   작동방식: 빌드할 때 미리 페이지를 만들어두고, 요청이 올 때마다 동일한 페이지를 보여줍니다
-   장점:
    -   매우 빠른 로딩 속도
    -   서버 부하가 적음
    -   호스팅 비용이 저렴
-   단점:
    -   데이터가 정적이라 실시간 업데이트 불가
    -   많은 페이지가 있으면 빌드 시간이 오래 걸림
    -   실시간 데이터를 보여줄 수 없음
-   사용케이스: 내용이 자주 바뀌지 않는 페이지 (블로그 포스트, 제품 소개 페이지)

3. ISR (Incremental Static Regeneration; 점진적 정적 재생):

-   작동방식: SSG처럼 정적 페이지를 만들지만, 일정 시간마다 페이지를 다시 생성합니다
-   장점:
    -   SSG의 성능 이점을 유지하면서 데이터 업데이트 가능
    -   서버 부하가 적음
    -   빌드 시간이 적절함
-   단점:
    -   실시간 데이터는 못 보여줌
    -   재생성 주기 설정이 필요
-   사용케이스: 주기적으로 업데이트되는 콘텐츠 (뉴스 사이트, 상품 목록)

```js
// app/page.tsx - SSR
export default async function Page() {
  const data = await fetch('https://api.example.com/stocks', {
    cache: 'no-store'  // SSR 설정
  });
  return <div>{/* 실시간 데이터 표시 */}</div>
}

// app/page.tsx - SSG
export default async function Page() {
  const data = await fetch('https://api.example.com/blog-post');  // 기본값이 SSG
  return <div>{/* 블로그 내용 표시 */}</div>
}

// app/page.tsx - ISR
export default async function Page() {
  const data = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }  // 1시간마다 재생성
  });
  return <div>{/* 상품 목록 표시 */}</div>
}
```

실제 프로젝트에서는 이 세 가지를 적절히 혼합해서 사용하는 것이 일반적입니다. 예를 들어:

-   메인 페이지: SSG
-   제품 목록: ISR (1시간마다 업데이트)
-   장바구니: SSR (실시간 데이터 필요)

이렇게 각 페이지의 특성에 맞는 렌더링 방식을 선택하면 됩니다.

<br/>

### 2️⃣ Q. Next.js의 글꼴 최적화 기능은 어떻게 동작하나요?

Next.js는 `next/font` 모듈을 통해 자동 글꼴 최적화를 제공합니다.

글꼴 파일을 빌드 시 다운로드하고 다른 정적 애셋과 함께 호스팅합니다.

이렇게 하면 사용자가 애플리케이션을 방문할 때 글꼴에 대한 추가 네트워크 요청이 없으므로 성능에 영향을 미치지 않습니다.

<br/>

### 3️⃣ Q. Next.js의 이미지 최적화 기능엔 무엇이 있나요?

Next.js는 `next/image` 컴포넌트를 통해 자동 이미지 최적화를 제공합니다

-   자동 이미지 크기 최적화

-   레이지 로딩 자동 적용

-   디바이스에 맞는 최적 크기 제공

-   placeholder blur 효과 지원

-   WebP 같은 최신 포맷 자동 변환

-   CDN 통합 지원

-   캐싱값 지정가능( 무효화 기능이 없으므로 낮게유지하는것이 좋음)
    `minimumCacheTTL`
