# 👨‍🏫 week 39 - A

## ▣ 스트리밍

## ▣ 부분 사전 렌더링

## ▣ 검색, 페이징

## ▣ 데이터 변형

### 1️⃣ Q. Next.js의 스트리밍은 무엇인가요? 어떤 방법이 있나요?

스트리밍은 **라우트를 더 작은 "조각"으로 분해하고 준비되는 대로 서버에서 클라이언트로 점진적으로 스트리밍**하는 데이터 전송 기술입니다.

스트리밍을 통해 **느린 데이터 요청이 전체 페이지를 막는 것을 방지**할 수 있습니다.

Next.js에서 스트리밍을 구현하는 두 가지 방법이 있습니다:

1. 페이지 수준에서 `loading.tsx` 파일을 사용하는 방법.
2. 특정 컴포넌트에서 `<Suspense>`를 사용하는 방법.

<br/>

### 2️⃣ Q. \_폴더명과 (폴더명)의 차이점

1. **`_폴더명`**

- URL 경로에서 제외됨
- Private 폴더로 취급됨
- **라우팅 시스템에서 완전히 무시됨**
- 주로 컴포넌트, 유틸리티 등 라우팅과 관계없는 파일들을 저장할 때 사용

2. **`(폴더명)`**

- URL 경로에서 제외됨
- **라우팅 시스템의 일부로 인식됨**
- Route Groups로 취급됨
- loading.tsx, error.tsx 같은 특수 파일들이 정상적으로 작동함

```
예시)

app/
├─ _components/          # 완전히 private한 폴더
│  └─ Button.tsx        # 라우팅과 무관한 컴포넌트
│
├─ (marketing)/         # Route Group
│  ├─ loading.tsx      # 로딩 상태 처리 가능
│  └─ page.tsx         # 라우팅 처리 가능
```

<br/>

### 3️⃣ Q. 언제 useSearchParams() 훅 , searchParams prop을 사용해야 할까요?

- 실시간 URL 파라미터 감지가 필요하면 → `useSearchParams()`
- 서버에서 데이터를 조회해야 하면 → `searchParams` prop
- 클라이언트 컴포넌트라면 → `useSearchParams()`
- 서버 컴포넌트라면 → `searchParams` prop

<br/>
