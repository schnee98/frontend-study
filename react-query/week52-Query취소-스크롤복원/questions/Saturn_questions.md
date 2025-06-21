1. 수동으로 쿼리를 취소하고 싶을 때 사용하는 함수는?

2. `await queryClient.refetchQueries({ type: "active" });` 의 의미는 어떻게 되나요?

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
