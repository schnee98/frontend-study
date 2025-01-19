# nextjs

## Dynamic Routes, Parallel Routes, Intercepting Routes

1. catch-all과 optional catch-all 세그먼트의 차이점에 대해 설명해주세요.

_답_

```
optional의 경우 매개변수 없이도 경로가 일치한다.


동적 세그먼트는 대괄호 안에 줄임표를 추가하여 모든 후속 세그먼트를 포괄하도록 확장할 수 있다.
[...folderName]

Route: app/shop/[...slug]/page.js
params: { slug: ['a'] }, { slug: ['a', 'b'] }, { slug: ['a', 'b', 'c'] }

이중 대괄호로 포함하여 선택 사항으로 만들 수 있다.
[[...folderName]]

Route: app/shop/[[...slug]]/page.js
params: {}, { slug: ['a'] }, { slug: ['a', 'b'] }, { slug: ['a', 'b', 'c'] }
```

2. 아래의photo 세그먼트로의 경로는 어떻게 표시해야하는지 괄호 안을 채워주세요.

```
📂 feed
 ┣ 📂@modal
 ┃ ┗ 📂(_)photo      // <- 여기
 ┃ ┃ ┗  📂[id]
 ┃ ┃ ┃ ┗  📜page.js
 ┗ 📂photo
 ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┗ 📜marron_solutions.md
```

> 보기: (.), (..), (..)(..), (...)

_답_

```
(.)는 동일 레벨의 세그먼트를 매칭합니다.
(..)는 한 레벨 위의 세그먼트를 매칭합니다.
(..)(..)는 두 레벨 위의 세그먼트를 매칭합니다.
(...)는 루트 app 디렉토리의 세그먼트를 매칭합니다.

위 예제에서 photo 세그먼트로의 경로는 (..) 매처를 사용할 수 있습니다. @modal은 세그먼트가 아니기 때문입니다. 즉, 파일 시스템 상으로는 두 레벨 위에 있지만 라우트 세그먼트 상으로는 한 레벨 위에 있습니다
```

3. slot 탐색 유형인 Soft Navigation과 Hard Navigation에 대해 설명해주세요.

_답_

```
Soft Navigation은 클라이언트 측 라우팅
Next.js는 부분 렌더링을 수행
-  URL 경로가 변경되더라도, 현재 활성 상태와 일치하지 않는 다른 slot의 상태는 유지
-  현재 URL과 일치하지 않더라도 다른 slot의 활성 하위 페이지를 유지하면서 slot 내의 하위 페이지를 변경
- 경로 변경과 관련된 slot만 업데이트

Hard Navigation은 브라우저를 새로 고침하거나 사용자가 직접 URL로 접근할 때 발생
- Next.js는 서버에서 페이지를 다시 로드하면서 현재 URL과 일치하는 slot만 활성화
일치하지 않는 slot에 대해:
- default.js 파일이 존재하면 해당 파일을 렌더링.
- default.js 파일이 없으면 404 페이지를 렌더링.
```
