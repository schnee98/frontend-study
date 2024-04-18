1. 콜백 헬이나 에러처리가 곤란함
2. X
3. fetch 함수가 반환한 프로미스가 resolve한 불리언 타입의 ok 상태를 확인

```
fetch("http://jsonplaceholder.bingsoo.com/xxx/1")
    .then(response => {
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(todo => console.log(todo))
    .catch(err => console.log(err));
```
