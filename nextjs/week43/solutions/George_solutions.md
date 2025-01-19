## 1. TypeScript를 사용하는 경우 동적 세그먼트의 params 객체에 타입을 추가할 수 있습니다. 아래의 경로에 대해 적합한 타입을 작성하세요.
1.	경로: app/shop/[...slug]/page.js
2.	경로: app/shop/[[...slug]]/page.js
3.	경로: app/[categoryId]/[itemId]/page.js

- 답:
1.	{ slug: string[] }
2.	{ slug?: string[] }
3.	{ categoryId: string, itemId: string }

## 2.  아래 규칙은 어느 경로를 가로채는지 설명해주세요.

1.	(.)
2.	(..)
3.	(..)(..)
4.	(...)

- 답:
1.	(.): 동일한 경로
2.	(..): 한 단계 위의 경로
3.	(..)(..): 두 단계 위의 경로
4.	(...): 루트 app 디렉토리 경로

## 3. Soft Navigation과 Hard Navigation을 설명해주세요.
- Soft Navigation: 클라이언트 측 탐색 중에 Next.js는 부분 렌더링을 수행하여 슬롯 내의 하위 페이지를 변경하는 동시에 다른 슬롯의 활성 하위 페이지가 현재 URL과 일치하지 않더라도 이를 유지합니다.
- Hard Navigation: 전체 페이지 로드(브라우저 새로 고침) 후 Next.js는 현재 URL과 일치하지 않는 슬롯의 활성 상태를 확인할 수 없습니다. 대신 일치하지 않는 슬롯에 대해 default.js 파일을 렌더링하거나 default.js가 존재하지 않는 경우 404를 렌더링합니다.