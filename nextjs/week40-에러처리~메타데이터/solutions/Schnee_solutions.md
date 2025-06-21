1. 서버에서 유효성 검사를 할 때 다음과 같이 Zod를 사용하는 이유는 무엇일까요?

```typescript
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0" }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status",
  }),
  date: z.string(),
});
```

답: 런타임에 입력된 값의 타입이나 범위가 유효한지 확인하기 위해

2. 다음 설정 코드에서 설정한 내용을 설명해주세요.

```typescript
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
```

답:

- 로그인은 `/login` 페이지에서 실행된다.
- `auth.user` 가 nullish가 아니거나 비어있지 않으면 로그인 된 상태이다.
- 요청한 url의 주소가 대시보드이면 로그인 상태를 확인한다.
- 그 외 주소에서 로그인 상태이면 대시보드로 리다이렉트한다.
- 대시보드가 아닌 주소에 접근을 하면 요청을 허용한다.
- 외부 provider는 없다.

3. 메타 데이터가 중요한 이유와 메타 데이터의 종류를 설명해주세요.

답:

- 이유:
  - 검색 엔진이 어플리케이션 페이지를 더 쉽게 찾을 수 있도록 도와줌
  - 소셜 미디어 플랫폼에서 공유를 할 때 컨텐츠를 더 눈에 띄게 해줌
  - 결론) SEO, 마케팅 효과
- 종류: Title, Description, Keyword, Open Graph, Favicon
