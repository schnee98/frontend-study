1. 동적 라우트 세그먼트를 정적으로 생성할 때는 어떤 함수를 쓰고, 이 함수의 좋은 점을 설명해주세요.

답:

- `generateStaticParams`
- fetch 요청이 있을 경우, 결과를 기억하여 여러 레이아웃, 페이지에서 사용할 수 있다.

2. Parallel Routes가 사용되기 좋은 예시를 알려주세요.

답:

- 모달
  - 로그인 모달
  - 사진 갤러리 모달
  - 장바구니 모달
- 로딩, 에러 UI

3. 다음은 feed/@modal/(..)photo/[id]/page.js 에서 photo/[id]/page.js 에 있는 컴포넌트를 가로챈 모습입니다. 어떤 방법으로 인해 가로챈 것일까요?

![Intercepting Routes](../asset/intercepting-routes.png)

답:

- 폴더에 (..) 컨벤션을 추가하였다.
- (..) 컨벤션은 상위 레벨의 세그먼트를 가로챈다.
- @modal은 세그먼트가 아닌 슬롯이므로 무시됨.
