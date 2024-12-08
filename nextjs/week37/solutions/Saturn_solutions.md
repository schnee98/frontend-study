1. Next.js의 <Image> 컴포넌트를 사용했을 때의 장점은?

- 자동 이미지 최적화 기능
  - 레이아웃 이동 방지
  - 이미지 크기 조정
  - lazy loading(뷰포트에 들어올 때 로드되므로 초기 로딩 속도를 개선)
  - 현대적인 포맷 지원 (WebP, AVIF와 같은 최신 포맷)

2. Next.js에서 사용하는 대표적인 CSS styling 방법 두가지는?

- Tailwind, CSS Modules

3. Next.js의 앱 라우팅 방식의 대표적인 장점 중 하나는 colocation입니다. colocation을 설명해주세요.

- Colocation은 관련된 코드(예: 컴포넌트, 스타일, 테스트, 유틸리티 등)를 같은 폴더 또는 같은 위치에 배치하여 관리 효율성을 높이는 방식

  ```
  /app
  ├── layout.tsx       // 공통 레이아웃
  ├── page.tsx         // 홈 페이지
  ├── about            // /about 경로
  │     ├── page.tsx   // /about의 페이지
  │     ├── About.module.css  // /about의 스타일
  │     ├── utils.ts   // /about에서 사용하는 유틸리티
  ├── dashboard        // /dashboard 경로
      ├── layout.tsx // 대시보드 레이아웃
      ├── page.tsx   // /dashboard의 페이지

  ```
