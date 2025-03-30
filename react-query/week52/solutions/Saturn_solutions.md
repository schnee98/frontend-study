1. 수동으로 쿼리를 취소하고 싶을 때 사용하는 함수는?

- queryClient.cancelQueries();

2. `await queryClient.refetchQueries({ type: "active" });` 의 의미는 어떻게 되나요?

- 모든 활성 쿼리 refetching

3. 아래와 같은 코드에서 Request Waterfall을 없앨 수 있는 방법은?

```tsx
   function Feed() {
   const { data, isPending } = useQuery({
       queryKey: ['feed'],
       queryFn: getFeed,
   })

   if (isPending) {
       return 'Loading feed...'
   }

   return (
       <>
       {data.map((feedItem) => {
           if (feedItem.type === 'GRAPH') {
           return <GraphFeedItem key={feedItem.id} feedItem={feedItem} />
           }

           return <StandardFeedItem key={feedItem.id} feedItem={feedItem} />
       })}
       </>
   )
   }

   function GraphFeedItem({ feedItem }) {
   const { data, isPending } = useQuery({
       queryKey: ['graph', feedItem.id],
       queryFn: getGraphDataById,
   })

   ...
   }
```

- 첫 번째 쿼리 getFeed에 그래프 데이터를 포함하도록 API를 리팩토링
- Server Components를 활용하여 서버에서 feed와 graph data를 모두 가져오기
