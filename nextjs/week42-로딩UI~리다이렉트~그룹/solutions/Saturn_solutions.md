1. 서버사이드렌더링(SSR)의 단계를 설명하세요.

   1. 주어진 페이지에 필요한 모든 데이터를 서버에서 가져옵니다.
   2. 서버가 페이지의 HTML을 렌더링합니다.
   3. 페이지의 HTML, CSS, JavaScript가 클라이언트로 전송됩니다.
   4. 생성된 HTML과 CSS를 사용하여 비상호작용(non-interactive) UI가 표시됩니다.
   5. 마지막으로 React가 UI를 **하이드레이션(hydration)**하여 상호작용이 가능하도록 만듭니다.

2. 1000개 이상의 대규모 리다이렉션 처리에 적합한 방식이 무엇인가요?

- 미들웨어를 사용한 커스텀 리다이렉트 솔루션 만들기

3. 다음 폴더 구조를 보았을 때 페이지의 URL 주소는 어떻게 될까요? 이유도 설명해주세요.

   ```
   app/
   └── dashboard/
       └── (overview)/
           ├── page.tsx
           └── loading.tsx

   ```

   - URL: /dashboard/overview
   - 이유: page.tsx의 위치에 따라 URL 주소가 결정됨
