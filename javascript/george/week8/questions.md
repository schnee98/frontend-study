### 1. 브라우저 랜더링 과정을 설명하고 script 태그에서 Async와 Defer의 차이에 대해 설명해주세요.

### 2. 아래 코드의 실생 순서를 설명하세요.
```
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });
}

asyncRun(baseData, idx =>console.log(idx))
```

### 3. Async, Await을 설명하세요.