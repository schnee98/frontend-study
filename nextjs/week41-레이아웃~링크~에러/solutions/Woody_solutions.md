# 👨‍🏫 week 41 - A

## ▣ Routing - [Layouts and Templates](https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/03-layouts-and-templates.mdx)

## ▣ Routing - [Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

## ▣ Routing - [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

### 1️⃣ Q. Layout과 Template의 차이점을 설명해주세요.

1. **핵심 차이**

- Layout: 여러 페이지 간 UI 공유, 상태 유지
- Template: 페이지 전환마다 새 인스턴스 생성, 상태 초기화  
  (탐색할 때마다 자식의 새 인스턴스가 마운트되고, DOM 요소가 재생성되며, 클라이언트 컴포넌트의 상태가 유지되지 않고, 이펙트가 다시 동기화됨을 의미합니다.)

2. **구체적인 차이점**

- 상태 보존: Layout은 유지, Template은 초기화
- DOM 요소: Layout은 유지, Template은 재생성
- Effect 동작: Layout은 유지, Template은 재동기화

3. **특징과 제한사항**

- Layout은 searchParams를 prop으로 받지 않음 (레이아웃이 기본적으로 서버 컴포넌트이며, 페이지 전환 시 재렌더링되지 않아서 오래된 상태가 유지될 수 있기 때문)
- Layout은 pathname에 직접 접근 불가 (서버 컴포넌트이기 때문. 클라이언트 컴포넌트에서만 usePathname() 훅으로 접근 가능)

  <br/>

### 2️⃣ Q. Next.js의 하이브리드 라우팅 방식을 설명해주세요

Next.js는 서버 사이드와 클라이언트 사이드의 장점을 모두 활용하는 하이브리드 접근 방식을 사용합니다.

1. 서버 측

Code Splitting으로 라우트(페이지)별로 코드가 자동 분할해서, 사용자가 특정 페이지 접속 시 해당 페이지에 필요한 코드만 다운로드
-> 초기 로딩 속도 개선 효과

2. 클라이언트 측

- Prefetching: 링크가 화면에 보이면 해당 href에 적힌 페이지 데이터를 자동으로 미리 로드(프리페치)
  사용자가 클릭하기 전에 데이터 준비

- Caching: 프리페치된 데이터는 라우터 캐시에 저장
  그래서 같은 페이지 재방문 시 캐시된 데이터 사용

- Partial Rendering: 전체 페이지 리로드 없이 변경된 부분만 재렌더링
  <br/>

### 3️⃣ Q. Next.js는 두 가지 에러 처리 방식을 사용합니다. 차이점을 설명해주세요.

1. Expected Errors (예상된 에러)

- Server Actions에서는 try/catch 대신 return으로 처리합니다.
- useActionState를 사용하여 이러한 에러를 관리하고 클라이언트에 "반환"하여 상태관리 합니다.
- 폼 검증, API 요청 실패 등 정상적인 운영 중 발생

2. Uncaught Exceptions (예상치 못한 에러)

- 일반적인 경우: 루트 레이아웃 아래에서 발생한 예기치 않은 에러는 error.js로 처리합니다.
- 선택적인 경우: 중첩된 error.js 파일(예: app/dashboard/error.js)을 사용하여 세분화된 예기치 않은 에러를 처리합니다. (에러는 가장 가까운 부모 에러 경계로 전파)
- 드문 경우: 루트 레이아웃에서 발생한 예기치 않은 에러는 global-error.js로 처리합니다.

<br/>

- https://nextjs-ko.org/docs/app/building-your-application/routing/layouts-and-templates
- https://nextjs-ko.org/docs/app/building-your-application/routing/linking-and-navigating
- https://nextjs-ko.org/docs/app/building-your-application/routing/error-handling
- https://nextjs.org/docs/app/api-reference/file-conventions/layout
