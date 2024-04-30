# 45장 - 프로미스(2024.04.16(화))

## 문제

1. 이하 비동기 처리를 병렬로 처리하시오

```
const promise1 = new Promise((resolve)=>setTimeout(()=>resolve(1),1000))
const promise2 = new Promise((resolve)=>setTimeout(()=>resolve(2),2000))
const promise3 = new Promise((resolve)=>setTimeout(()=>resolve(3),3000))
```

2. fetch함수의 return 값은 무엇인가?

3. 이하 잘 못된 url로 fetch요청을 했다.
result의 결과는? 

```
const result= fetch('https://dummyjson.com/xxx')
result.then(res => console.log(res))
```
