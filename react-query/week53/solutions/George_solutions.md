## 1. dehydrate(queryClient), HydrationBoundary에 대해 설명해주세요.
- dehydrate(queryClient): 서버에서 prefetchQuery로 가져온 데이터를 클라이언트측에 HTML과 함께 전달할때 데이터를 직렬화하여 전달하는 역할을 합니다.
- HydrationBoundary: dehydrate로 직렬화한 데이터를 클라이언트에서 다시 복원하여 캐시에 저장합니다.

## 2. prefetchQuery와 fetchQuery에 대해 설명해주세요.
- prefetchQuery:
  - 데이터를 미리 받아놓고 캐시에만 저장합니다.
  - 쿼리를 결과를 반환하지 않습니다.
  - 오류를 무시합니다.
- fetchQuery
  - 데이터를 미리 캐시에 저장하고, 가져온 데이터도 함께 반환합니다.
  - 오류를 무시하지 않습니다.

## 3. 다음 코드의 문제점을 설명하고 개선해보세요.
```js
function App() {
  usePrefetchQuery({
    queryKey: ["articles"],
    queryFn: (...args) => {
      return getArticles(...args);
    },
  });

  return (
    <Suspense fallback="Loading articles...">
      <Articles />
    </Suspense>
  );
}

function Articles() {
  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: (...args) => {
      return getArticles(...args);
    },
  });

  return articles.map((article) => (
    <div key={article.id}>
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </div>
  ));
}
```

- useQuery -> useSuspenseQuery
- useQuery는 pending 상태만 반환할 뿐, Promise를 throw하지 않기 때문에 Suspense에서 로딩 상태를 감지하지 못합니다.
- 따라서 위의 useQuery는 Suspense를 트리거할 수 없어 fallback이 동작하지 않습니다.