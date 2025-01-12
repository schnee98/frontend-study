1. 레이아웃과 템플릿의 공통점과 차이점을 설명해주세요.

답:

- 공통점:

  - 둘 다 페이지를 감싼다.
  - 둘 다 중첩이 가능하다.

- 차이점:
  - 레이아웃은 페이지 라우팅이 되어도 자식 클라이언트 컴포넌트의 상태가 유지된다.
  - 템플릿은 페이지 라우팅이 되면 인스턴스를 새로 만들고 자식 클라이언트 컴포넌트의 상태가 초기화 된다.

2. `Link` 컴포넌트가 prefetch 하는 방식을 모두 설명해주세요.

답:

- `prefetch === null` (default) : 렌더 트리에서 로딩 컴포넌트까지만 30초동안 prefetch한다.
- `prefetch === true` : 전체 페이지를 prefetch한다.
- `prefetch === false` : prefetch를 하지 않는다.

3. Expected Error와 Uncaught Exception의 차이점과 각각 어떻게 핸들링하는지 설명해주세요.

답:

- Excepted Error:

  - 어플리케이션이 정상적인 동작 범위 내에서 충분히 발생하고, 이에 대한 핸들링이 명확한 에러 (예: Form Validation, 서버 요청 실패 등)
    - `useActionState`에 state.message 를 변경하며 에러 메시지를 보여주는 방법
    - 페이지 (서버 컴포넌트) 에 에러 메시지를 string으로 리턴하는 방법

- Uncaught Exception:
  - 어플리케이션이 정상적인 동작 범위 밖에서 발생하면 안되거나 예상하지 못한 에러
    - 에러를 잡고 싶은 라우터에 `error.tsx` 를 생성하고 에러 컴포넌트 작성
    - app 폴더 최상위에 `global-error.tsx` 를 생성
      - `global-error.tsx`는 최상위 레이아웃을 대체하기 때문에, html, body 태그를 새로 써야한다.
