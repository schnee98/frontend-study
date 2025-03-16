## 1. 아래 예제 중 유효하지 않은 경로는?

| Page              | Route               | 결과   |
|---------------------|--------------------|--------|
| app/page.js         | app/route.js      | ?   |
| app/page.js         | app/api/route.js  | ? |
| app/[user]/page.js  | app/api/route.js  | ? |


## 2. HTTP 메서드 중 어떤 요청만 캐싱이 가능한지 설명하고 아래 옵션은 어떤 역할을 하는지 설명해주세요.

```ts
export const dynamic = 'force-static';
export const revalidate = 60;
```

## 3. 미들웨어(Middleware)가 무엇인지 설명하고, 아래 사용 사례 중 미들웨어로 적합하지 않은 것을 고르세요.
1. 인증 및 권한 검사
2. 경로 재작성
3. 데이터베이스 쿼리 실행
4. CORS 설정
5. 로그 분석
