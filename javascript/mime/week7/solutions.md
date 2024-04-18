## 정답

1.

```
Promise.all([promise2,promise3,promise1]).then((res)=>console.log(res))
```

2. response 객체를 래핑한 promise객체

3. 프로미스가 "fulfilled" 로 반환된다.
   단, response 객체의 ok는 false, status는 404
