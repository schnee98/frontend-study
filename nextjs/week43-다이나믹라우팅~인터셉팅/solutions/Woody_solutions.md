# 👨‍🏫 week 43 - A

## ▣ Routing - [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## ▣ Routing - [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

## ▣ Routing - [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

### 1️⃣ Q. 예시 URL params에 따라 각각 라우트에 맞는 params객체를 말해주세요

Example URL params

1. /shop
2. /shop/men/shoes/nike

#### Catch-all ([...slug]):

`app/shop/[...slug]/page.tsx`

1. 404 에러! (최소 하나의 세그먼트 필요)
2. { slug: ['men', 'shoes', 'nike'] }

#### Optional Catch-all ([[...slug]]):

`app/shop/[[...slug]]/page.tsx`

1. { slug: undefined }
2. { slug: ['men', 'shoes', 'nike'] }

#### 주요 차이점

1. Catch-all ([...slug]):

- 최소 하나의 세그먼트가 반드시 필요할 때 사용
- params.slug는 항상 배열
- 기본 경로(/shop)에서 404 에러

2. Optional Catch-all ([[...slug]]):

- 기본 경로도 허용하고 싶을 때 사용
- 세그먼트가 없어도 됨
- params.slug는 배열 또는 undefined
- 기본 경로(/shop) 허용

<br/>

### 2️⃣ Q. Next.js의 동적 라우팅에서 generateStaticParams의 무엇이고, 장점은 무엇인가요?

동적 라우트([id], [slug] 등)에서 빌드 시점에 정적 페이지를 생성하기 위한 함수.

장점:

- 빌드 시점에 자동 실행되어 정적 페이지들을 미리 생성해서 성능을 최적화
  (generateStaticParams내에서 콘텐츠를 가져오면 요청이 자동으로 메모라이즈 됩니다.
  즉, 여러 레이아웃 및 페이지에서 동일한 인수를 사용하는 요청은 한 번만 수행되므로 빌드 시간이 줄어듭니다.)

- 같은 fetch는 한 번만 실행되므로 서버 부하 감소
- 모든 페이지가 빌드 시점에 생성되어 검색 엔진 크롤링에 유리

규칙:

1. 위치 규칙

```ts
// ✅ 동적 라우트 페이지/레이아웃 파일에 있어야 함
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: "post-1" }, { slug: "post-2" }];
}

export default function Page() {
  // ...
}

// ❌ 일반 컴포넌트 파일에서는 작동하지 않음
// components/BlogPost.tsx
export async function generateStaticParams() {
  // 작동하지 않음
  // ...
}
```

2. 서버 컴포넌트 제한
   (빌드 타임에 실행되므로 클라이언트 사이드 코드를 포함할 수 없음)

```ts
// ✅ 서버 컴포넌트에서 사용
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: "post-1" }];
}

// ❌ 클라이언트 컴포넌트에서는 사용 불가
("use client");
export async function generateStaticParams() {
  // 작동하지 않음
  // ...
}
```

3. 파일 분리 시

```ts
// ✅ 올바른 방법
// app/blog/[slug]/generateStaticParams.ts
export async function generateParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// app/blog/[slug]/page.tsx
import { generateParams } from "./generateStaticParams";

export const generateStaticParams = generateParams;

// ❌ 잘못된 방법
// utils/generateStaticParams.ts
export async function generateStaticParams() {
  // 여기서 직접 export하면 안됨
  // ...
}
```

  <br/>

### 3️⃣ Q. Parallel Routes와 Intercepting Routes를 결합하여 모달을 구현하려고 합니다 방법을 설명해주세요

1. Parallel Routes로 모달용 `별도 렌더링 영역` 확보

   - `@modal`과 같은 `slot` 폴더를 생성하여 모달이 렌더링될 공간을 확보합니다

2. Intercepting Routes로 경로 가로채기 설정

   - `인터셉트`하려는 실제 경로와 동일한 파일 구조로 구성
   - 예: `@modal/(.)photos/[id]/page.tsx`로 `/photos/[id]` 경로를 가로챕니다

3. 레이아웃에서 렌더링 처리
   - Root Layout에서 `modal`과 `children` props를 받아 `조건부 렌더링`
   - 모달과 메인 컨텐츠의 UI 배치를 관리합니다

@modal: "모달을 어디에 보여줄지"

(.)photo: "어떤 경로를 가로채서 모달로 보여줄지"

layout.tsx: "모달과 메인 페이지를 어떻게 배치할지"

#### 구현의 장점

- URL 기반 상태 관리로 공유 가능
- SEO 최적화 (전체 페이지 버전 존재)
- JavaScript 없이도 기본 동작
- 브라우저 히스토리와 통합
  <br/>
