## 1. Layout과 Template의 공통점과 차이점을 설명해주세요.
- 둘 다 여러 경로 간에 공유 되는 UI입니다.
- Layout은 상태를 유지하며 다시 렌더링되지 않지만, Template는 상태를 유지하지 않아 다시 렌더링 됩니다.

  - Layout: 상태와 DOM을 유지하며 공통 UI를 적용하는 데 적합.
  - Template: 상태를 초기화하고 DOM을 재생성해야 하는 경우 적합.

## 2. Link 컴포넌트는 HTML a태그를 확장하여 prefetching을 제공합니다. prefetching에 대해 설명하고 prefetching이 어떤 상황에서 동작하는지 설명하세요.

- 사용자가 경로를 방문하기 전에 백그라운드에서 경로를 미리 로드하는 방법입니다.
- 사용자의 뷰포트에 Link가 표시되면 백그라운드에서 해당 경로의 데이터가 로드됩니다.
- 데이터는 Next.js의 라우트 캐시에 저장되어 사용자가 실제로 경로를 탐색할 때 즉시 사용할 수 있습니다.

## 3. Expected Error와 Unexpected errors를 각각 어떻게 처리해야하는지 설명하세요.
- Expected Error: 
  - useActionState 훅을 사용해 상태를 관리하며, try/catch 대신 반환 값을 사용합니다.
  - 반환값을 useActionState 훅에 전달하고 반환된 상태를 사용하여(state) 오류 메시지를 표시할 수 있습니다.

- Unexpected errors:
  - 해당 경로에 error.js를 생성해 에러처리
  - 루트 경로에 global-error.js를 생성해 전역 에러 처리