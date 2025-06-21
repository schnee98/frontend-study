# 👨‍🏫 week 45 - A

## ▣ Data Fetching - [Data Fetching and Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)

## ▣ Data Fetching - [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

## ▣ Data Fetching - [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

### 1️⃣ Q.fetch() 사용 시 캐싱 옵션과 기본값 (force-cache, no-store)

Next.js 15버전부터 fetch()가 기본적으로 no-store로 변경되어 항상 최신 데이터를 가져옴 (SSR 효과)

```ts
const res = await fetch(`https://api.vercel.app/blog/${id}`, {
  cache: "force-cache", // 캐시 활성화
  cache: "no-store", // 항상 최신 데이터를 가져옴
});
```

📌 cache: "force-cache" 설정 시, 캐시 시간은 어떻게 결정될까?

✅ cache: "force-cache"는 요청을 캐시하고, 캐시된 데이터를 계속 사용함.
✅ 하지만 기본적으로 Next.js는 캐시 만료 시간(수명)을 정하지 않음.
✅ 한 번 캐싱되면, next build 이후 새로운 배포가 이루어지기 전까지 변경되지 않음.
✅ 즉, 서버에서 캐시가 갱신되기 전까지는 동일한 데이터를 반환함.

📍 캐시된 데이터를 갱신하려면?
1️⃣ 배포(next build && next start or Vercel 배포) → 캐시가 초기화됨.
2️⃣ ISR(next: { revalidate: 60 })을 추가하여 일정 시간 후 캐시 무효화 가능.

```ts
// 캐시를 활성화하면서 일정 시간 후 캐시를 무효화하려면 revalidate를 추가해야 함.
const res = await fetch(`https://api.vercel.app/blog/${id}`, {
  cache: "force-cache", // 기본적으로 캐싱됨
  next: { revalidate: 60 }, // 60초 후 백그라운드에서 캐시 갱신
});
```

3️⃣ On-Demand Revalidation(revalidatePath, revalidateTag)을 사용해 특정 시점에 캐시 갱신 가능.

  <br/>
  
### 2️⃣ Q. Server Actions 이란?

Next.js에서 서버에서 실행되는 함수로, `use server` 지시어를 사용하여,
폼 제출, 데이터 변경(Mutation), API 호출 등을 쉽게 처리할 수 있도록 도와주는 기능

<br/>

### 3️⃣ Q. ISR(Incremental Static Regeneration) 동작 방식

ISR(Incremental Static Regeneration)은 전체 빌드를 다시 하지 않고도, 개별 페이지의 캐시를 특정 시간(revalidate) 이후 자동으로 갱신하는 기능

예를 들어, revalidate: 60이 설정된 경우,
60초가 지나면, 캐시는 만료되지만 기존 페이지는 그대로 제공됨 (stale-while-revalidate).
새 요청이 들어오면 백그라운드에서 새로운 데이터를 가져와 새 페이지가 생성됩니다.
새 페이지가 성공적으로 생성되면 캐시가 갱신됩니다.

ISR은 정적 사이트의 속도를 유지하면서도 최신 데이터를 제공할 수 있어, 블로그, 뉴스 페이지 등에 최적화된 방식입니다.
