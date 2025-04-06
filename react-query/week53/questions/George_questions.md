## 1. dehydrate(queryClient), HydrationBoundary에 대해 설명해주세요.

## 2. prefetchQuery와 fetchQuery에 대해 설명해주세요.

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