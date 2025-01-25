## 1. 아래 예제 중 유효하지 않은 경로는?

| Page              | Route               | 결과   |
|---------------------|--------------------|--------|
| app/page.js         | app/route.js      | ?   |
| app/page.js         | app/api/route.js  | ? |
| app/[user]/page.js  | app/api/route.js  | ? |


답: 
| Page              | Route               | 결과   |
|---------------------|--------------------|--------|
| app/page.js         | app/route.js      | X   |
| app/page.js         | app/api/route.js  | O |
| app/[user]/page.js  | app/api/route.js  | O |

## 2. HTTP 메서드 중 어떤 요청만 캐싱이 가능한지 설명하고 아래 옵션은 어떤 역할을 하는지 설명해주세요.

```ts
export const dynamic = 'force-static';
export const revalidate = 60;
```

- HTTP 메서드 중 GET 요청만 캐싱이 가능합니다.
- 이유는 GET 요청은 서버에서 데이터를 가져오기 위한 용도로 사용되며, 변경이 없는 데이터를 반환할 가능성이 높기 때문에 캐싱이 적합합니다. 반면, POST, PUT, PATCH, DELETE 등의 메서드는 데이터를 수정, 추가, 삭제하기 위해 사용되므로 캐싱하면 데이터의 일관성이 깨질 위험이 있습니다.

```ts
export const dynamic = 'force-static'; // 데이터를 정적으로 렌더링하며, 캐시된 데이터를 반환
export const revalidate = 60; // 60초마다 데이터 재검증
```

## 3. 미들웨어(Middleware)가 무엇인지 설명하고, 아래 사용 사례 중 미들웨어로 적합하지 않은 것을 고르세요.
1. 인증 및 권한 검사
2. 경로 재작성
3. 데이터베이스 쿼리 실행
4. CORS 설정
5. 로그 분석

- 미들웨어는 요청이 처리되기 전에 실행되는 코드로, 요청을 가로채어 리다이렉션, 경로 재작성, 응답 수정 등을 수행합니다.
- 3. 데이터베이스 쿼리 실행: 미들웨어는 가볍고 빠르게 실행되도록 설계되어 있어, 복잡한 작업을 처리하기에는 적합하지 않습니다.

