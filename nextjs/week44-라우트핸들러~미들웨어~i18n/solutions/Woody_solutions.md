# 👨‍🏫 week 44 - A

## ▣ Routing - [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## ▣ Routing - [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

## ▣ Routing - [Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

### 1️⃣ Q. Middleware와 Route Handlers의 차이점과 각각 언제사용해야하나요?

둘 다 Next.js에서 서버 측 로직을 처리하지만, 용도와 동작 방식이 다릅니다.

| **특징**             | **Middleware**                                                                              | **Route Handlers**                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **주요 역할**        | 요청 전처리와 흐름 제어.                                                                    | 특정 경로에서 요청 처리 및 응답 반환.                                                                                                  |
| **위치**             | 프로젝트 루트의 `middleware.ts` 파일에서 전역적으로 동작.                                   | 특정 API 경로(`/app/api/*`)에서 동작.                                                                                                  |
| **실행 시점**        | 라우트 매칭 전에 실행.                                                                      | 라우트 매칭 후 실행.                                                                                                                   |
| **적합한 작업**      | 인증, 권한 관리, 경로 리디렉션, 요청 로깅 등.                                               | CRUD API, 데이터 핸들링, 비즈니스 로직 처리.                                                                                           |
| **비동기 작업 처리** | `waitUntil`로 백그라운드에서 비동기 작업을 처리.                                            | `async/await`로 순차적으로 비동기 작업 처리.                                                                                           |
| **클라이언트 응답**  | 클라이언트 응답은 지연되지 않음(즉시 응답 가능).                                            | 작업 완료 후 응답 반환(응답이 지연될 수 있음).                                                                                         |
| **사용 사례**        | 인증된 사용자만 특정 경로에 접근하도록 리디렉션(리디렉션, 헤더 수정, 인증/권한 관리에 적합) | /api/products와 같은 경로에서 CRUD API 구현(CRUD API, 데이터 핸들링, 비즈니스 로직에 적합(요청에 대한 직접적인 응답(Response)을 반환)) |

  <br/>
  
### 2️⃣ Q. Next.js에서 쿠키를 읽는 방법은 무엇인가요?

1. next/headers의 cookies() 사용

```ts
import { cookies } from "next/headers";

export function middleware() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  console.log(token?.value); // 쿠키 값 출력
}
```

2. Web API(NextRequest) 사용

```ts
import { type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  console.log(token); // 쿠키 값 출력
}
```

  <br/>

### 3️⃣ Q. 여러 Route에 동일한 CORS 정책을 적용하려면 어떻게 설정하는 것이 효율적입니까?

`Middleware`를 사용하거나 `next.config.js`에서 설정하는 것이 효율적입니다.

```ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

export const config = {
  matcher: "/api/:path*", // CORS 정책이 적용될 경로 설정
};
```
