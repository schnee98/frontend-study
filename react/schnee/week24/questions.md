1. 다음 코드는 응답받은 json의 순서를 보장하기 위해 작성된 코드입니다. 여기서 순서를 보장하기 위해 활용할 수 있는 다른 방법이 있을까요?

```js
useEffect(() => {
  let ignore = false;

  fetchResults(query, page).then(json => {
    if (!ignore) {
      setResults(json);
    }
  });

  return () => {
    ignore = true;
  };
}, [query, page]);
```

2. 리액트 컴포넌트는 마운트, 업데이트, 언마운트라는 생명주기를 가집니다. Effect는 어떤 생명주기를 가지고 이 생명주기는 얼마나 자주 발생하나요?

3. Effect가 종속된 값들을 비교하는 동작을 구현해보세요.

```js

const isDependencyChanged = (prev: any[], cur: any[]) => // ...

```
